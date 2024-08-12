import { badpbxexpData } from "../../src/lib/data/cloudpbxdata";
import SingleExperience from "./SingleExperience";

export default function BadPbXperiences() {
  return (
    <div className="grid gap-4">
      {badpbxexpData.map((experience) => {
        const { icon, title, content } = experience;
        return (
          <SingleExperience
            key={title}
            icon={icon}
            title={title}
            content={content}
          />
        );
      })}
    </div>
  );
}
