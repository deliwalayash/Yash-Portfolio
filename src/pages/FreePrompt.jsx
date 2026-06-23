import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FreePrompt = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cleanEmail = email.trim().toLowerCase();

        if (!cleanEmail) {
            setStatus("error");
            setMessage("Please enter your email address.");
            return;
        }

        if (!emailPattern.test(cleanEmail)) {
            setStatus("error");
            setMessage("Please enter a valid email address, like name@example.com.");
            return;
        }

        setStatus("loading");
        setMessage("");
        setEmail(cleanEmail);

        try {
            const response = await fetch("/api/send-prompt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: cleanEmail }),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong. Please try again.");
            }

            setStatus("success");
            setMessage("Sent. Please check your Inbox. If you do not see it, check the Promotions tab or Spam folder.");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setMessage(error.message || "Could not send the prompt right now.");
        }
    };

    return (
        <>
            <header className="free-prompt-header">
                <a className="free-prompt-header__brand" href="/">
                    <img src="/coder-2.png" alt="Code With Yash" />
                    <span>Code With Yash</span>
                </a>
                <a className="free-prompt-header__link" href="/">
                    <i className="ri-arrow-left-line"></i>
                    Portfolio
                </a>
            </header>

            <section id="free-prompt" className="free-prompt-section">
                <div className="free-prompt-section__inner">
                    <div className="free-prompt-section__copy">
                        <span className="free-prompt-section__badge">
                            <i className="ri-sparkling-2-line"></i>
                            Free UGC AI Prompt
                        </span>
                        <h2>Get the AI avatar UGC video procedure.</h2>
                        <p>
                            Enter your email first. I will send you the complete step-by-step guide to create an AI avatar and generate a 10-second UGC video.
                        </p>
                        <div className="free-prompt-section__points">
                            <span><i className="ri-check-line"></i> AI avatar setup steps</span>
                            <span><i className="ri-check-line"></i> 10-second UGC master prompt</span>
                            <span><i className="ri-check-line"></i> Delivered instantly to your inbox</span>
                        </div>
                    </div>

                    <div className="free-prompt-section__form-panel">
                        <div className="free-prompt-section__form-header">
                            <i className="ri-mail-send-line"></i>
                            <div>
                                <h3>Get the free procedure</h3>
                                <p>Write your email and receive the complete guide automatically.</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="free-prompt-section__form" noValidate>
                            <label htmlFor="prompt-email">Email address</label>
                            <input
                                id="prompt-email"
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    if (status === "error") {
                                        setStatus("idle");
                                        setMessage("");
                                    }
                                }}
                                onBlur={() => setEmail((currentEmail) => currentEmail.trim())}
                                placeholder="you@example.com"
                                autoComplete="email"
                                inputMode="email"
                                aria-invalid={status === "error" ? "true" : "false"}
                                aria-describedby={message ? "prompt-form-message" : undefined}
                                disabled={status === "loading"}
                            />
                            <button type="submit" disabled={status === "loading"}>
                                {status === "loading" ? (
                                    <>
                                        <i className="ri-loader-4-line"></i>
                                        Sending
                                    </>
                                ) : (
                                    <>
                                        <i className="ri-send-plane-fill"></i>
                                        Get Free Prompt
                                    </>
                                )}
                            </button>
                        </form>

                        {message && (
                            <p id="prompt-form-message" className={`free-prompt-section__message free-prompt-section__message--${status}`}>
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FreePrompt;
