import "./SkillListItem.css";

export default function SkillListItem(skill) {
  return (
    <li className="SkillListItem teal-text">
      {skill.name} <div className="level"> Level {skill.level}</div>
    </li>
  );
}
