import { useState, useEffect, createContext } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //add feedback to list
  const addFeedback = async (newFeedback) => {
    const responce = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await responce.json();
    setFeedback([data, ...feedback]);
  };

  // delete feedback
  const handleDelete = async (id) => {
    if (window.confirm("are you sure")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //update feedback
  const updateFeedBack = async (id, updatedItem) => {
    const responce = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await responce.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedback from api

  const fetchFeedback = async () => {
    setIsLoading(true);
    const responce = await fetch(`/feedback?_sort=id&_order=desc`);

    const data = await responce.json();
    setFeedback(data);
    setIsLoading(false);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedBack,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
