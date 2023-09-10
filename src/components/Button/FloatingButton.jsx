import "./button.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

export default function FloatingButton({ type }) {
  const typeSelector = () => {
    if (type === "add") return <AddIcon />;
    if (type === "edit") return <EditIcon />;
  };

  return (
    <button className={`floating-btn floating-btn-${type}`}>
      <span>{typeSelector()}</span>
    </button>
  );
}
