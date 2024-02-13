export const EmailTemplate = ({ username, email, message }) => (
    <div
        className="email-box"
        style={{
            background: "deeppink",
            padding: "10px 15px",
            border: "2px solid black",
            borderRadius: "5px",
            color: "white"
        }}
    >
        <h3 style={{marginBottom: "5px"}}>Username : {username}</h3>
        <h4 style={{marginBottom: "5px"}}>Email : {email}</h4>
        <p>Message : {message}</p>
    </div>
);
