"use client";
// the "base" component/code was copied from MUI website, but since it has
// click handlers, state and stuff we need to set it as a client component.

import { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { signIn } = useAuth();
  const { loading, data, error, setAuthState } = useContext(
    AuthenticationContext
  );

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (isSignIn) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }

    setDisabled(true);
  }, [inputs, isSignIn]);

  const handleClick = () => {
    if (isSignIn) {
      signIn({ email: inputs.email, password: inputs.password });
    }
  };
  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          "text-white bg-blue-400 hover:bg-blue-500",
          "hover:bg-gray-200"
        )} p-1 px-4 mr-3 font-medium border rounded`}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="p2 h-[75vh] flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <div className="p2 h-[75vh]">
              {error && (
                <Alert severity="error" className="mb-4">
                  {error}
                </Alert>
              )}
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  {renderContent("Sign in", "Create Accont")}
                </p>
              </div>
              <div className="m-auto">
                <h2 className="font-light text-center text-2xl">
                  {renderContent(
                    "Log Into Your Account",
                    "Create Your Account"
                  )}
                </h2>
                <AuthModalInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignIn={isSignIn}
                />
                <button
                  disabled={disabled}
                  className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400"
                  onClick={handleClick}
                >
                  {renderContent("Sign In ", "Create Account")}
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
