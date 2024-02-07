import { Link } from "react-router-dom";
import "./MainDashboardPage.scss";

const list = ["teams", "games-history", "statistics", "settings"];

const MainDashboardPage = () => {
  return (
    <div className="mainDashboard">
      <h3>DashBoard</h3>
      <Link className="mainDashboard__newMatchBtn" to="/new-match">
        New Match
      </Link>
      <div className="mainDashboard__container">
        <Link to={"/my-team"}>
          {" "}
          <div className="mainDashboard__myTeam">My Team</div>
        </Link>
        <ul className="mainDashboard__list">
          {list.map((item) => (
            <Link key={item} to={item}>
              <li className="mainDashboard__list_item">{item}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MainDashboardPage;
