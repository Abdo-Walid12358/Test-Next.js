import "./page.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Posts from "@/components/posts/posts";

export const metadata = {
    title: "Posts",
};

export default function Main() {
    return (
        <>
            <Header />
            <Posts />
            <Footer />
        </>
    );
}
