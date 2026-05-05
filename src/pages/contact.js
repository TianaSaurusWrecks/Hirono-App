export default function Contact() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const data = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { Accept: "application/json" },
        });

        if (response.ok) {
            window.location.href = "/thanks";
        } 

    };


  return (
    <div className="contact-page">
      <h1 className="collection">Contact</h1>

      <form
        action="https://formspree.io/f/xwvyonkk"
        method="POST"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        {/* redirect to thanks page after submit */}

        <input
          type="hidden"
          name="_next"
          value="http://localhost:3000/thanks"
        />

        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="12" required></textarea>
        </div>

        <div className="contact-btn-area">
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
