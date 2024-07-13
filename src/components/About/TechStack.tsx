import {
  programmingLanguage, devOps, TechItem
} from "../../config/About/TechStack";

const TechStack: React.FC = () => {

  const renderTechStackList = (techStack: TechItem[]) => {
    return (
      <ul className="techstack-list has-scrollbar">
        {techStack.map((item: TechItem, index: number) => (   // TODO: Do not use Array index in keys
          <li key={index} className="techstack-item">
            <img src={item.iconUrl} alt={item.name} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <section className="techstack">
      <p>
        <h3><code> $ ls -al Tech Stack</code></h3>
      </p>

      {renderTechStackList(programmingLanguage)}
      {renderTechStackList(devOps)}
    </section>
  );
}

export default TechStack;
