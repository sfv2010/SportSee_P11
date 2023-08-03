import "./Sidebar.css";
import zen from "../../assets/zen.svg";
import swimming from "../../assets/swimming.svg";
import bicycle from "../../assets/bicycle.svg";
import barbell from "../../assets/barbell.svg";

function Sidebar() {
    return (
        <div className="sidebarContainer">
            <nav className="sidebarNav">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src={zen} alt="" className="sidebarImg" />
                    </li>
                    <li className="sidebarListItem">
                        <img src={swimming} alt="" className="sidebarImg" />
                    </li>
                    <li className="sidebarListItem">
                        <img src={bicycle} alt="" className="sidebarImg" />
                    </li>
                    <li className="sidebarListItem">
                        <img src={barbell} alt="" className="sidebarImg" />
                    </li>
                </ul>
            </nav>
            <small className="sidebarSmall">Copiryght, SportSee 2020</small>
        </div>
    );
}

export default Sidebar;
