import "../styles/SideDrawer.css";
import { Link } from "react-router-dom";


const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];


  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/task">
          <i className="fas fa-calendar-check fa-lg"></i>
            <span>
              Tasks{" "}
              {/* <span className="sidedrawer__cartbadge"></span> */}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/taskmanager">Task Manger</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
