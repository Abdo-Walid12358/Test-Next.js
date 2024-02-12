"use client";
import "./header.css";
import Link from "next/link";
import { useRef } from "react";

const links = [
    { text: "Home", href: "/#Home" },
    { text: "About", href: "/#About" },
    { text: "Contact", href: "/contact" },
    { text: "Posts", href: "/posts" },
];

export default function Header() {
    const nav = useRef(undefined);
    const burger = useRef(undefined);

    const handelToggleNav = (e) => {
        nav.current.classList.toggle("active");
        burger.current.classList.toggle("active");
    }
    const handelRemoveNav = (e) => {
        nav.current.classList.remove("active");
        burger.current.classList.remove("active");
    }

    return (
        <header>
            <h1 className="logo">Header</h1>
            <nav ref={nav}>
                {links.map((link, index) => {
                    return (
                        <Link key={index} href={link.href} onClick={handelRemoveNav}>
                            {link.text}
                        </Link>
                    );
                })}
            </nav>
            <div className="burger" onClick={handelToggleNav} ref={burger}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
}
