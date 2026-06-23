/* global process */

const BREVO_API_URL = "https://api.brevo.com/v3";

const defaultPrompt = `# Complete Guide: Create Your AI Avatar & Generate a 10-Second UGC Video

## Step 1: Choose an AI Platform

You can use any of these websites. Most provide free plans or trial credits for new users.

* HeyGen - https://www.heygen.com
* Kling AI - https://klingai.com
* OpenArt - https://openart.ai
* Higgsfield AI - https://higgsfield.ai
* Runway - https://runwayml.com
* Pika - https://pika.art
* Luma AI (Dream Machine) - https://dream-machine.lumalabs.ai
* Synthesia - https://www.synthesia.io
* AI Studios - https://www.aistudios.com
* D-ID - https://www.d-id.com

---

# Step 2: Create Your Avatar

1. Sign up on your preferred platform.
2. Upload 5-10 clear photos of yourself or record a short video if required.
3. Generate your personal AI avatar.
4. Review the result and regenerate if needed until it closely resembles you.

---

# Step 3: Prepare Your Script

Keep it short (20-30 words) for a 10-second video.

**Example Script:**

"Need a stunning website, a powerful mobile app, or high-converting Google and Meta Ads? We help businesses grow with smart digital solutions."

---

# Step 4: Configure the Video

* Format: Vertical (9:16)
* Duration: 10 seconds
* Background: Modern office or startup workspace
* Style: Realistic UGC
* Camera: Slight handheld movement or slow zoom
* Lighting: Natural and professional

---

# Step 5: Master Prompt

Create a 10-second ultra-realistic UGC-style vertical video featuring my custom AI avatar speaking confidently in a modern office. The avatar looks directly into the camera with natural lip sync, realistic facial expressions, and subtle hand gestures. While speaking, premium floating animations appear around the avatar, including responsive website designs, mobile app interfaces, Google Ads dashboards, Meta Ads campaign graphics, SEO growth charts, analytics reports, coding windows, cloud icons, digital marketing visuals, and business growth indicators. The office is clean, bright, and modern with laptops and startup aesthetics. Use cinematic lighting, smooth camera movement, high realism, and professional quality suitable for LinkedIn, Instagram Reels, and TikTok.

---

# Step 6: Optional Voiceover

"Looking for a website, mobile app, or results-driven Google and Meta Ads? Let's build something amazing together."

---

# Step 7: Export

* Resolution: 1080 x 1920
* Aspect Ratio: 9:16
* Duration: 10 seconds
* Quality: HD or higher

Your AI UGC video is now ready to post on LinkedIn, Instagram Reels, YouTube Shorts, or other social media platforms.`;

const json = (response, statusCode, body) => {
    response.statusCode = statusCode;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(body));
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const brevoRequest = async (path, options = {}) => {
    const response = await fetch(`${BREVO_API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
            ...(options.headers || {}),
        },
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
        const message = data?.message || "Brevo request failed.";
        throw new Error(message);
    }

    return data;
};

const saveLeadToGoogleSheet = async (email) => {
    if (!process.env.GOOGLE_SHEET_WEBHOOK_URL) {
        return;
    }

    const response = await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            source: "Free UGC AI Prompt",
            submittedAt: new Date().toISOString(),
        }),
    });

    if (!response.ok) {
        throw new Error("Could not save email to Google Sheet.");
    }
};

export default async function handler(request, response) {
    if (request.method !== "POST") {
        response.setHeader("Allow", "POST");
        return json(response, 405, { message: "Method not allowed." });
    }

    if (!process.env.BREVO_API_KEY) {
        return json(response, 500, { message: "Brevo API key is not configured." });
    }

    const senderEmail = process.env.BREVO_SENDER_EMAIL || "yashdeliwala10@gmail.com";
    const senderName = process.env.BREVO_SENDER_NAME || "Yash Deliwala";

    try {
        const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
        const email = String(body?.email || "").trim().toLowerCase();

        if (!isValidEmail(email)) {
            return json(response, 400, { message: "Please enter a valid email address." });
        }

        await brevoRequest("/contacts", {
            method: "POST",
            body: JSON.stringify({
                email,
                updateEnabled: true,
            }),
        }).catch((error) => {
            if (!String(error.message).toLowerCase().includes("already exists")) {
                throw error;
            }
        });

        await saveLeadToGoogleSheet(email);

        await brevoRequest("/smtp/email", {
            method: "POST",
            body: JSON.stringify({
                sender: {
                    name: senderName,
                    email: senderEmail,
                },
                to: [{ email }],
                subject: "Your Free UGC AI Video Prompt",
                htmlContent: `
                    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#171321;max-width:680px;margin:0 auto;padding:24px;">
                        <h1 style="font-size:28px;line-height:1.2;margin:0 0 16px;">Your free UGC AI video prompt</h1>
                        <p>Hey,</p>
                        <p>Here is the prompt framework I promised. Customize the bracketed parts for your own product, offer, or client.</p>
                        <pre style="white-space:pre-wrap;background:#f4f1ff;border:1px solid #ddd4ff;border-radius:8px;padding:18px;font-family:Consolas,monospace;font-size:14px;line-height:1.55;">${defaultPrompt}</pre>
                        <p>Use it, test it, and improve it based on the type of video you want to generate.</p>
                        <p style="margin-top:28px;">- ${senderName}</p>
                    </div>
                `,
                textContent: `Hey,\n\nHere is the free UGC AI video prompt I promised:\n\n${defaultPrompt}\n\n- ${senderName}`,
            }),
        });

        return json(response, 200, { message: "Prompt sent successfully." });
    } catch (error) {
        return json(response, 500, {
            message: error.message || "Could not send the prompt right now.",
        });
    }
}
