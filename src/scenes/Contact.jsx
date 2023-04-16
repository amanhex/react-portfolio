import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="mt-2">
            <img src={require('../assets/contact-image.jpeg')} alt="contact-image" className="flex items-center justify-center w-full scale-50 rounded-full mb-8" />
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">CONTACT {""}</span>ME
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-2/3" />
                    </div>
                </div>
                <p className="mt-10 mb-10 pb-24 font-semibold hover:text-amber-500 transition duration-500">
                    Hey There! 
                    <br />I'm not really big on posting or checking my Socials.
                    <br />But, Let's Connect on my Socials anyways!
                </p>
            </motion.div>
        </section>
    );
};

export default Contact;