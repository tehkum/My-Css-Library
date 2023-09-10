import AlertComponent from "../components/Alert/Alert";
import "./documentation.css";
import Highlight from "react-highlight";
import MyCodeBlock from "./code/codeBlock";
import BadgeComponent from "../components/Badge/Badge";
import HeadingComponent from "../components/Heading/Heading";
import TextComponent from "../components/Text/Text";

export default function Text() {
  return (
    <div className="main-container-box">
      <h2>Text Component</h2>
      <p>
        The text component is used to render text and paragraphs with an
        interface.
      </p>
      <div className="main-container-box-avatar main-container-box-heading">
        {["3xl", "2xl", "xl", "lg", "md", "sm", "xs", "2xs"].map((size) => (
          <TextComponent text={`This text is of ${size} size`} size={size} />
        ))}
      </div>
      <p>How to use text component?</p>
      <div className="code-box">
        {["3xl", "2xl", "xl", "lg", "md", "sm", "xs", "2xs"].map((size) => (
          <MyCodeBlock
            code={`<TextComponent text={"This text is of ${size} size"} size={${size}}/>`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
    </div>
  );
}
