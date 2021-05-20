// import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactList.module.css";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";

// const mapStateToProps = (state) => ({
//   contacts: selectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDeleteButton: (id) => dispatch(operations.deleteContact(id)),
// });

export default function ContactList() {
  const contacts = useSelector(selectors.getVisibleContacts);

  const dispatch = useDispatch();

  return (
    <>
      <ul className={styles.listContactList}>
        {contacts.map((contact) => (
          <li className={styles.listStyle} key={contact.id}>
            {contact.name + " : " + contact.number}
            <button
              className={styles.buttonContactList}
              onClick={() => {
                dispatch(operations.deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
