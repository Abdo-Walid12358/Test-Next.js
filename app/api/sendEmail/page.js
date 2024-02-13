import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, email, message } = req.body;

        try {
            var transporter = nodemailer.createTransport({
                service: "Gmail",
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "totowalid2000@gmail.com",
                    pass: "fuwq htgh buet updk",
                },
            });

            const mailOptions = {
                from: "abdowalidd2001@gmail.com",
                to: "totowalid2000@gmail.com",
                subject: "Contact From The Website",
                text: "Plaintext version of the message",
                html: "<p>HTML version of the message</p>",
            };

            await transporter.sendMail(mailOptions);

            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            res.status(500).json({ message: "Error sending email" });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
