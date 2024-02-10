import React, { useEffect, useMemo, useState } from "react";
import SimpleButton from "../../../components/buttons/SimpleButton";
import { Box } from "@mui/material";
import MaterialTable from "../../../components/table/MaterialTable";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
const Index = () => {
  const apiEndpoint = "http://localhost:3001/api/";
  const [tableUsers, setTableUsers] = useState([]);
  const [userData, setUserData] = useState([]);
  const [enableLoading, setEnableLoading] = useState(true);
  //should be memoized or stable
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
  async function getTableData() {
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
    getTableData();
  }, []);
  // Create Modal
  const [createModal, setCreateModal] = useState(false);
  const createModalHide = () => {
    setCreateModal(false);
  };
  const createModalShow = () => {
    setCreateModal(true);
  };
  // Update Modal
  const [updateModal, setUpdateModal] = useState(false);
  const updateModalHide = () => {
    setUpdateModal(false);
  };
  const updateModalShow = () => {
    setUpdateModal(true);
  };
  // Delete Modal
  const [deleteModal, setDeleteModal] = useState(false);
  const deleteModalHide = () => {
    setDeleteModal(false);
  };
  const deleteModalShow = () => {
    setDeleteModal(true);
  };
  return (
    <MaterialTable
      columns={columns}
      data={tableUsers}
      enableLoading={enableLoading}
      enableColumnActions={true}
      enableHiding={true}
      enableDensityToggle={true}
      enableFullScreenToggle={true}
      renderRowActions={({ row }) => (
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          {/* <button>{row.original.position}</button> */}
          <SimpleButton
            size={"sm"}
            color={"light"}
            classes={" rounded-pill"}
            onClick={() => {
              updateModalShow();
              setUserData(row.original);
            }}
            label={<CreateIcon />}
          />
          <SimpleButton
            size={"sm"}
            color={"light"}
            classes={"rounded-pill"}
            onClick={() => {
              deleteModalShow();
              setUserData(row.original);
            }}
            label={<DeleteIcon />}
          />
        </Box>
      )}
      renderTopToolbarCustomActions={({ table }) => {
        return (
          <>
            <SimpleButton
              color={"secondary"}
              classes={"col-auto rounded-0"}
              onClick={() => {
                createModalShow();
                setUserData([]);
              }}
              label={<AddIcon />}
            />
          </>
        );
      }}
    />
  );
};

export default Index;
