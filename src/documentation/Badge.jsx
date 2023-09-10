import "./documentation.css";
import MyCodeBlock from "./code/codeBlock";
import BadgeComponent from "../components/Badge/Badge";

export default function Badge() {
  return (
    <div className="main-container-box">
      <h2>Badge Component</h2>
      <p>
        The badge component is used to highlight and display various types of
        message with short information, label or status.
      </p>
      <div className="main-container-box-avatar">
        <BadgeComponent text="Default" type="default" />
        <BadgeComponent text="Success" type="success" />
        <BadgeComponent text="Removed" type="removed" />
        <BadgeComponent text="New" type="new" />
      </div>
      <p>How to use badge component?</p>
      <div className="code-box">
        {["default", "success", "removed", "new"].map((content) => (
          <MyCodeBlock
            code={`<BadgeComponent text="${content}" type="${content}" />`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
    </div>
  );
}
