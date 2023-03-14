import "./NewSkillForm.css";

export default function NewSkillForm() {
  return (
    <form className="NewSkillForm">
      <label>Skill</label>
      <input className="NewSkillForm > input"></input>
      <label>Level</label>
      <select className="NewSkillForm > select">
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
      </select>
      <button className="NewSkillForm > button">Add Skills</button>
    </form>
  );
}
