import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useRef();
  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "37903e98-c424-4ddd-814f-9bbb15a4a22b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormSubmitted(true);
      event.target.reset();
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>modupe.akanni@kibo.school</h5>
            <a href="mailto:modupe.akanni@kibo.school">Send a message</a>
          </article>
          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>goketech</h5>
            <a href="https://m.me/goketech" target='_blank'>Send a message</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348117266403</h5>
            <a href="https://wa.me/message/JBG2LZUBHKQCO1" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form className="gform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Send Message
          </button>
          {formSubmitted && <p>Thank you! Your message has been sent successfully.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
