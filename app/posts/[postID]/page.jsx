import Header from "@/components/header/header";
import PostDetails from "@/components/postDetails/postDetails";
import Footer from "@/components/footer/footer";

async function getTitleProduct(postID) {
    try {
        const res = await fetch(`https://dummyjson.com/products/${postID}`);
        const postsData = await res.json();

        if(postsData.title !== undefined){
            return postsData.title;
        }else{
            return "Page Not Found";
        }
    } catch (err) {
        return "Page Not Found";
    }
}

export const generateMetadata = async ({ params }) => {
    const postID = params.postID;
    const titlePage = await getTitleProduct(postID);

    return {
        title: `${titlePage}`,
    };
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
