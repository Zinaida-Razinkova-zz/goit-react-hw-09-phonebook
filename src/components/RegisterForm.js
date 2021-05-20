import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "../App.module.css";
import { authOperations } from "../redux/auth";

const firstState = {
  name: "",
  email: "",
  password: "",
};

export default function RegisterView() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstState,
  });
  const { name, email, password } = user;

  const handleChange = useCallback((event) => {
    const { name, value } = event.currentTarget;

    setUser((prev) => ({ ...prev, [name]: value }));
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
    setUser(firstState);
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
