import React, { useState } from "react";
import Modal from "../../../components/modal/CustomModal";
import ModalBody from "../../../components/modal/ModalBody";
import ModalFooter from "../../../components/modal/ModalFooter";
import SimpleButton from "../../../components/buttons/SimpleButton";
import {
  validateAll,
  resetValidation,
  isEmpty,
  isValidEmail,
  isValidContact,
} from "../../../hooks/validate";

const CreateModal = ({ show, onHide, refresh }) => {
  // Modal Variables
  const [isLoading, setIsLoading] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hideModal = () => {
    onHide();
    handleReset();
    resetValidation();
  };
  // Variables
  const [fullName, setFullName] = useState(""); //userData.fullName
  const [email, setEmail] = useState(""); //userData.email
  const [contact, setContact] = useState(""); //userData.contact
  const [username, setUsername] = useState(""); //userData.username
  const [password, setPassword] = useState(""); //userData.password
  const [position, setPosition] = useState(""); //userData.position
  // Variable Handlers
  const handleFullname = (e) => {
    setFullName(e.target.value);
    isEmpty(e);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    isValidEmail(e);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
    isValidContact(e, 11);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    isEmpty(e);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    isEmpty(e);
  };
  const handlePosition = (e) => {
    setPosition(e.target.value);
    isEmpty(e);
  };
  // Extra Functions
  const handleDisableInput = () => {
    setIsInputDisabled(true);
  };
  const handleEnableInput = () => {
    setIsInputDisabled(false);
  };
  const handleReset = () => {
    setFullName("");
    setEmail("");
    setContact("");
    setUsername("");
    setPassword("");
    setPosition("");
  };
  //  Main Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateAll();
      setIsLoading(true);
      handleDisableInput();
      const url = "http://localhost:3001/api/user";
      const response = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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

      if (!response.ok) {
        if (response.status === 400) {
          // Parse the validation errors from the response
          const errorBody = await response.json();
          const fetchError = errorBody.errors;

          if (fetchError) {
            for (const key in fetchError) {
              // Assuming keys match the 'name' attribute of your input fields
              const inputElement = document.querySelector(`[name="${key}"]`);
              const invalidFeedback = document.querySelector(
                ` [name="${key}"] + .invalid-feedback`
              );

              if (inputElement) {
                inputElement.classList.toggle("is-invalid", true);
                invalidFeedback.innerHTML = fetchError[key];
                console.log(fetchError[key]);
              }
            }
          }
        } else {
          validateAll();
          // For other HTTP errors
          console.log(await response.json());
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setIsLoading(false);
        handleEnableInput();
      } else {
        const data = await response.json();
        console.log("Fetched data:", data);
        setTimeout(
          () => {
            refresh();
            handleReset();
            handleEnableInput();
            setIsLoading(false);
            resetValidation();
            setIsSubmitted(true);
          } /*/1000/*/
        );
        setTimeout(
          () => {
            setIsSubmitted(false);
            onHide();
          } /*/2000/*/
        );
      }
    } catch (error) {
      setIsLoading(false);
      handleEnableInput();
      console.error("Error fetching data:", error.message);
    }
  };

  return (
    <Modal
      show={show}
      onHide={hideModal}
      title={"Create new user"}
      size={"lg"}
      isStatic={true}
      onSubmit={handleSubmit}>
      <ModalBody>
        <div className="col-12">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control `}
            name={"fullName"}
            value={fullName}
            onChange={handleFullname}
            disabled={isInputDisabled}
            placeholder="First name, M.I. Lastname"
            required
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="col-12 col-lg-6  ">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className={`form-control`}
            value={"" || email}
            onChange={handleEmail}
            disabled={isInputDisabled}
            placeholder="email@mail.com"
            required
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="col-12 col-lg-6  ">
          <label className="form-label">Contact Number</label>
          <input
            type="number"
            name="contact"
            className="form-control"
            value={contact}
            onChange={handleContact}
            disabled={isInputDisabled}
            placeholder="Ex. 09XX-XXX-XXXX"
            maxLength="11"
            required
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="col-12 col-lg-6">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={username}
            onChange={handleUsername}
            disabled={isInputDisabled}
            autoComplete="username"
            required
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="col-12 col-lg-6">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={handlePassword}
            disabled={isInputDisabled}
            autoComplete="current-password"
            required
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="col-12 col-lg-6">
          <label className="form-label">Position</label>
          <select
            className="form-select"
            name="position"
            value={position} // Use a state variable for the selected value
            onChange={handlePosition}
            disabled={isInputDisabled}
            required>
            <option value="" disabled>
              Open this select menu
            </option>
            <option value="1">Admin</option>
            <option value="2">Client</option>
            <option value="3">Applicant</option>
          </select>
          <div className="invalid-feedback"></div>
        </div>
      </ModalBody>
      <ModalFooter onHide={hideModal}>
        <SimpleButton
          type={"submit"}
          color={isLoading ? "" : isSubmitted ? "success" : "light"}
          label={
            isLoading ? (
              <div
                className="spinner-border"
                role="status"
                style={{ height: "20px", width: "20px" }}
              />
            ) : isSubmitted ? (
              "Submitted Successfully"
            ) : (
              "Submit"
            )
          }
        />
        <SimpleButton
          type={"button"}
          size={""}
          color={"outline-light"}
          label={"Cancel"}
          onClick={hideModal}
        />
      </ModalFooter>
    </Modal>
  );
};

export default CreateModal;
