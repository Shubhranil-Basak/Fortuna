import React from "react";
import GamesCard from "./GameCard";
import { Container, Row, Col } from "react-bootstrap";
import coin from "../../assets/coin.png";

const Games = () => {
  return (
    <>
      <Container fluid className="game-section">
        <Container>
          <h1 className="game-heading">
            <strong>Games</strong>
          </h1>
          <Row
            className="justify-content-center"
            style={{ paddingBottom: "10px" }}
          >
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={coin} title="Coin Flip" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Games;
