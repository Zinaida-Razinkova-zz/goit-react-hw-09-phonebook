import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "../App.module.css";
import { authOperations } from "../redux/auth";

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = useCallback((event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        return setName(value);

      case "email":
        return setEmail(value);

      case "password":
        return setPassword(value);

      default:
        return null;
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(authOperations.register({ name, email, password }));
      reset();
    },
    [dispatch, name, email, password]
  );

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className={styles.createFormAccount}>
        <h1 className={styles.createFormHeading}>Create your account</h1>
      </div>
      <form
        className={styles.createForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.createFormLabel}>
          <span className={styles.createFormText}>Name</span>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={styles.createFormLabel}>
          <span className={styles.createFormText}>Email</span>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.createFormLabel}>
          <span className={styles.createFormText}>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={styles.buttonCreateBlock}>
          <button className={styles.buttonCreateAccount} type="submit">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
}
