import { useState } from "react";

function Membership() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  if (name && email) {
    setSubmitted(true);
  }
};

  return (
    <div>
      <div className="container">
        <h1>Become a Fan</h1>
        <p>Join the Scuderia Ferrari family and stay connected</p>
      </div>

      <section className="info">
        <p>
          Become an official member of the Ferrari fan community. Get exclusive updates,
          behind-the-scenes content, and be the first to know about team news,
          merchandise drops, and special events.
        </p>
      </section>

      <section className="membership-section">
        {!submitted && (
          <form onSubmit={handleSubmit} className="membership-form">
            <h2 className="mem-title">Join the Tifosi</h2>

            <div className="mem-card">
              <label >Full Name</label>
              <input
                 type="text"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
               />
            </div>

            <div className="mem-card">
              <label >Email Address</label>
              <input
                type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">
              Become a Member
            </button>
          </form>
        )}
        {submitted && (
          <div className="success-message">
            <h2>Welcome to the Family!</h2>
            <p>
              Thank you for joining!
            </p>
            <p className="success-detail">
              A confirmation has been sent to your Email.
              You'll now receive exclusive Ferrari updates and news.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Membership;