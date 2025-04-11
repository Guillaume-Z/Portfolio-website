interface ProjectProps {
    projectDescription: string;
    projectVideo: string;
    projectStack: string;
    projectGit: string
}

function Project({ projectDescription, projectVideo, projectStack, projectGit }: ProjectProps) {

    const handleOnClick = () => {
        window.open(projectGit, '_blank');
    }

    return (
        <section className="flex flex-col items-center md:flex-row md:justify-evenly md:min-h-[50rem]">
            <img src={projectVideo} className="mt-8 mb-4 md:w-1/3" />

            <section className="items-center text-center md:w-1/3">
                <h2 className="my-4">{projectStack}</h2>
                <p className="text-white w-5/6 m-auto whitespace-pre-line">{projectDescription}</p>
                <button className="bg-[#fcda7e] rounded-full w-2/3 hover:underline my-8" onClick={handleOnClick}>❯ Lien GitHub du projet ❮</button>
            </section>

        </section>
    );
}

export default Project;

