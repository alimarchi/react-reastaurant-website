import classes from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes["social-media"]}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <p>&copy; 2023 @alimarchi</p>
    </div>
  );
}

export default Footer;
