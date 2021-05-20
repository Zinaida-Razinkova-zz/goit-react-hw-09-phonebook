import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={styles.userMenuBlock}>
      <span className={styles.welcomeText}>Welcome, {name}.</span>
      <button className={styles.buttonLogOut} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
