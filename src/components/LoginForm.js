import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "../App.module.css";

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = useCallback((e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return console.warn(`Error`);
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      reset();
    },
    [dispatch, email, password]
  );

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className={styles.loginFormPhonebook}>
        <h1 className={styles.loginFormHeading}>Log in to Phonebook</h1>
      </div>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.LoginFormLabel}>
          <span className={styles.LoginFormText}>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.LoginFormLabel}>
          <span className={styles.LoginFormText}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={styles.buttonLoginBlock}>
          <button className={styles.buttonLoginForm} type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
