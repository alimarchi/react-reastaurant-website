import classes from "../styles/Menu.module.css";

function MenuItem(props) {
  return (
    <div className={classes["menu-item"]}>
        <div style={{ backgroundImage: `url(${props.image})`}}></div>
        <h1>{props.name}</h1>
        <p>{props.price}</p>
    </div>
  );
}

export default MenuItem;
