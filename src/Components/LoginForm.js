import React, { useState } from "react";

const LoginForm = () => {
  const [isSignForm, setIsSignInform] = useState(true);
  const toggleSignForm = () => {
    setIsSignInform(!isSignForm);
  };
  return (
    <form className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">
        {isSignForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignForm && (
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-600"
        />
      )}
      <input
        type="text"
        placeholder="Email or mobile number"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-4 my-4 w-full bg-gray-600"
      />
      <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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
