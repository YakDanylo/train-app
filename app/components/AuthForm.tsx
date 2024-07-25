"use client";
import React, { useState } from "react";
import classes from "./AuthForm.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Audio, ColorRing, Oval } from "react-loader-spinner";
export default function AuthForm({
  typeOfForm,
  func,
}: {
  typeOfForm: string;
  func: (email: string, password: string) => Promise<any>;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    setLoading(true);
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    const response = await func(email, password);
    if (response?.statusCode === 400) {
      setError("Wrong email");
      setLoading(false);
    }
    if (response?.statusCode === 404) {
      setError("Such user does not exist");
      setLoading(false);
    }
    if (response?.statusCode === 401) {
      setError("Wrong password");
      setLoading(false);
    }
    if (response?.access_token) {
      router.push("/schedule");
      setLoading(false);
    }
  }

  return (
    <div className={classes.formWrapper}>
      <form className={classes.form}>
        <h1>Train schedule</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={classes.error}>{error}</p>

        <button
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
        >
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: 0,
                padding: 0,
              }}
            >
              <ColorRing
                visible={true}
                height="30"
                width="30"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          ) : (
            <p>{typeOfForm === "signUp" ? "Sign Up" : "Sign In"}</p>
          )}
        </button>
      </form>
      <div>
        {typeOfForm === "signUp" ? (
          <div className={classes.changeAuthWrapper}>
            <p>Already has an account?</p>
            <Link className={classes.link} href="/sign-in">
              Sign In
            </Link>
          </div>
        ) : (
          <div className={classes.changeAuthWrapper}>
            <p>Still no accout?</p>
            <Link className={classes.link} href="/sign-up">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
