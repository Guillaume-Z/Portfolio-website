import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);

    const [content, setContent] = useState("");
    const [expedient, setExpedient] = useState("");

    const sendEmail = async () => {
        setSending(true);
        setSuccess(null);

        const serviceID = 'service_d7dgrqf';
        const templateID = 'template_i5g5s57';
        const publicKey = '0ASc9mFad9SaKbxDm';
        const templateParams = {
            from_name: 'Jean Dupont',
            to_name: 'Marie',
            message: content,
            reply_to: expedient,
        };

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: serviceID,
                    template_id: templateID,
                    user_id: publicKey,
                    template_params: templateParams,
                }),
            });

            if (response.ok) {
                setSuccess(true);
            } else {
                setSuccess(false);
                console.error('Erreur:', await response.text());
            }
        } catch (error) {
            console.error('Erreur lors de l’envoi:', error);
            setSuccess(false);
        } finally {
            setSending(false);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }
    const handleExpedientInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpedient(event.target.value);
    }

    return (
        <>
            <input className='text-center' type="email" value={expedient} onChange={handleExpedientInputChange} placeholder='Votre email' />
            <input className='text-center' type="text" value={content} onChange={handleInputChange} placeholder='Tapez ici votre message' />

            <button onClick={sendEmail} disabled={sending}>
                {sending ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            {success ? <p>Message bien envoyé !</p> : null}
        </>
    );
};

export default ContactForm;