import "./documentation.css";
import MyCodeBlock from "./code/codeBlock";
import FloatingButton from "../components/Button/FloatingButton";
import NormalButton from "../components/Button/NormalButton";
import IconButton from "../components/Button/IconButton";

export default function Button() {
  return (
    <div className="main-container-box">
      <h2>Button Component</h2>
      <h3>Normal Button</h3>
      <p>The button component provides various style for different actions.</p>
      <div className="main-container-box-avatar">
        <NormalButton type="solid" text="Solid" />
        <NormalButton type="outlined" text="Outlined" />
        <NormalButton type="ghost" text="Ghost" />
        <NormalButton type="link" text="Link" />
      </div>
      <p>How to use normal button component?</p>
      <div className="code-box">
        {["solid", "outlined", "ghost", "link"].map((content) => (
          <MyCodeBlock
            code={`<NormalButton type="${content}" text="${content}" />`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
      {/* ************************************************ */}
      <h3>Icon Button</h3>
      <p>Icon button component combines icon with text for actions.</p>
      <div className="main-container-box-avatar">
        <IconButton type="Search" />
        <IconButton type="Edit" />
        <IconButton type="Delete" />
        <IconButton type="Add" />
      </div>
      <p>How to use icon button component?</p>
      <div className="code-box">
        {["search", "edit", "delete", "add"].map((content) => (
          <MyCodeBlock
            code={`<IconButton type="${content}" />`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
      {/* ************************************************ */}
      <h3>Floating Button</h3>
      <p>
        Floating action button component provides quick action for user
        interaction.
      </p>
      <div className="main-container-box-avatar">
        <FloatingButton type="add" />
        <FloatingButton type="edit" />
      </div>
      <p>How to use floating button component?</p>
      <div className="code-box">
        {["add", "edit"].map((content) => (
          <MyCodeBlock
            code={`<FloatingButton type="${content}" />`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
    </div>
  );
}
