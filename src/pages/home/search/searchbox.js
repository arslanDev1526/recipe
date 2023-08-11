import React from "react";
import { Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import styles from "./searchbox.module.css";

const SearchBox = () => {
  return (
    <Form.Group className={`position-relative   ${styles.form}`}>
      <Form.Control
        type="text"
        placeholder="Type ingredients..."
        className={`px-5 py-3 ${styles.control} `}
      />

      <FaSearch
        className={`fs-3 position-absolute top-50 translate-middle-y text-muted ${styles["icon-search"]} `}
      />

      <button
        type="submit"
        className={`position-absolute top-50 end-0 translate-middle-y p-2 rounded mx-3 d-none d-sm-block ${styles["custom-btn"]}`}
      >
        Search
      </button>
    </Form.Group>
  );
};

export default SearchBox;
