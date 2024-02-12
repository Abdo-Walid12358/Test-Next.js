import "./about.css";
import Image from "next/image";
import codingImg from "@/public/coding.png";

export default function About() {
    return (
        <section className="about" id="About">
            <h1 className="title-section">About</h1>
            <div className="box">
                <div className="left">
                    <Image
                        src={codingImg.src}
                        width={600}
                        height={600}
                        draggable="false"
                        loading="lazy"
                    />
                </div>
                <div className="right">
                    <h2>About Me</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut, rem <span>quod</span> labore dicta quibusdam id temporibus, iste
                        unde quo odit ipsa voluptatibus nemo <span>similique</span> dolores.
                    </p>
                </div>
            </div>
        </section>
    );
}