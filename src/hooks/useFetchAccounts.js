import { useEffect, useMemo, useState } from "react";

export const useFetchAccounts = () => {
  const apiEndpoint = "http://localhost:3001/api/";
  const [tableUsers, setTableUsers] = useState([]);
  const [enableLoading, setEnableLoading] = useState(true);
  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row.fullName, //access nested data with dot notation
        header: "Full Name",
      },
      {
        accessorFn: (row) => row.contact, //access nested data with dot notation
        header: "Contact number",
      },
      {
        accessorFn: (row) => row.email, //access nested data with dot notation
        header: "Email",
      },
      {
        accessorFn: (row) => row.username, //access nested data with dot notation
        header: "Username",
      },
      {
        accessorFn: (row) =>
          row.position == 1
            ? "Admin"
            : row.position == 2
            ? "Client"
            : "Applicant",
        header: "Position",
      },
    ],
    []
  );
  async function fetchAccounts() {
    try {
      const response = await fetch(apiEndpoint + "users"); // Replace with your server URL
      const data = await response.json();
      console.log(response);
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
  return { columns, tableUsers, enableLoading };
};
