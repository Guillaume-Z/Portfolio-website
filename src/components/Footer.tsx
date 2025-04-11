import { Link } from 'react-router'

function Footer() {
    return (
        <footer className="bg-white mt-4">
            <section className="flex justify-evenly">
                <p>Guillaume Zimberlin</p>
                <Link to="/about">About</Link>
                <p >Tous droits réservés</p>
            </section>
        </footer>
    );
}

export default Footer;