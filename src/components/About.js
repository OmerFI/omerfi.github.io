import logo from "../images/logo-gradient.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      whileInView={{ y: [-70, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
    >
      <div className="text">
        <p className="text-part-1">Hi 👋</p>
        <p className="text-part-2">My name is</p>
        <motion.p className="text-part-3">Ömer Furkan İşleyen</motion.p>
      </div>
      <img src={logo} alt="logo" />
    </motion.div>
  );
};

export default About;
