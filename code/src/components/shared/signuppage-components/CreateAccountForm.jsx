"use client";

import { useState, useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { Loader2 } from "lucide-react";

function CreateAccountForm() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [validForm, setValidForm] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleFullNameChange(event) {
    setFullName(event.target.value);
  }

  function handleUsernameChange(event) {
    event.target.value = event.target.value.replace(/\s/g, "");
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if (fullName.length > 0 && username.length > 0 && password.length > 0) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [fullName, username, password]);

  useEffect(() => {
    setFormError("");
  }, [fullName, username]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    startTransition(async () => {
      try {
        const user = { fullName, username, password };
        const result = await axios.post("/api/auth/signup", user, {
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
    <section className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
      <div className="flex z-10 flex-col grow items-start px-16 py-11 -mr-40 text-3xl text-emerald-500 bg-white rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h2 className="text-4xl  text-black max-md:max-w-full max-md:text-4xl">
          <span className="text-emerald-400">Create</span> Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-7 max-w-full w-[640px] max-md:mt-10">
            <label htmlFor="input-fullname" className="sr-only">
              Full Name
            </label>
            <input
              id="input-fullname"
              type="text"
              placeholder="Full Name"
              className="px-6 py-3  max-w-full text-2xl text-emerald-500 bg-white rounded-2xl border-2 border-teal-600 border-solid w-[500px] max-md:px-5 max-md:mt-10"
              aria-label="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </div>
          <div className="mt-7 max-w-full w-[640px] max-md:mt-10">
            <label htmlFor="input-username" className="sr-only">
              Username
            </label>
            <input
              id="input-username"
              type="text"
              placeholder="Username"
              className="px-6 py-3 max-w-full text-2xl text-emerald-500 bg-white rounded-2xl border-2 border-teal-600 border-solid w-[500px] max-md:px-5 max-md:mt-10"
              aria-label="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mt-7 max-w-full w-[640px] max-md:mt-10">
            <label htmlFor="input-password" className="sr-only">
              Password
            </label>
            <input
              id="input-password"
              type="password"
              placeholder="Password"
              className="px-6 py-3  max-w-full text-2xl text-emerald-500 bg-white rounded-2xl border-2 border-teal-600 border-solid w-[500px] "
              aria-label="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {formError && (
            <p className="text-red-500 text-xl mt-2 capitalize font-semibold">
              {formError}
            </p>
          )}
          <p className="mt-5 ml-3 text-2xl text-emerald-400 ">
            <span className="text-black">Already have an Account? Please </span>
            <Link
              href="/login"
              replace={true}
              className="font-bold text-emerald-500"
            >
              Login
            </Link>
          </p>
          <button
            type="submit"
            className={`px-12 py-3 mt-10 max-w-full text-center flex items-center justify-center text-2xl text-white whitespace-nowrap  rounded-xl w-[305px] max-md:px-5 max-md:mt-10 ${
              validForm && !isPending
                ? "bg-emerald-600"
                : "bg-emerald-200 cursor-not-allowed"
            }`}
            disabled={!validForm || isPending}
          >
            {isPending ? (
              <Loader2 className="animate-spin " />
            ) : (
              " Create Account!"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateAccountForm;
