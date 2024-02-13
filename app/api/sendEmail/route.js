import { EmailTemplate } from "@/components/emailTemplate/emailTemplate";
import { Resend } from "resend";

const resend = new Resend("re_fCyv4cMq_2x1CV4pRUYCsoUmnq6jvCZCC");

export async function POST(req) {
    try {
        const { username, email, message } = await req.json();

        const data = await resend.emails.send({
            from: `${username} <onboarding@resend.dev>`,
            to: "totowalid2000@gmail.com",
            subject: "Contact From The Website",
            react: EmailTemplate({
                username: username,
                email: email,
                message: message,
            })
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
