import React, { useMemo, useState } from "react";
import SimpleButton from "../../../components/buttons/SimpleButton";
import { Box } from "@mui/material";
import AccountsTable from "../../../components/table/MaterialTable";
import { Create, Delete, Add } from "@mui/icons-material";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import Modal from "../../../components/modal/CustomModal";
import ModalBody from "../../../components/modal/ModalBody";
import ModalFooter from "../../../components/modal/ModalFooter";
import { useForms } from "../../../hooks/useForms";
import { toast } from "sonner";
const Index = () => {
  const { tableUsers, enableLoading, fetchAccounts } = useFetchUsers();
  const [isLoading, setIsLoading] = useState(false);
  const {
    id,
    setId,
    fullName,
    setFullName,
    email,
    setEmail,
    contact,
    setContact,
    username,
    setUsername,
    password,
    setPassword,
    position,
    setPosition,
    fullnameRef,
    emailRef,
    contactRef,
    usernameRef,
    passwordRef,
    positionRef,
    disableInput,
    enableInput,
    handleReset,
  } = useForms();
  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleFullname = (e) => {
    setFullName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

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
    handleReset();
    setCreateModal(false);
  };
  const createModalShow = () => {
    enableInput();
    setCreateModal(true);
  };
  // Update Modal
  const [updateModal, setUpdateModal] = useState(false);
  const updateModalHide = () => {
    handleReset();
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
  const setData = (
    id,
    fullName,
    email,
    contact,
    username,
    password,
    position
  ) => {
    setId(id);
    setFullName(fullName);
    setEmail(email);
    setContact(contact);
    setUsername(username);
    setPassword(password);
    setPosition(position);
  };
  const handleCreateSubmit = async () => {
    try {
      setIsLoading(true);
      const apiEndpoint = "http://localhost:3001/api/user";

      fullnameRef.current.disabled = true;
      emailRef.current.disabled = true;
      contactRef.current.disabled = true;
      usernameRef.current.disabled = true;
      passwordRef.current.disabled = true;
      positionRef.current.disabled = true;
      const response = await fetch(`${apiEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          contact: contact,
          username: username,
          password: password,
          position: position,
          applicationStatus: 2,
        }),
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log("Response:", responseData);
        setTimeout(() => {
          setIsLoading(false);
          toast.success(`User Added Successfully`);
          fetchAccounts();
          // createModalHide();
        }, 3000);
      } else {
        // enableInput();
        setIsLoading(false);
        toast.error("Error: " + response.statusText);
        console.log(response);
      }
    } catch (error) {
      // enableInput();
      setIsLoading(false);
      toast.error("Error: " + error.message);
    }
  };
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const apiEndpoint = "http://localhost:3001/api/user/";
      const response = await fetch(`${apiEndpoint}${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Request was successful, handle the response
        const responseData = await response.json();
        console.log("Response:", responseData);
        deleteModalHide();
        fetchAccounts();
        setTimeout(() => {
          setIsLoading(false);
          toast.success(`User Deleted Successfully`);
        }, 3000);
      } else {
        // Request failed, handle the error
        const errorMessage = await response.text(); // Get the error message from the response
        console.error("Error:", response.status, errorMessage);
        toast.error(`Error: ${response.status} - ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("An unexpected error occurred");
    } finally {
      // Reset the loading state regardless of success or failure
      setIsLoading(false);
    }
  };

  return (
    <>
      <AccountsTable
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
                const {
                  _id,
                  fullName,
                  email,
                  contact,
                  username,
                  password,
                  position,
                } = row.original;
                updateModalShow();
                setData(
                  _id,
                  fullName,
                  email,
                  contact,
                  username,
                  password,
                  position
                );
              }}
              label={<Create />}
            />
            <SimpleButton
              size={"sm"}
              color={"light"}
              classes={"rounded-pill"}
              onClick={() => {
                const { _id } = row.original;
                deleteModalShow();
                setData(_id);
              }}
              label={<Delete />}
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
      <Modal
        isStatic={true}
        size={"lg"}
        show={createModal}
        onHide={createModalHide}
        title={"Add User"}>
        <ModalBody>
          <div className="row m-0 p-0">
            <div className="col-12">
              <label class="form-label">Fullname</label>
              <input
                type="text"
                className="form-control"
                value={fullName}
                onChange={handleFullname}
                ref={fullnameRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={handleEmail}
                ref={emailRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                value={contact}
                onChange={handleContact}
                ref={contactRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={handleUsername}
                ref={usernameRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handlePassword}
                ref={passwordRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Position</label>
              <select
                class="form-select"
                value={position}
                onChange={handlePosition}
                ref={positionRef}>
                <option>Open this select menu</option>
                <option value="1">Admin</option>
                <option value="2">Client</option>
                <option value="3">Applicant</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter onHide={createModalHide}>
          <SimpleButton
            color={"success"}
            label={
              isLoading ? (
                <>
                  <span>Submitting </span>
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"></div>
                </>
              ) : (
                "Submit"
              )
            }
            onClick={handleCreateSubmit}
          />
        </ModalFooter>
      </Modal>
      <Modal
        isStatic={true}
        size={"lg"}
        show={updateModal}
        onHide={updateModalHide}
        title={"User details"}>
        <ModalBody>
          <div className="row m-0 p-0">
            <div className="col-12">
              <label class="form-label">Fullname</label>
              <input
                type="text"
                className="form-control"
                value={fullName}
                onChange={handleFullname}
                ref={fullnameRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={handleEmail}
                ref={emailRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                value={contact}
                onChange={handleContact}
                ref={contactRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={handleUsername}
                ref={usernameRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={handlePassword}
                ref={passwordRef}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Position</label>
              <select
                class="form-select"
                value={position}
                onChange={handlePosition}
                ref={positionRef}>
                <option>Open this select menu</option>
                <option value="1">Admin</option>
                <option value="2">Client</option>
                <option value="3">Applicant</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter onHide={updateModalHide}>
          <SimpleButton
            color={"success"}
            label={
              isLoading ? (
                <>
                  <span>Submitting </span>
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"></div>
                </>
              ) : (
                "Submit"
              )
            }
            onClick={handleCreateSubmit}
          />
        </ModalFooter>
      </Modal>
      <Modal
        size={"sm"}
        show={deleteModal}
        onHide={deleteModalHide}
        title={"delete user"}>
        <ModalBody>
          <span>
            Type <span className="text-danger">confirm</span> to delete this
            user
          </span>
          <div className="col">
            <input type="text" className="form-control" />
          </div>
        </ModalBody>
        <ModalFooter onHide={deleteModalHide}>
          <SimpleButton
            color={"danger"}
            label={
              isLoading ? (
                <>
                  <span>Deleting </span>
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"></div>
                </>
              ) : (
                "Submit"
              )
            }
            onClick={handleDelete}
          />
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Index;
