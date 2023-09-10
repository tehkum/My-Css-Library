import "./Avatar.css";

export default function AvatarComponent({ src, size, name }) {
  return (
    <div className="avatar">
      <img src={src} alt={name} className={`image-size-${size}`} />
      <p className={`text-size-${size}`}>{name}</p>
    </div>
  );
}
