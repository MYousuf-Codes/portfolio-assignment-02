// components/Contact.tsx
import '../../styles/contact.css'; // Import the custom CSS

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-card">
          <form
            className="contact-form"
            action="https://formspree.io/f/mpwagjbl" // Formspree form endpoint
            method="POST"
          >
            {/* Name input */}
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                className="contact-input"
                placeholder="Name"
                required
              />
            </div>

            {/* Email input */}
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                className="contact-input"
                placeholder="Email"
                required
              />
            </div>

            {/* Message textarea */}
            <textarea
              name="message"
              className="contact-textarea"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>

            {/* Submit button */}
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
