import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {subtitle}
          <br />
          <br />
          <a href={link} target="_blank">
            Link To Project
          </a>
        </p>
      </div>
      <img src={require(`../assets/${projectTitle}.jpeg`)} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-24">
      {/* HEADINGS */}
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Various Projects from small scale to big scale including technologies
          like HTML, CSS, JavaScript, TailWindCSS, ReactJS, Framer-Motion, C,
          C++, GitHub etc.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project
            title="Project 1"
            subtitle="College's Technical Club Website Created Using HTML, CSS, JavaScript etc"
            link="https://amanhex.github.io/CestaWebsite/"
          />
          <Project
            title="Project 2"
            subtitle="Portfolio Created Using HTML, CSS, ReactJS, TailWind CSS, Framer-Motion"
            link="https://amanhex.github.io/react-portfolio/"
          />
          <Project
            title="Project 3"
            subtitle="Car Parking Management System developed using C++"
            link="https://github.com/amanhex/Car-Parking-Management-System/"
          />

          {/* ROW 2 */}
          <Project
            title="Project 4"
            subtitle="GitQuest Created Using ReactJS"
            link="https://gitquest.onrender.com/"
          />
          <Project
            title="Project 5"
            subtitle="Flask-File-Upload App Developed Using Flask"
            link="https://file-upload-app-59ou.onrender.com/"
          />
          <Project
            title="Project 6"
            subtitle="Chat-Assist, A ChatBot Developed Using Flask"
            link="https://chat-assist-pant.onrender.com/"
          />

          {/* ROW 3 */}
          <Project
            title="Project 7"
            subtitle="Linux Setup (Arch Linux + Hyperland)"
            link="https://youtu.be/XOV2H-89Rd0?si=osyR8qW0cUo7LtbT/"
          />
          <Project
            title="Project 8"
            subtitle="Calculator App created with ReactJS"
            link="https://amanhex.github.io/Calculator/"
          />
          <Project
            title="Project 9"
            subtitle="To Do App created with ReactJS"
            link="https://amanhex.github.io/ToDo-App/"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
