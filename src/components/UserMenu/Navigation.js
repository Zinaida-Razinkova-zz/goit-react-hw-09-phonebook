import React from "react";
import { NavLink } from "react-router-dom";
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import styles from "./UserMenu.module.css";

// const mapStateToProps = (state) => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <>
      <nav>
        <NavLink to="/" exact className={styles.navlink}>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/contacts" exact className={styles.navlink}>
            Phonebook
          </NavLink>
        )}
      </nav>
    </>
  );
}
