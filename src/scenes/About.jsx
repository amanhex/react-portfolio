import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-36 pb-24">
      {/* ABOUT */}
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
            <span className="text-red">ABOUT {""}</span>ME
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Hey there! I'm a computer science graduate.
          <br />
          I'm super into Data Structures & Algorithms and Web Development, and
          I've done a bunch of cool projects in those areas.
          <br />I love the challenge of solving tricky problems with algorithms
          and making sweet websites that are both robust and dynamic.
          <br /> I'm always looking to improve my skills and learn new
          technologies and approaches to problem-solving.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
