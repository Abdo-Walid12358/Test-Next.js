import "./not-found.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <>
            <Header />
            <section className="page-not-found">
                <h1>
                    Page Not Found 404 <FontAwesomeIcon icon={faWarning} />
                </h1>
            </section>
            <Footer />
        </>
    );
}
