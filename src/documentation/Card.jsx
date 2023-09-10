import "./documentation.css";
import MyCodeBlock from "./code/codeBlock";
import CardComponent from "../components/Card/Card";

export default function Card() {
  return (
    <div className="main-container-box">
      <h2>Card Components</h2>
      <h3>Card with Badge</h3>
      <p>This card component is used to display card with badge.</p>
      <div className="main-container-box-avatar">
        <CardComponent
          heading="Card Title"
          text="this is a card with badge"
          badge={"new"}
        />
      </div>
      <p>How to use responsive Card with badge component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<CardComponent heading="Card Title" text="this is a card with badge" badge={"new"} />`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
      {/* ***********************************************************/}
      <h3>Card with Dismiss</h3>
      <p>This card component is used to display card with dismiss button.</p>
      <div className="main-container-box-avatar">
        <CardComponent
          heading="Card Title"
          text="this is a card with dismiss button"
          dismiss={true}
        />
      </div>
      <p>How to use responsive card with dismiss component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<CardComponent heading="Card Title" text="this is a card with dismiss button" dismiss={true}/>`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
      {/* ***********************************************************/}
      <h3>Card with Overlay Text</h3>
      <p>This card component is used to display card with overlay text.</p>
      <div className="main-container-box-avatar">
        <CardComponent
          heading="Card Title"
          text="this is a card with overlay text"
          overlay="true"
          image="https://picsum.photos/600/400"
        />
      </div>
      <p>How to use card with overlay component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<CardComponent heading="Card Title" text="this is a card with overlay text" overlay="true" image="https://picsum.photos/600/400"/>`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
      {/* ***********************************************************/}
      <h3>Card with Only Text</h3>
      <p>This card component is used to display card with only text.</p>
      <div className="main-container-box-avatar">
        <CardComponent text="this is a text only card" />
      </div>
      <p>How to use card with text component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<CardComponent text="this is a text only card" />`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
      {/* ***********************************************************/}
      <h3>Horizontal Card</h3>
      <p>This card component is used to display card horizontally.</p>
      <div className="main-container-box-avatar">
        <CardComponent
          heading="card title"
          horizontal
          text="Horizontal card description"
          image="https://picsum.photos/600/400"
        />
      </div>
      <p>How to use horizontal card component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<CardComponent heading="card title" horizontal text="Horizontal card description" image="https://picsum.photos/600/400"/>`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
      {/* ***********************************************************/}
      <h3>Vertical Card</h3>
      <p>This card component is used to display card vertically.</p>
      <div className="main-container-box-avatar">
        <CardComponent
          heading="card title"
          vertical
          text="Vertical card description"
          image="https://picsum.photos/600/400"
        />
      </div>
      <p>How to use vertical card component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<CardComponent heading="card title" vertical text="Vertical card description" image="https://picsum.photos/600/400"/>`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
      {/* ***********************************************************/}
      <h3>Card with Shadow</h3>
      <p>This card component is used to display card with shadow.</p>
      <div className="main-container-box-avatar">
        <CardComponent
          heading="card title"
          text="This is card description"
          shadow
        />
      </div>
      <p>How to use card with shadow component?</p>
      <div className="code-box">
        <MyCodeBlock
          code={`<CardComponent heading="card title" text="This is card description" shadow/>`}
          language={"javascript"}
          showLineNumbers={false}
          startingLineNumber={0}
        />
      </div>
    </div>
  );
}
