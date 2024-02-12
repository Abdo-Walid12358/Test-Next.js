"use client";
import "./toggleMode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function ToggleMode() {
    useEffect(() => {
        const darkMode = getCookie("darkMode");
        if (darkMode === "true") {
            document.body.classList.remove("light-mode");
        } else if (darkMode === "false") {
            document.body.classList.add("light-mode");
        } else {
            document.body.classList.remove("light-mode");
        }
    }, []);

    const handelToggleMode = () => {
        const darkMode = getCookie("darkMode");

        if (darkMode === "true") {
            setCookie("darkMode", "false", (1000 * 60 * 60 * 24 * 365) * 10);
            document.body.classList.add("light-mode");
        } else {
            setCookie("darkMode", "true", (1000 * 60 * 60 * 24 * 365) * 10);
            document.body.classList.remove("light-mode");
        }
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split("; ");
        const cookie = cookies.find((cookie) => cookie.startsWith(name + "="));
        return cookie ? cookie.split("=")[1] : "";
    };

    const setCookie = (name, value, maxAge) => {
        document.cookie = `${name}=${value}; max-age=${maxAge}`;
    };

    return (
        <div className="toggle-mode" onClick={handelToggleMode}>
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
        </div>
    );
}