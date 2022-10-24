import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "../../img/logo.png";
import Banner from "../Home/Banner/Banner";
import ModalRegister from "./Login/ModalRegister";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <section className="d-none d-lg-flex align-items-center justify-content-around my-2">
        <div>
          <img src={logo} alt="3" />
        </div>
        <div className="rounded-pill bg-light p-2">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2083 10.8333H11.4842L11.2275 10.5858C12.1258 9.54083 12.6667 8.18417 12.6667 6.70833C12.6667 3.4175 9.99917 0.75 6.70833 0.75C3.4175 0.75 0.75 3.4175 0.75 6.70833C0.75 9.99917 3.4175 12.6667 6.70833 12.6667C8.18417 12.6667 9.54083 12.1258 10.5858 11.2275L10.8333 11.4842V12.2083L15.4167 16.7825L16.7825 15.4167L12.2083 10.8333ZM6.70833 10.8333C4.42583 10.8333 2.58333 8.99083 2.58333 6.70833C2.58333 4.42583 4.42583 2.58333 6.70833 2.58333C8.99083 2.58333 10.8333 4.42583 10.8333 6.70833C10.8333 8.99083 8.99083 10.8333 6.70833 10.8333Z"
              fill="#7A7A7A"
            />
          </svg>

          <input
            className="border-0 ps-2 bg-light"
            style={{ width: "300px" }}
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="d-flex gap-1">
          <button
            onClick={() => setOpenModal(true)}
            className="border-0 bg-white modalBtn"
          >
            Create account. <a href="/">It's free!</a>{" "}
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <ModalRegister open={openModal} onClose={() => setOpenModal(false)} />
        </div>
      </section>
    </div>
  );
}

export default Header;
