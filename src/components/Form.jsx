import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2c6efe99-dc5c-4acc-b523-656523121182");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted successfully")
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-purple-500"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-purple-500"
      />

      <textarea
        required
        placeholder="Your Message"
        name="message"
        rows={4}
        className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-purple-500 resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md shadow-purple-500/30 text-sm sm:text-base"
      >
        Send Message
      </button>
      <span>{result}</span>
    </form>
  );
}
