"use client";
import "./contact.css";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import { Toaster, toast } from "sonner";

export default function Contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handelSendEmail = async (e) => {
        e.preventDefault();

        let output = "";

        if (!username.trim() && !email.trim() && !message.trim()) {
            output = "All Inputs Are Empty!";
        } else if (!username.trim()) {
            output = "Username is Empty!";
        } else if (!email.trim()) {
            output = "Email is Empty!";
        } else if (!message.trim()) {
            output = "Message is Empty!";
        } else {
            try {
                setIsLoading(true);

                const bodyData = {
                    username: username,
                    email: email,
                    message: message,
                };

                const response = await fetch("/api/sendEmail", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(bodyData),
                });

                if (response.status === 200) {
                    setIsLoading(false);
                    setUsername("");
                    setEmail("");
                    setMessage("");

                    output = "Success.";
                } else {
                    setIsLoading(false);
                    output = "Error.";
                }
            } catch (error) {
                setIsLoading(false);
                output = "An error occurred while sending the email";
            }
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
                <div className="box-contact">
                    <form>
                        <h2>Contact Me</h2>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username . . ."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email . . ."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Enter Message . . ."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button className="main-btn" onClick={handelSendEmail} disabled={isLoading}>
                            {isLoading ? <Audio width={35} height={35} color="deeppink" /> : "Send Email"}
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
