import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { Button } from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
const ContactForm = () => {
  const [name, setName] = useState("Name");
  const [email, setEmail] = useState("@gmail.com");
  const [text, setText] = useState("Information");
  const onSubmit = (event) => {
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    event.preventDefault();
  };
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT TEXT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FiPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" email="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" text="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src="/images/bycc.png" alt="Contact Image" />
      </div>
    </section>
  );
};

export default ContactForm;
