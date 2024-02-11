import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer>
            <div className="box-1">
                <span>Made By Abdelrahman Walid</span>
                <div className="scoials">
                    <FontAwesomeIcon icon={faFacebook} style={{ "--color": "#4267B2" }} />
                    <FontAwesomeIcon icon={faDiscord} style={{ "--color": "#7289da" }} />
                    <FontAwesomeIcon icon={faTwitter} style={{ "--color": "#1DA1F2" }} />
                    <FontAwesomeIcon icon={faInstagram} style={{ "--color": "pink" }} />
                </div>
            </div>
            <div className="box-2">
                <div>
                    <h2 className="title-row">Company Name</h2>
                    <span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora incidunt at asperiores eum? Est eo
                    </span>
                </div>
                <div>
                    <h2 className="title-row">Products</h2>
                    <span>MDBootstrap</span>
                    <span>MDBootstrap</span>
                    <span>MDBootstrap</span>
                    <span>MDBootstrap</span>
                </div>
                <div>
                    <h2 className="title-row">User Links</h2>
                    <span>MDBootstrap</span>
                    <span>MDBootstrap</span>
                    <span>MDBootstrap</span>
                    <span>MDBootstrap</span>
                </div>
                <div>
                    <h2 className="title-row">Contact</h2>
                    <span><FontAwesomeIcon icon={faHouse} /> United State, New York</span>
                    <span><FontAwesomeIcon icon={faEnvelope} /> totowalid2000@gmial.com</span>
                    <span><FontAwesomeIcon icon={faPhone} /> +201017794896</span>
                </div>
            </div>
            <div className="box-3">
                <span>@Copyrite2024 <strong>Abdelrahman_Walid</strong></span>
            </div>
        </footer>
    );
}
