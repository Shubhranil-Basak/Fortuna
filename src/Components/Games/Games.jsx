import React from "react";
import GamesCard from "./GameCard";
import { Container, Row, Col } from "react-bootstrap";
import coin from "../../assets/coin.png";
import wheel from "../../assets/slot-machine.png";
import rps from "../../assets/rps.png";
import UD from "../../assets/7UD.png";
import cards from "../../assets/cards.png";
import HiLo from "../../assets/HiLo.png";
import mines from "../../assets/mines.png";
import scratch from "../../assets/scratch.png";
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
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={wheel} title="Wheel of Fortune" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={rps} title="rock-paper-scissors" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={UD} title="7 up 7 down" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={cards} title="3 cards" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={HiLo} title="High Low" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={mines} title="mines" />
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="game-card">
              <GamesCard imgPath={scratch} title="scratch card" />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Games;
