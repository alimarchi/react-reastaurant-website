import classes from "../styles/About.module.css";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";

function About() {
  return (
    <div className={classes.about}>
      <div
        className={classes["about-top"]}
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className={classes["about-bottom"]}>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis. Dolor purus non enim praesent elementum facilisis. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Dolor purus non enim praesent elementum. Volutpat sed cras ornare arcu. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Leo vel orci porta non pulvinar. Lectus quam id leo in vitae turpis. Felis eget velit aliquet sagittis id consectetur purus ut. Nunc lobortis mattis aliquam faucibus purus in massa. Amet cursus sit amet dictum. Sem integer vitae justo eget magna fermentum iaculis. A erat nam at lectus. Facilisis volutpat est velit egestas dui id ornare arcu.</p>
      </div>
    </div>
  );
}

export default About;
