import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./Filter.module.css";
import actions from "../../redux/actions";
import { useSelector } from "react-redux";
import selectors from "../../redux/selectors";

// const mapStateToProps = (state) => ({
//   value: selectors.getFilter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onChange: (event) => dispatch(actions.changeFilter(event.target.value)),
// });

export default function Filter() {
  const value = useSelector(selectors.getFilter);

  const dispatch = useDispatch();

  const onChange = useCallback(
    (event) => {
      dispatch(actions.changeFilter(event.currentTarget.value));
    },
    [dispatch]
  );

  return (
    <>
      <label>
        <span>Find contacts by name</span>
        <input
          className={styles.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
