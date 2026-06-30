import { createClient } from "@supabase/supabase-js";

const clientServices = [
  "Google Ads",
  "Social Media",
  "WhatsApp API",
  "Website",
  "SEO",
  "Meta Ads",
  "AI Video",
  "GMB",
];

const supplierServices = [
  "GMB",
  "AI Video",
  "Website",
  "WhatsApp API",
  "Social Media",
  "SEO",
  "Design",
  "Development",
];

const validLeadTypes = new Set(["client", "supplier"]);
const validSources = new Set(["Meeting", "Instagram", "WhatsApp", "Call", "Referral", "Website", "Other"]);

const json = (body, status = 200) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });

const clean = (value, maxLength = 500) =>
  String(value || "")
    .trim()
    .slice(0, maxLength);

const normalizeServices = (services, leadType) => {
  const allowed = new Set(leadType === "supplier" ? supplierServices : clientServices);
  return Array.isArray(services)
    ? services.map((service) => clean(service, 80)).filter((service) => allowed.has(service))
    : [];
};

const getSupabaseServerClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
};

const getBearerToken = (request) => {
  const header = request.headers.get("authorization") || "";
  const [scheme, token] = header.split(" ");
  return scheme?.toLowerCase() === "bearer" ? token : "";
};

export async function POST(request) {
  if (!process.env.GOOGLE_SHEET_WEBHOOK_URL) {
    return json({ message: "Google Sheet webhook is not configured." }, 500);
  }

  try {
    const token = getBearerToken(request);
    const supabase = getSupabaseServerClient();

    if (!supabase) {
      return json({ message: "Supabase keys are not configured." }, 500);
    }

    if (!token) {
      return json({ message: "Please login again." }, 401);
    }

    const { data: userData, error: userError } = await supabase.auth.getUser(token);

    if (userError || !userData.user) {
      return json({ message: "Your session expired. Please login again." }, 401);
    }

    const body = await request.json();
    const leadType = clean(body.leadType, 20).toLowerCase();
    if (!validLeadTypes.has(leadType)) {
      return json({ message: "Please choose client or supplier." }, 400);
    }

    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const company = clean(body.company, 160);
    const source = clean(body.source, 40);
    const services = normalizeServices(body.services, leadType);
    const requirement = clean(body.requirement, 1200);
    const notes = clean(body.notes, 1200);
    const followUpDate = clean(body.followUpDate, 40);

    if (!name || !phone) {
      return json({ message: "Name and phone number are required." }, 400);
    }

    if (source && !validSources.has(source)) {
      return json({ message: "Please select a valid source." }, 400);
    }

    const payload = {
      leadType,
      sheetName: leadType === "supplier" ? "Suppliers" : "Clients",
      name,
      phone,
      company,
      source,
      services,
      servicesText: services.join(", "),
      requirement,
      notes,
      followUpDate,
      status: "New",
      submittedAt: new Date().toISOString(),
    };

    const sheetResponse = await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    let responseText = "";
    try {
      responseText = await sheetResponse.text();
    } catch (_) {}

    if (!sheetResponse.ok) {
      throw new Error(`Google Sheet returned status ${sheetResponse.status}: ${responseText || "No details"}`);
    }

    try {
      const result = JSON.parse(responseText);
      if (result && result.status === "error") {
        throw new Error(`Apps Script Error: ${result.message}`);
      }
    } catch (parseError) {
      // If it's not JSON, check if it's an HTML error page (like a Google sign-in/auth redirect)
      if (responseText.includes("Authorization is required") || responseText.includes("Sign in")) {
        throw new Error("Google Webhook needs authorization or is set to private. Make sure 'Who has access' is set to 'Anyone'.");
      }
      // If it's not JSON and not a known HTML error, check if it contains other error keywords
      if (responseText.includes("Error") || responseText.includes("Exception")) {
        throw new Error(`Webhook Error: ${responseText.slice(0, 200)}`);
      }
    }

    return json({ message: "Lead saved.", leadType });
  } catch (error) {
    console.error("Error saving lead:", error);
    return json({ message: error.message || "Could not save lead right now." }, 500);
  }
}

export async function GET(request) {
  if (!process.env.GOOGLE_SHEET_WEBHOOK_URL) {
    return json({ message: "Google Sheet webhook is not configured." }, 500);
  }

  try {
    const token = getBearerToken(request);
    const supabase = getSupabaseServerClient();

    if (!supabase) {
      return json({ message: "Supabase keys are not configured." }, 500);
    }

    if (!token) {
      return json({ message: "Please login again." }, 401);
    }

    const { data: userData, error: userError } = await supabase.auth.getUser(token);

    if (userError || !userData.user) {
      return json({ message: "Your session expired. Please login again." }, 401);
    }

    // Call Google Apps Script Web App with GET
    const sheetResponse = await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
      method: "GET",
      headers: {
        "Cache-Control": "no-store",
      },
    });

    let responseText = "";
    try {
      responseText = await sheetResponse.text();
    } catch (_) {}

    if (!sheetResponse.ok) {
      throw new Error(`Google Sheet returned status ${sheetResponse.status}: ${responseText || "No details"}`);
    }

    const data = JSON.parse(responseText);
    if (data.status === "error") {
      throw new Error(data.message || "Failed to load leads from sheet.");
    }

    return json(data);
  } catch (error) {
    console.error("Error loading leads:", error);
    return json({ message: error.message || "Could not load leads right now." }, 500);
  }
}
