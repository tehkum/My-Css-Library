import AlertComponent from "../components/Alert/Alert";
import "./documentation.css";
import Highlight from "react-highlight";
import MyCodeBlock from "./code/codeBlock";

export default function Alert() {
  return (
    <div className="main-container-box">
      <h2>Alert Component</h2>
      <p>
        The alert component is used to display various types of message with
        different status
      </p>
      <div className="main-container-box-avatar">
        <AlertComponent message="This is a danger message" status="danger" />
        <AlertComponent message="This is a success message" status="success" />
        <AlertComponent message="This is a warning message" status="warning" />
        <AlertComponent
          message="This is a information message"
          status="information"
        />
      </div>
      <p>How to use alert component?</p>
      <div className="code-box">
        {["danger", "success", "warning", "information"].map((value) => (
          <MyCodeBlock
            code={`<AlertComponent message="This is a ${value} message" status="${value}" />`}
            language={"javascript"}
            showLineNumbers={false}
            startingLineNumber={0}
          />
        ))}
      </div>
    </div>
  );
}
