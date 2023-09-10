import "./documentation.css";
import MyCodeBlock from "./code/codeBlock";
import ResponsiveImage from "../components/Image/ResponsiveImage";
import RoundImage from "../components/Image/RoundImage";

export default function ImageFn() {
  return (
    <div className="main-container-box">
      <h2>Image Components</h2>
      <h3>Responsive Image Component</h3>
      <p>
        This image component is used to display image with support of fallback.
      </p>
      <div className="main-container-box-avatar">
        <ResponsiveImage
          src="https://picsum.photos/600/400"
          // src="https://picsum.photos/seed/picsum/200/300"
          alt="responsive image"
        />
      </div>
      <p>How to use responsive image component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<ResponsiveImage src="https://picsum.photos/600/400" alt="responsive image"/>`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
      {/* ***********************************************************/}
      <h3>Round Image Component</h3>
      <p>This image component is used to display image in round shape.</p>
      <div className="main-container-box-avatar">
        <RoundImage
          src="https://picsum.photos/200/300?grayscale"
          alt="round image"
        />
      </div>
      <p>How to use round image component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<RoundImage src="https://picsum.photos/200/300?grayscale" alt="round image"/>`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
    </div>
  );
}
