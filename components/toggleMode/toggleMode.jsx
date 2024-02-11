"use client";
import "./toggleMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function ToggleMode() {
    useEffect(() => {
        const darkMode = Cookies.get("darkMode");
        if (darkMode === "true") {
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
        }
    }, []);

    const handelToggleMode = () => {
        const darkMode = Cookies.get("darkMode");

        if (darkMode === "true") {
            Cookies.set("darkMode", "false");
            document.body.classList.add("light-mode");
        } else {
            Cookies.set("darkMode", "true");
            document.body.classList.remove("light-mode");
        }
    };

    return (
        <div className="toggle-mode" onClick={handelToggleMode}>
            <FontAwesomeIcon icon={faSun} />
        </div>
    );
}