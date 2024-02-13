//import "./.emailTemplate.css"

export const EmailTemplate = ({ username, email, message }) => (
    <div>
        <h1>Username : {username}</h1>
        <h2>Email : {email}</h2>
        <p>Message : {message}</p>
    </div>
);