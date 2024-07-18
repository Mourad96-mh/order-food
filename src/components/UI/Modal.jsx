import { HiMiniXMark } from "react-icons/hi2";
import useClickOutside from "../../hooks/useClickOutside";
import { useContext } from "react";
import UserProgressContext from "../../context/UserProgressContext";

const Modal = ({ children, setIsOpen }) => {
  const { hideProgress } = useContext(UserProgressContext);
  const ref = useClickOutside(hideProgress);

  const closeModalHandler = () => {
    // setIsOpen(false);
    hideProgress();
  };

  return (
    <div className="modal-overllay">
      <div className="modal-backdrop" ref={ref}>
        <div className="modal-svg">
          <HiMiniXMark onClick={closeModalHandler} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
