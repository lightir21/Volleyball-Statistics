import "./CreateATeamForm.scss";

const CreateATeamForm = ({ img }) => {
  return (
    <form className="createATeamForm">
      <div className="createATeamForm__top">
        <div className="createATeamForm__inputContainer">
          <label htmlFor="name">Team Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div className="createATeamForm__inputContainer">
          <label htmlFor="image">
            <img src={img && img} alt="" />
          </label>
          <input type="file" id="image" name="image" />
        </div>
      </div>

      <div className="createATeamForm__bottom">
        <div className="createATeamForm__inputContainer">
          <label htmlFor="court">Home Court</label>
          <input type="text" name="court" id="court" />
        </div>

        <div className="createATeamForm__inputContainer">
          <label htmlFor="league">League</label>
          <input type="text" name="league" id="league" />
        </div>

        <div className="createATeamForm__inputContainer">
          <label htmlFor="coach">Coach</label>
          <input type="text" name="coach" id="coach" />
        </div>

        <div className="createATeamForm__inputContainer">
          <label htmlFor="assistantCoach">Assistant Coach</label>
          <input type="text" name="assistantCoach" id="assistantCoach" />
        </div>

        <div className="createATeamForm__selectContainer">
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender">
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="girls">Girls</option>
            <option value="boys">Boys</option>
          </select>
        </div>
      </div>
    </form>
  );
};
export default CreateATeamForm;
