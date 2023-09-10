import BadgeComponent from "../Badge/Badge";
import "./card.css";
import CloseIcon from "@mui/icons-material/Close";

export default function CardComponent({
  image,
  text,
  heading,
  badge,
  dismiss,
  overlay,
  horizontal,
  vertical,
  shadow
}) {
  return (
    <div
      className={
        vertical ? `card-container card-container-vertical` : "card-container"
      }
      id={shadow ? "main-card-shadow" : "main-card"}
    >
      <span>{badge && <BadgeComponent type={badge} text={badge} />}</span>
      <span>{dismiss && <CloseIcon />}</span>
      {image && (
        <img
          src={image}
          alt={heading}
          className={
            overlay
              ? `image-overlay`
              : horizontal
              ? `image-horizontal`
              : vertical
              ? `image-vertical`
              : `image-main`
          }
        />
      )}
      <div className={overlay ? `card-content-overlay` : `card-content`}>
        {heading && <h2>{heading}</h2>}
        <p>{text}</p>
      </div>
    </div>
  );
}
