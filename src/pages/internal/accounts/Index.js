import React, { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { Create, Delete, Add } from "@mui/icons-material";
import SimpleButton from "../../../components/buttons/SimpleButton";
import Table from "../../../components/table/MaterialTable";
import { toast } from "sonner";
import CreateModal from "./CreateModal";
import useFetch from "../../../hooks/useFetch";
const Index = () => {
  // Hooks
  const {
    data,
    isLoading: enableLoading,
    error,
    fetchData,
  } = useFetch("http://localhost:3001/api/users");

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
  // Create Modal
  const [createModal, setCreateModal] = useState(false);
  const createModalHide = () => {
    setCreateModal(false);
  };
  const createModalShow = () => {
    setCreateModal(true);
  };

  return (
    <>
      <Table
        columns={columns}
        data={data}
        enableLoading={enableLoading}
        enableColumnActions={true}
        enableHiding={true}
        enableDensityToggle={true}
        enableFullScreenToggle={true}
        renderRowActions={({ row }) => (
          <Box sx={{ display: "flex", gap: "0.2rem" }}>
            {/* <button>{row.original.position}</button> */}
            <SimpleButton
              size={"sm"}
              color={"light"}
              classes={" rounded-0"}
              onClick={() => {
                // const {
                //   _id,
                //   fullName,
                //   email,
                //   contact,
                //   username,
                //   password,
                //   position,
                // } = row.original;
                // updateModalShow();
              }}
              label={<Create fontSize="sm" />}
            />
            <SimpleButton
              size={"sm"}
              color={"light"}
              classes={"rounded-0"}
              onClick={() => {
                // const { _id } = row.original;
                // deleteModalShow();
              }}
              label={<Delete fontSize="sm" />}
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
                }}
                label={<Add />}
              />
            </>
          );
        }}
      />
      <CreateModal
        show={createModal}
        onHide={createModalHide}
        refresh={fetchData}
      />
    </>
  );
};

export default Index;
