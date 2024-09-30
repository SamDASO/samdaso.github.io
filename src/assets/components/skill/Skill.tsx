import { Bar, BarChart, XAxis, YAxis } from "recharts";
import style from "./Skill.module.scss"

interface SkillInterface {
/**name of the skill */
name: string;
/**level of the skill. Need to be between 0 and 1. 1 will be 100% */
level: number;
}

interface SkillData {
  name: string;
  notReached: number;
  reached: number;
}



function Skill({name, level}: SkillInterface) {
  
  const data: SkillData[] = [
    {
      name: "skill",
      notReached: 1 - level,
      reached: level,
    },
  ];

  return (
    <div className={style.container}>
      <p className={style.nameContainer}>{name}</p>

      <BarChart
        width={50}
        height={30}
        data={data}
        layout="vertical"
        
      >

      <XAxis type="number" hide />
      <YAxis type="category" dataKey="name" hide />
        
      <Bar dataKey="reached" stackId="a" fill="#534666" />
      
      <Bar dataKey="notReached" stackId="a" fill="#899a9b"/>
      </BarChart>
      <p className={style.label}>{`${(data[0].reached * 100)}%`}</p>

  </div>
  );
}

export default Skill