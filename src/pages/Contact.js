import classes from "../styles/Contact.module.css";
import LeftPizza from "../assets/pizzaLeft.jpg";

function Contact() {
  return (
    <div className={classes.contact}>
      <div
        className={classes["left-side"]}
        style={{ backgroundImage: `url(${LeftPizza})` }}
      ></div>
      <div className={classes["right-side"]}>
        <h1>Contact Us</h1>
        <form className={classes["contact-form"]} method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter your full name" type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter your full email" type="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
