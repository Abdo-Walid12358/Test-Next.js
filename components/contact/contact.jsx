"use client";
import { useState } from "react";
import "./contact.css";
import { Toaster, toast } from "sonner";

export default function Contact() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handelSendEmail = async (e) => {
        e.preventDefault();

        let output = "";

        if (
            !formData.username.trim() &&
            !formData.email.trim() &&
            !formData.message.trim()
        ) {
            output = "All Inputs Are Empty!";
        } else if (!formData.username.trim()) {
            output = "Username is Empty!";
        } else if (!formData.email.trim()) {
            output = "Email is Empty!";
        } else if (!formData.message.trim()) {
            output = "Message is Empty!";
        } else {
            output = "Success.";
        }

        if (!output.includes("Success")) {
            toast.error(output);
        } else {
            toast.success(output);
        }
    };

    return (
        <>
            <Toaster richColors closeButton invert />
            <section className="contact-page">
                <h1 className="title-section">Contact</h1>
                <form>
                    <h2>Contact Me</h2>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username . . ."
                        onChange={handleChange}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email . . ."
                        onChange={handleChange}
                    />
                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Enter Message . . ."
                        onChange={handleChange}
                    ></textarea>
                    <button className="main-btn" onClick={handelSendEmail}>
                        Send Email
                    </button>
                </form>
            </section>
        </>
    );
}
