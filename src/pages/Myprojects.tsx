import { useState } from "react";
import Project from "../components/Project";

function Myprojects() {
    const [project, setProject] = useState(0);

    {/* A compléter avec les différents projets et variables */ }
    const projectList = [
        {
            projectName: "Manga-Read",
            projectDescription: "Un site vitrine réalisé en temps limité, utilisant uniquement les outils de base du développement de site web. \n\n Imitant les sites de lecture de mangas en ligne, le layout et les fonctionnalités de navigation du site s'adaptent en temps réel au format d'écran.",
            projectVideo: "/videos/Manga-Scan.gif",
            projectStack: "HTML - CSS",
            projectGit: "https://github.com/Guillaume-Z/Manga-Read"
        },
        {
            projectName: "Le jeu de la vie",
            projectDescription: "L'exercice classique de l'automate cellulaire, adapté lors d'un travail de groupe pour mettre en oeuvre les fonctionnalités offertes par React sur une page unique. \n\n L'automate fonctionne ainsi uniquement grâce aux systèmes de props, state et composants permis par cette bibliothèque.",
            projectVideo: "/videos/JeuVie.gif",
            projectStack: "React (TSX) - Tailwind",
            projectGit: "https://github.com/Guillaume-Z/Jeu-de-la-vie"
        },
        {
            projectName: "Fourch'Est",
            projectDescription: "Un site multi-page de livraison de nourriture crée dans le cadre d'un projet de groupe. \n\n Il fait appel à de nombreux scripts pour trier et filtrer les restaurants de manière dynamique, imiter un système simple de panier, gérer formulaires et alertes ainsi que mémoriser des données simples en local.",
            projectVideo: "/videos/Fourchest.gif",
            projectStack: "HTML - CSS (Tailwind) - JS",
            projectGit: "https://github.com/Guillaume-Z/Fourch-Est"
        },
        {
            projectName: "Stock Exchange",
            projectDescription: "Un projet solo conçu pour m'entrainer au maniement des props, states et composants React, ainsi qu'au pseudo-aléatoire et aux boucles asynchrones. \n\n Il vise à imiter à des fins ludiques, les applications de trading de cryptomonnaies.",
            projectVideo: "/videos/Stock.gif",
            projectStack: "React (TSX) - Tailwind",
            projectGit: "https://github.com/Guillaume-Z/StockExchange"
        },
        {
            projectName: "Recipes Book",
            projectDescription: "Une page récupérant et exploitant des données provenant d'une API publique .\n\n Elle permet de créer un menu pour la semaine, ainsi que la liste de course comprenant les ingrédients nécessaires.",
            projectVideo: "/images/Recipe.png",
            projectStack: "React (TSX) - Tailwind",
            projectGit: "https://github.com/Guillaume-Z/Recipes-Book"
        },
        {
            projectName: "Portfolio",
            projectDescription: "Tout simplement ce site hébergé sur lequel vous naviguez actuellement. \n\n Il combine une architecture Router permise par React, algorithmes et balisage TSX, mise en forme Tailwind et requêtes API pour illustrer concrètement les compétences que j'ai acquises.",
            projectVideo: "/videos/Porfolio.gif",
            projectStack: "React (TSX) - Tailwind",
            projectGit: "https://github.com/Guillaume-Z/Portfolio-website"
        }
    ]

    const handleNext = () => {
        let next = project + 1;

        if (next >= projectList.length) {
            next = 0;
        }

        setProject(next)
    }

    const handlePrevious = () => {
        let previous = project - 1;

        if (previous < 0) {
            previous = projectList.length - 1;
        }

        setProject(previous)
    }

    return (
        <>
            <section className="flex justify-around">
                <button type="button" onClick={handlePrevious} className="bg-white rounded-full w-6">❮</button>
                <h2 className="w-1/2 text-center font-bold">{projectList[project].projectName}</h2>
                <button type="button" onClick={handleNext} className="bg-white rounded-full w-6">❯</button>
            </section>

            {/* A compléter avec props */}
            <Project
                projectDescription={projectList[project].projectDescription}
                projectVideo={projectList[project].projectVideo}
                projectStack={projectList[project].projectStack}
                projectGit={projectList[project].projectGit} />
        </>
    );
}

export default Myprojects;