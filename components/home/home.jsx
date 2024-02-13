"use client";

import "./home.css";
import programmingImage from "@/public/programming.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    const router = useRouter();

    return (
        <section className="home" id="Home">
            <div className="text">
                <h2>Portfolio</h2>
                <h1>Abdelrahman Walid</h1>
                <p>
                    <TypeAnimation
                        sequence={[
                            "Skills : Web Developer",
                            1000,
                            "Skills : Game Developer",
                            1000,
                            "Skills : Bot Discord Developer",
                            1000,
                            "Skills : Designer 3D",
                            1000,
                            "Skills : Every Thing : )",
                            1000
                        ]}
                        speed={45}
                        repeat={Infinity}
                    />
                </p>
                <button
                    className="button-main-style"
                    onClick={() => router.push("/contact")}
                >
                    Contact
                </button>
            </div>
            <div className="image">
                <Image
                    src={programmingImage.src}
                    width={600}
                    height={600}
                    draggable="false"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
