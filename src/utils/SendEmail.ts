import { SMTPClient } from 'emailjs';

type Props = {
    text:string;
    from:string;
    to:string;
    cc:string;
    subject:string;
}
 const SendEmail=(props:Props)=>{
 const{cc,from,subject,text,to}=props
    const client = new SMTPClient({
        user:process.env.USER,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        ssl: true,
    });
    
    // send the message and get a callback with an error or details of the message that was sent
    client.send(
        {
            text: text,
            from: from,
            to: to,
            cc: cc,
            subject: subject,
        },
        (err, message) => {
            return message||err;
        }
        );
    }

    export default SendEmail;