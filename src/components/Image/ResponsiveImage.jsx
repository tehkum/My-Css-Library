import "./image.css";

export default function ResponsiveImage({ src, alt }) {
  return <img src={src} alt={alt} className="responsive" />;
}
