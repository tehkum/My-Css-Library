import "./button.css";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

export default function IconButton({ type }) {
  const typeSelector = () => {
    if (type === "Add") return <AddIcon />;
    if (type === "Delete") return <DeleteIcon />;
    if (type === "Edit") return <EditIcon />;
    if (type === "Search") return <SearchIcon />;
  };

  return (
    <button className={`icon-btn icon-btn-${type}`}>
      {typeSelector()}
      <span>{type}</span>
    </button>
  );
}
