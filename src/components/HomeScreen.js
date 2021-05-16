import React from "react";
import { Card, Col, Row } from "antd";


export default function HomeScreen() {
  return (
    <div style={{ maxWidth: "50%", display: "block", margin: "auto", padding:"1rem" }}>
      <Row justify="space-around" align="middle" gutter={[16, 16]}>
        <Col>
          <Card style={{ width: "21rem" }}>hey</Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem" }}>hey</Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem" }}>hey</Card>
        </Col>
        <Col>
          <Card style={{ width: "21rem" }}>hey</Card>
        </Col>
      </Row>
    </div>
  );
}
