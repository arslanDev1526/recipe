import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DeleteIcon } from "../../../../../components/index";
import styles from "./uploadeimg.module.css";

const UpLoadedImg = ({ img_url, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <Container>
      <Row>
        <Col md={12} lg={12}>
          <div className={`${styles["img-card"]}`}>
            <img className={` mt-3 ${styles.img}`} src={img_url} />

            <button className={styles["del-btn"]} onClick={handleDelete}>
              <DeleteIcon />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UpLoadedImg;
