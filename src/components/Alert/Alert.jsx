import "./alert.css";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoIcon from "@mui/icons-material/Info";

export default function AlertComponent({ status, message }) {
  const iconSelector = () => {
    return status === "danger" ? (
      <WarningIcon />
    ) : status === "success" ? (
      <CheckCircleOutlineIcon />
    ) : status === "warning" ? (
      <WarningAmberIcon />
    ) : status === "information" ? (
      <InfoIcon />
    ) : (
      <></>
    );
  };

  return (
    <div className={`alert alert-${status}`}>
      {iconSelector()}
      <span>{message}</span>
    </div>
  );
}
