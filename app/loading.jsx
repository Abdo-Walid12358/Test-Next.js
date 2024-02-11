"use client";
import "./loading.css";
import { Audio } from "react-loader-spinner";

export default function Loading() {
    return (
        <section className="loading-page">
            <Audio color="rgba(255, 20, 145, 1)" width={300} height={400} />
        </section>
    );
}