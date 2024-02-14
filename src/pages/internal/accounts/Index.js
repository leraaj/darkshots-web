import React, { useEffect, useMemo, useState } from "react";
import SimpleButton from "../../../components/buttons/SimpleButton";
import { Box } from "@mui/material";
import AccountsTable from "../../../components/table/MaterialTable";
import { Create, Delete, Add } from "@mui/icons-material";
import { useFetchAccounts } from "../../../hooks/useFetchAccounts";
import Modal from "../../../components/modal/CustomModal";
import ModalBody from "../../../components/modal/ModalBody";

import ModalFooter from "../../../components/modal/ModalFooter";
const Index = () => {
  const [userData, setUserData] = useState([]);
  const { columns, tableUsers, enableLoading } = useFetchAccounts();

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
                updateModalShow();
                setUserData(row.original);
                // console.log(row.original);
              }}
              label={<Create />}
            />
            <SimpleButton
              size={"sm"}
              color={"light"}
              classes={"rounded-pill"}
              onClick={() => {
                deleteModalShow();
                setUserData(row.original);
                // console.log(row.original);
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
                  setUserData([]);
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
                value={"" || userData.fullName}
              />
            </div>
            <div className="col-12 col-md-6 ">
              {" "}
              <label class="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={"" || userData.email}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                value={"" || userData.contact}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={"" || userData.username}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={"" || userData.password}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Position</label>
              <select class="form-select" value={"" || userData.position}>
                <option>Open this select menu</option>
                <option value="1">Admin</option>
                <option value="2">Client</option>
                <option value="3">Applicant</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter onHide={createModalHide}>
          <SimpleButton color={"success"} label={"Add User"} />
        </ModalFooter>
      </Modal>
      <Modal
        isStatic={true}
        size={"lg"}
        show={updateModal}
        onHide={updateModalHide}
        title={"User Details"}>
        <ModalBody>
          <div className="row m-0 p-0">
            <div className="col-12">
              <label class="form-label">Fullname</label>
              <input
                type="text"
                className="form-control"
                value={"" || userData.fullName}
              />
            </div>
            <div className="col-12 col-md-6 ">
              {" "}
              <label class="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={"" || userData.email}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                value={"" || userData.contact}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={"" || userData.username}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={"" || userData.password}
              />
            </div>
            <div className="col-12 col-md-6 ">
              <label class="form-label">Position</label>
              <select class="form-select" value={"" || userData.position}>
                <option value="1">Admin</option>
                <option value="2">Client</option>
                <option value="3">Applicant</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter onHide={updateModalHide}>
          <SimpleButton color={"success"} label={"Update User"} />
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
          <SimpleButton color={"danger"} label={"Delete user"}></SimpleButton>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Index;
