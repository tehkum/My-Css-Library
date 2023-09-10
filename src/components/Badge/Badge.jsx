import "./badge.css";

export default function BadgeComponent({ text, type }) {
  return <div className={`badge badge-${type}`}>{text}</div>;
}
