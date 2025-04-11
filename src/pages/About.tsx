import ContactForm from "../components/ContactForm";
import Facts from "../components/Facts";

function About() {
    return (
        <>
            <section className="flex flex-col md:flex-row md:min-h-[50rem]">

                <section className="md:flex md:flex-col md:w-2/3">
                    <h2 className="text-center mb-4">Qui suis-je ?</h2>
                    <span className="flex flex-col mb-5 text-center w-5/6 mx-auto">
                        <Facts />
                    </span>
                </section>

                <section className="md:flex md:flex-col md:w-1/3">
                    <h2 className="text-center mb-4">Me contacter</h2>
                    <span className="bg-white flex flex-col mb-5 text-center w-5/6 mx-auto">
                        <ContactForm />
                    </span>
                </section>

                <section className="md:flex md:flex-col md:w-1/3">
                    <h2 className="text-center mb-4">Mes réseaux</h2>
                </section>

                <section className="md:flex md:flex-col md:w-1/3">
                    <h2 className="text-center mb-4">Mes documents</h2>
                </section>
            </section>
        </>
    );
}

export default About;
