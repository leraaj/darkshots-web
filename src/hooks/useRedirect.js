import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirect = ({ error }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      if (count === 0) {
        navigate("/login");
      }
      // Cleanup the timer to avoid memory leaks
      return () => clearTimeout(timer);
    }
  }, [count, error, navigate]);

  const redirectElement = (
    <blockquote className="blockquote">
      Unauthorized user, redirecting to login page in ... {count}
    </blockquote>
  );

  return { redirectElement };
};

export default useRedirect;
