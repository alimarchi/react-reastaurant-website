import classes from "../styles/Menu.module.css";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

function Menu() {
  return (
    <div className={classes.menu}>
      <h1 className={classes["menu-title"]}>Our Menu</h1>
      <div className={classes["menu-list"]}>
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
