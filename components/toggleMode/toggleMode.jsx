"use client";
import "./toggleMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function ToggleMode() {
    let darkMode = localStorage.getItem("darkMode");

    document.body.onload = () => {
        if(darkMode == "false"){
            document.body.classList.add("light-mode");
        }
    }

    const handelToggleMode = () => {
        darkMode = localStorage.getItem("darkMode");
        
        if (darkMode == "true") {
            localStorage.setItem("darkMode", false);
            document.body.classList.add("light-mode");
        } else {
            localStorage.setItem("darkMode", true);
            document.body.classList.remove("light-mode");
        }
    };

    return (
        <div className="toggle-mode" onClick={handelToggleMode}>
            <FontAwesomeIcon icon={faSun} />
        </div>
    );
}
