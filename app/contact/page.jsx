import Header from "@/components/header/header";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export const metadata = {
    title: "Contact"
}

export default function Main() {
    return (
        <>
            <Header />
            <Contact />
            <Footer />
        </>
    );
}
