import { motion } from "framer-motion";
import propTypes from "prop-types";

const Tech = ({ SVG, name, lowercaseName, width }) => {
  const alt = `${name} Icon`;
  const className = lowercaseName
    ? `icon ${lowercaseName}`
    : `icon ${name.toLowerCase()}`;

  return (
    <motion.div className={className}>
      <motion.div
        className="tooltip"
        data-tooltip={name}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1], transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <SVG width={width ? width : "72px"} alt={alt} />
      </motion.div>
    </motion.div>
  );
};

Tech.propTypes = {
  SVG: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  width: propTypes.string,
};

export default Tech;
