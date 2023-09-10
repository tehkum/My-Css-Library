import "./documentation.css";
import MyCodeBlock from "./code/codeBlock";
import HeadingComponent from "../components/Heading/Heading";

export default function Heading() {
  return (
    <div className="main-container-box">
      <h2>Header Component</h2>
      <p>
        The heading component is used to render symentic HTML heading element.
      </p>
      <div className="main-container-box-avatar main-container-box-heading">
        {["3xl", "2xl", "xl", "lg", "md", "sm", "xs", "2xs"].map((size) => (
          <HeadingComponent
            text={`This heading is of ${size} size`}
            size={size}
          />
        ))}
      </div>
      <p>How to use heading component?</p>
      <div className="code-box">
        {["3xl", "2xl", "xl", "lg", "md", "sm", "xs", "2xs"].map((size) => (
          <MyCodeBlock
            code={`<HeadingComponent text={"This heading is of ${size} size"} size={size}/>`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
    </div>
  );
}
