import { useState } from "react";
import { CreateATeamForm } from "../../components";
import defaultImage from "../../assets/Demo-profile-picture.png";

const MyTeamPage = () => {
  const [myTeam, setMyTeam] = useState({
    name: "ayalot",
    logo: "",
    homeCourt: "",
    league: "artzit",
    coach: "Meir",
    assistantCoach: "Roi",
    gender: "female",
  });

  const { name, logo, homeCourt, league, coach, assistantCoach, gender } =
    myTeam;

  return (
    <div className="myTeam">
      {!myTeam ? (
        <CreateATeamForm />
      ) : (
        <div className="myTeam__container">
          <div className="myTeam__top">
            <h3>{name}</h3>
            <img src={logo || defaultImage} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};
export default MyTeamPage;
