import Header from "@/components/header/header";
import Home from "@/components/home/home";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Main Page"
}

export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
    </>
  );
}