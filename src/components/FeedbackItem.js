import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { handleDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
