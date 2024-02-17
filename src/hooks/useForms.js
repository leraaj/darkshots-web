import { useRef, useState } from "react";

export const useForms = () => {
  const [id, setId] = useState(""); //userData._id
  const [fullName, setFullName] = useState(""); //userData.fullName
  const [email, setEmail] = useState(""); //userData.email
  const [contact, setContact] = useState(""); //userData.contact
  const [username, setUsername] = useState(""); //userData.username
  const [password, setPassword] = useState(""); //userData.password
  const [position, setPosition] = useState(""); //userData.position
  // REFS
  const fullnameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const positionRef = useRef();
  // RESET VALUES
  const handleReset = () => {
    setId("");
    setFullName("");
    setEmail("");
    setContact("");
    setUsername("");
    setPassword("");
    setPosition("");
  };
  // DISABLE INPUTS
  const disableInput = () => {
    fullnameRef.current.disabled = true;
    emailRef.current.disabled = true;
    contactRef.current.disabled = true;
    usernameRef.current.disabled = true;
    passwordRef.current.disabled = true;
    positionRef.current.disabled = true;
  };

  // DEFAULT INPUTS
  const enableInput = () => {
    fullnameRef.current.disabled = false;
    emailRef.current.disabled = false;
    contactRef.current.disabled = false;
    usernameRef.current.disabled = false;
    passwordRef.current.disabled = false;
    positionRef.current.disabled = false;
  };
  return {
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
  };
};
