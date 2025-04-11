function Home() {
    return (
        <>
            <section className="flex flex-col md:min-h-[50rem]">
                <section className="flex flex-col items-center">
                    <h1 className="text-white text-5xl">Guillaume Zimberlin</h1>
                    <img src="/images/pp2.webp" className="rounded-full border-4 border-white w-40 my-4"></img>
                </section>

                {/* Présentation */}
                <section className="flex flex-col mb-8">

                    <h2 className="text-center text-white">Développeur Web</h2>

                    <section className="flex flex-col gap-10 mt-8">

                        <article className="bg-white w-2/3 m-auto flex flex-col rounded-xl pb-5">
                            <h3 className="text-center my-2">Front</h3>
                            <section className="flex justify-evenly">
                                <img src="\images\CSS3_logo_and_wordmark.svg.png"></img>
                                <img src="\images\HTML5_logo_and_wordmark.svg.png"></img>
                                <img src="\images\Tailwind_CSS_Logo.svg.png"></img>
                                <img src="\images\JavaScript-logo.png"></img>
                                <img src="\images\React-icon.svg.png"></img>
                            </section>
                        </article>

                        <article className="bg-white w-2/3 m-auto flex flex-col rounded-xl pb-5">
                            <h3 className="text-center my-2">Back</h3>
                            <section className="flex justify-evenly">
                                <img src="\images\express-js.png"></img>
                                <img src="\images\node-js-icon-1817x2048-g8tzf91e.png"></img>
                            </section>
                        </article>

                        <article className="bg-white w-2/3 m-auto flex flex-col rounded-xl pb-5">
                            <h3 className="text-center my-2">Maquettage</h3>
                            <section className="flex justify-evenly">
                                <img src="\images\excalidraw-logo-png_seeklogo-548100.png"></img>
                                <img src="\images\Figma-logo.svg"></img>
                                <img src="\images\The_GIMP_icon_-_gnome.svg.png"></img>
                            </section>
                        </article>

                        <article className="bg-white w-2/3 m-auto flex flex-col rounded-xl pb-5">
                            <h3 className="text-center my-2">Autres</h3>
                            <section className="flex justify-evenly">
                                <img src="\images\git-bash.svg"></img>
                                <img src="\images\25231.png"></img>
                                <img src="\images\Logo_C_sharp.svg.png"></img>
                                <img src="\images\Visual_Studio_Code_1.35_icon.svg.png"></img>
                            </section>
                        </article>
                    </section>
                </section>

            </section>
        </>
    );
}

export default Home;