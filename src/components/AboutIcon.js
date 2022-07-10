import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AboutIcon = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <FontAwesomeIcon icon={faQuestion} />
      </Link>
    </div>
  );
};

export default AboutIcon;
