import "./button.css";

export default function NormalButton({ text, type }) {
  return (
    <button className={`normal-btn normal-btn-${type}`}>{text} Button</button>
  );
}
