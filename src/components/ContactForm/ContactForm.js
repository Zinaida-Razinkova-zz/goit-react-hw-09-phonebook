import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styles from "./ContactForm.module.css";
import operations from "../../redux/operations";

const firstState = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstState,
  });
  const { name, number } = user;

  const handlChange = useCallback((event) => {
    const { name, value } = event.currentTarget;

    setUser((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handlSubmit = useCallback(
    (event) => {
      event.preventDefault();
      // formSubmitHandler  v
      dispatch(operations.addContact({ name, number }));
      reset();
    },
    [dispatch, name, number]
  );

  const reset = () => {
    setUser(firstState);
  };

  return (
    <>
      <form className={styles.formConteiner} onSubmit={handlSubmit}>
        <label className={styles.labelName} htmlFor="">
          <span className={styles.spanText}>Name</span>
          <input
            className={styles.inputName}
            onChange={handlChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={styles.labelName} htmlFor="">
          <span className={styles.spanText}>Number</span>
          <input
            className={styles.inputName}
            onChange={handlChange}
            value={number}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={styles.buttonAddContact} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
