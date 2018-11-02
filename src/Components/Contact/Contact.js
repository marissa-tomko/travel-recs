import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return(
      <div className="contact-div">
        <div className="contact-heading">
          <h1>Contact</h1>
          <hr/>
        </div>


        <p className="contact-text">
          Have some input about our suggestions? Recommendations of your own?
          Just think we look cool AF (we are)? Get in touch!
        </p>

        <div className="contact-form">

          <form action="https://formspree.io/marissatomko@gmail.com" method="POST">
            <input type="text" name="message" placeholder="What's up?" />
            <input type="email" name="replyto" placeholder="What's your email?" />

            <input type="hidden" name="_subject" value="Contact form" />

            <input type="submit" value="Send" />
          </form>

        </div>


      </div>
    )
  }
}

export default Contact;
