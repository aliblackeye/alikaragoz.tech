import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { IoCloseCircle, IoInformationCircle, IoWarning } from "react-icons/io5";
import { useEffect, useState } from "react";

interface IToast {
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  onClose?: () => void;
  show: boolean;
}

export default function Toast(props: IToast) {
  const [isClosed, setIsClosed] = useState(false);

  const {
    message,
    type,
    duration = 3000,
    position,
    onClose = () => setIsClosed(true),
    show,
  } = props;

  // DURATION CODE
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`blackeye-toast ${position ?? ""} ${
        isClosed ? "closed" : "show"
      } `}
    >
      <div className={`toast-container ${type} `}>
        <div className="toast-container-icon">
          {type === "success" && <BiCheckCircle />}
          {type === "error" && <BiErrorCircle />}
          {type === "warning" && <IoWarning />}
          {type === "info" && <IoInformationCircle />}
        </div>
        <div className="toast-container-message">{message}</div>
        <div className="toast-container-close">
          <IoCloseCircle />
        </div>
      </div>
    </div>
  );
}
