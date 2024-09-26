import { inputSchema } from '@/lib/schemaFormEmail/schema';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    if (req.method === 'GET') {
        return NextResponse.json(
            { error: "Method Not Allowed." },
            { status: 405 }
        );
    }
    try {
        const body = await req.json();

        const { nombre,
            ciudad,
            profesion,
            celular,
            correo,
            pqrsContenido } = inputSchema.parse(body);

        console.log("SXX", nombre,
            ciudad,
            profesion,
            celular,
            correo,
            pqrsContenido)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            }
        });

        // https://i.pinimg.com/564x/4b/e8/f4/4be8f4a8adc82b198c28335ddb1674e8.jpg
        const info = await transporter.sendMail({
            from: `"please" <${process.env.EMAIL_USER}>`,
            to: 'tthwcreator@gmail.com',
            subject: 'yes',
            text: ` ♡ ꒰ˆ◞⸝⸝◟ˆ ꒱੭ﾞ.  ໒ִ 𓈒ིྀ. ̫ . ིྀაഒ  ໒ ྀི>֯ . <ྀི֯ ̥ ︣ა ${nombre}, ${ciudad}, ${profesion}, ${celular}, ${correo}, ${pqrsContenido}`

        })
        console.log("Message sent: %s", info.messageId);
        return NextResponse.json(
            { response: "yess" },
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "An unexpected error occurred." },
            { status: 500 }
        );
    }

}