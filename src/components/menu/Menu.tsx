import { Link } from "react-router-dom";
import { menu } from "../../data";
import "./menu.scss";
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link key={listItem.id} className="listItem" to={listItem.url}>
                <img src={listItem.icon} alt="icon" />
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
