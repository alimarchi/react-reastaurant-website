import classes from '../styles/Menu.module.css';
import { MenuList } from "../helpers/MenuList"

function Menu() {
  return (
    <div className={classes.menu}>
        <h1 className={classes["menu-title"]}>Our Menu</h1>
        <div className={classes["menu-list"]}>
            {MenuList.map((menuItem, key) => {
                return <div>{menuItem.name}</div>
            })}
        </div>
    </div>
  );
}

export default Menu;
