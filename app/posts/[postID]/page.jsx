import Header from "@/components/header/header";
import PostDetails from "@/components/postDetails/postDetails";
import Footer from "@/components/footer/footer";

export const metadata = {
    title: "Post",
};

export default function Main({ params }) {
    const postID = params.postID;
    
    return (
        <>
            <Header />
            <PostDetails productID={postID} />
            <Footer />
        </>
    );
}
