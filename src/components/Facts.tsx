import { useEffect, useState } from "react";

function Facts() {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1')
            .then(response => response.json())
            .then(data => {
                setContent(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du texte :', error);
                setContent('<p>Erreur lors du chargement du contenu.</p>');
                setLoading(false);
            });
    }, []);

    return (
        <p className="text-white">
            {content};
            {loading ? <p> </p> : <p> </p>}
        </p>
    );
}

export default Facts