import { useState } from "react";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    text: string;
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email." });
      return;
    }

    try {
      setSubmitting(true);

      // CHANGE HERE: Laravel API URL
      const res = await fetch("https://mailer.oxygenarabia.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName, // Laravel expects 'name'
          email,
          message,
        }),
      });

      if (res.ok) {
        setStatus({ type: "success", text: "Message sent successfully." });
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => ({} as any));
        setStatus({
          type: "error",
          text: data?.error || "Failed to send message.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="section-container" id="contact-us-section">
      <section className="wrapper">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            {/* Left: Contact Info */}
            <div className="lg:w-1/2 lg:mx-6">
              {/* ...Your existing contact info JSX remains unchanged... */}
            </div>

            {/* Right: Contact Form */}
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg glass-card lg:max-w-xl">
                <h1 className="text-lg font-medium text-gray-700">
                  What do you want to ask
                </h1>

                <form className="mt-6" onSubmit={handleSubmit} noValidate>
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  {status && (
                    <p
                      className={
                        status.type === "success"
                          ? "mt-4 text-green-600"
                          : "mt-4 text-red-600"
                      }
                      role="status"
                    >
                      {status.text}
                    </p>
                  )}

                  <button
                    className="primary-btn w-full mt-6 shade-x z-10 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={submitting}
                    type="submit"
                  >
                    {submitting ? "Sending..." : "Get in touch"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
