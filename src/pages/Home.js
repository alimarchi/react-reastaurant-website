import classes from "../styles/Home.module.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";

function Home() {
  return (
    <div
      className={classes.home}
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className={classes["header-container"]}>
        <h1>Pedro's Pizzeria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
