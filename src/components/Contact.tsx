import linkedinIcon from '../assets/png/linkedin.png';
import mailIcon from '../assets/png/mail.png';

const contactInfo = [
    {
        icon: linkedinIcon,
        label: "LinkedIn",
        link: "https://linkedin.com/in/ajshrma",
        text: "in/ajshrma"
    },
    {
        icon: mailIcon,
        label: "Email",
        link: "mailto:ajshrmaofficial@gmail.com",
        text: "ajshrmaofficial@gmail.com"
    }
]

function Contact(){
    return(
        <div id="contact" className="min-h-svh flex flex-col items-center justify-center gap-8 pt-20">
            <h2 className="lg:text-6xl text-4xl font-bold">CONTACT ME</h2>
            <div className="w-full flex flex-col lg:flex-row justify-center gap-4 px-4"> 
                {contactInfo.map(contact=>(
                    <div className="w-full lg:w-2/6 h-40 border border-black rounded-3xl flex flex-col justify-center items-center">
                    <img src={contact.icon} alt="" className='w-8' />
                    <p className='font-black text-xl'>{contact.label}</p>
                    <a href={contact.link} target="_blank"><p className='text-gray-600 hover:text-blue-500'>{contact.text}</p></a>
                </div>
                ))}
            </div>
        <p className='text-gray-600'>Copyright © 2025 Ajay Sharma. All Rights Reserved.</p>
        </div>
    )
}

export default Contact;
