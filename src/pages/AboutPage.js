import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const About = () => {
  return (
    <Card>
      <p>About</p>
      <Link to="/">Back to home</Link>
    </Card>
  );
};

export default About;
