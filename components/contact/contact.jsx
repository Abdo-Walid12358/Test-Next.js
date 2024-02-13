"use client";
import "./contact.css";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function Contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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
            // const requestOptions = {
            //     method: "POST",
            //     headers: { accept: "application/json" },
            //     body: JSON.stringify({ username, email, message }),
            // };

            // try {
            //     const response = await fetch("/api/sendEmail", requestOptions);

            //     console.log(response);

            //     if(response.ok){
            //         output = "Success.";
            //     }else{
            //         output = "Error.";
            //     }
            // } catch (error) {
            //     output = "An error occurred while sending the email";
            // }

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
                <div className="box-contact">
                    <form>
                        <h2>Contact Me</h2>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username . . ."
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email . . ."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Enter Message . . ."
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button className="main-btn" onClick={handelSendEmail}>
                            Send Email
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
