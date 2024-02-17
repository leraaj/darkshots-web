import { useEffect, useState } from "react";

export const useFetchUsers = () => {
  const apiEndpoint = "http://localhost:3001/api/";
  const [tableUsers, setTableUsers] = useState([]);
  const [enableLoading, setEnableLoading] = useState(true);

  async function fetchAccounts() {
    try {
      const response = await fetch(apiEndpoint + "users"); // Replace with your server URL
      const data = await response.json();
      if (response.ok) {
        setTableUsers(data);
        setEnableLoading(false);
      } else {
        alert("Table not displaying");
        setEnableLoading(true);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  useEffect(() => {
    fetchAccounts();
  }, []);
  return { tableUsers, enableLoading, fetchAccounts };
};
