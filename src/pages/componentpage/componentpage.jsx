import { useNavigate } from "react-router-dom";
import "./component.css";

export default function ComponentPage() {
  const navigate = useNavigate();
  return (
    <div className="component-container">
      <span>
        {[
          "Avatar",
          "Alert",
          "Badge",
          "Button",
          "Card",
          "Heading",
          "Text",
          "Image"
        ].map((item) => (
          <p key={item} onClick={() => navigate(`/${item}`)}>
            {item}
          </p>
        ))}
      </span>
    </div>
  );
}
