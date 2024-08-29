import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {

  try {
    const body = await req.text();    

    const { SMTP_EMAIL, SMTP_PASS, TO_EMAIL } = process.env;

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASS,
      },
    });

    try {
      const testResult = await transport.verify();
      console.log('Email test verification result:', testResult);

      const sendResult = await transport.sendMail({
        from: SMTP_EMAIL,
        to: TO_EMAIL,
        subject: '[Site] Pedido de Orçamento',
        html: body
      });
      
      return NextResponse.json({ message: 'Email enviado com sucesso!', result: sendResult }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ error: 'Erro ao enviar email.', details: error }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Erro ao processar a solicitação.', details: error }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Método GET não é suportado nesta rota.' }, { status: 405 });
}
