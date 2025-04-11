import { Link } from 'react-router'

function Header() {
    return (
        <header>
            <nav className="text-black flex justify-evenly py-10">
                <Link className="bg-white rounded-md w-1/4 text-center text-[#1c1b33] font-bold" to="/">Accueil</Link>
                <Link className="bg-white  rounded-md w-1/4 text-center text-[#1c1b33] font-bold" to="/about">A propos</Link>
                <Link className="bg-white  rounded-md w-1/4 text-center text-[#1c1b33] font-bold" to="/myprojects">Projets</Link>
            </nav>
        </header >
    );
}

export default Header;