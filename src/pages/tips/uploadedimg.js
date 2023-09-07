import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { DeleteIcon } from "../../components/index";
import styles from "./uploadeimg.module.css";

const UpLoadedImg = ({ img_url,  onDelete }) => {
  const handleDelete = () => {
    onDelete()
  };

  return (
    <Container>
      <Row>
        <Col   md={12} lg={12}>
          <Card className={`${styles["img-card"]} `} >
            <Card.Img className={`${styles.img} `}  style={{ maxHeight: "200px", maxWidth: "100%" }} variant="top" src={img_url} alt="i am here" />
            <Card.Body>
              <button className={styles["del-btn"]} onClick={handleDelete}>
              <DeleteIcon/>
              </button>
            </Card.Body>
          </Card>

      
        </Col>
      </Row>
    </Container>
  );
};

export default UpLoadedImg;
