import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, email, message } = req.body;

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "totowalid2000@gmail.com",
                pass: "ojiyfwhnfvtpezrw",
            },
        });

        let mailOptions = {
            from: email,
            to: "totowalid2000@gmail.com",
            subject: "Contact From The Website",
            text: `Username: ${username}\nEmail: ${email}\nMessage: ${message}`,
        };

        try {
            await transporter.sendMail({ ...mailOptions, html: "<h1>Test</h1>" });
            res.status(200).json({ success: true });
        } catch (error) {
            console.error("Error occurred:", error);
            res.status(500).json({
                success: false,
                error: "Failed to send email",
            });
        }
    } else {
        res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
}
