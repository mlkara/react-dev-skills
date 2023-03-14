import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
  const SkillListItems = skills.map((skill, idx) => (
    <SkillListItem
      name={skill.name}
      level={skill.level}
      index={idx}
      key={idx}
    />
  ));

  return <ul className="SkillList">{SkillListItems}</ul>;
}
