import AvatarComponent from "../components/Avatar/Avatar";
import "./documentation.css";
import MyCodeBlock from "./code/codeBlock";

export default function Avatar() {
  return (
    <div className="main-container-box">
      <h2>Avatar Component</h2>
      <p>
        The avatar component display an image representing a user or entity,
        along with a name
      </p>
      <div className="main-container-box-avatar">
        <AvatarComponent
          src="https://picsum.photos/200/300"
          size="sm"
          name="peter parker"
        />
        <AvatarComponent
          src="https://picsum.photos/200/300"
          size="md"
          name="peter parker"
        />
        <AvatarComponent
          src="https://picsum.photos/200/300"
          size="lg"
          name="peter parker"
        />
        <AvatarComponent
          src="https://picsum.photos/200/300"
          size="xl"
          name="peter parker"
        />
      </div>
      <p>How to use avatar component?</p>
      <div className="code-box">
        {["sm", "md", "lg", "xl"].map((size) => (
          <MyCodeBlock
            code={`<AvatarComponent src="https://picsum.photos/200/300" size="${size}" name="peter parker"/>`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
    </div>
  );
}
