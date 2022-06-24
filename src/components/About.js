import logo from "../images/logo-gradient.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="text">
        <p className="text-part-1">Hi 👋</p>
        <p className="text-part-2">My name is</p>
        <p className="text-part-3">Ömer Furkan İşleyen</p>
      </div>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default About;
