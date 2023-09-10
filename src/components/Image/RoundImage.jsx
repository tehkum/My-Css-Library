import "./image.css";

export default function RoundImage({ src, alt }) {
  return <img src={src} alt={alt} className="round" />;
}
