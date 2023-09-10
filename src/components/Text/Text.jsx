import "./text.css";

export default function TextComponent({ text, size }) {
  return <div className={`text-${size}`}>{text}</div>;
}
