import "./post.css";

export default function Post({ img, title, description }) {
    return (
        <div className="post">
            <img src={img} alt="" />
            <div className="window-card">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
