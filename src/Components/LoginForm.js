import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Slices/UserSlice";

const LoginForm = () => {
  const [isSignForm, setIsSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

  const toggleSignForm = () => {
    setIsSignInform(!isSignForm);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
      
    if (!isSignForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: "https://avatars.githubusercontent.com/u/55504711?v=4"
                }).then(() => {
                    // Profile updated!
                    const { uid, email, displayName, photoURL } = auth.currentUser
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    navigate("/browse");
                }).catch((error) => {
                    setErrorMessage(error.message)
                });
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
    } else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
    }

  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
    >
      <h1 className="font-bold text-3xl py-4">
        {isSignForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignForm && (
              <input
                  ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-600"
        />
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email or mobile number"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

      <button
        className="p-4 my-6 bg-red-700 w-full rounded-lg"
        onClick={() => handleButtonClick()}
      >
        {isSignForm ? "Sign In" : "Sign Up"}
      </button>
      <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
        {isSignForm
          ? "New to Netflix? Sign Up now"
          : "Already registered? Sign In now"}
      </p>
    </form>
  );
};

export default LoginForm;
