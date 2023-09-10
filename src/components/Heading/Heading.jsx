import "./heading.css";

export default function HeadingComponent({ text, size }) {
  return (
    <div className={`heading-${size}`}>
      <strong>{text}</strong>
    </div>
  );
}
