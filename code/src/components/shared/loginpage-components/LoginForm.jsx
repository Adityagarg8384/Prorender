"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleUsernameChange(event) {
    event.target.value = event.target.value.replace(/\s/g, "");
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [username, password]);

  useEffect(() => {
    setFormError("");
  }, [username]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    startTransition(async () => {
      try {
        const user = { username, password };
        // console.log(username, password);
        const result = await axios.post("/api/auth/login", user, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });

        setFormError("");
        router.replace("/dashboard");
        router.refresh("/dashboard");
        location.reload();
      } catch (error) {
        if (
          error?.response?.data?.Type === "authorisation error" ||
          error?.response?.data?.Type === "ZodValidationError"
        ) {
          setFormError(error?.response?.data?.Message);
        } else {
          console.error(error);
        }
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex z-10 h-full flex-col items-start  px-16 py-10 -mr-40 bg-white rounded-[40px] max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full"
    >
      <h2 className="text-4xl font-light text-black max-md:max-w-full max-md:text-4xl">
        <span className="font-medium text-rose-400">Login</span> to your Account
      </h2>
      <input
        type="text"
        placeholder="Email or Username"
        className="px-6 py-3 mt-10 max-w-full text-2xl text-emerald-500 bg-white rounded-2xl border-2 border-teal-600 border-solid w-[500px] max-md:px-5 max-md:mt-10 "
        aria-label="Email or Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        className="px-6 py-3 mt-5 max-w-full text-2xl text-emerald-500 bg-white rounded-2xl border-2 border-teal-600 border-solid w-[500px] max-md:px-5 max-md:mt-10"
        aria-label="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {formError && (
        <p className="text-red-500 mt-2 capitalize font-semibold">
          {formError}
        </p>
      )}
      <p className="mt-20 ml-3 text-2xl text-emerald-400 max-md:mt-10 max-md:max-w-full">
        <span className="text-black">Do not have an Account? Please </span>
        <Link
          replace={true}
          href="/signup"
          className="font-bold text-emerald-500"
        >
          Register
        </Link>
      </p>
      <button
        type="submit"
        className={`px-12 py-2 mt-10 max-w-full flex items-center justify-center text-2xl text-white whitespace-nowrap  rounded-xl w-[305px] max-md:px-5 max-md:mt-10 ${
          validForm && !isPending
            ? "bg-emerald-600"
            : "bg-emerald-200 cursor-not-allowed"
        }`}
        disabled={!validForm || isPending}
      >
        {isPending ? <Loader2 className="animate-spin " /> : " Login!"}
      </button>
    </form>
  );
};

export default LoginForm;
