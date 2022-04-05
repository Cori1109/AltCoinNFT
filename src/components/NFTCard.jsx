import React, { useState, useEffect } from "react";
import { ButtonGroup, Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

// IMPORTANT NOTE: In this example, the URI is used as a unique key to identify
// a token associated with an asset. This is fine for demonstration, but in a
// production project you should have a unique key associated with the asset
// and store that in the contract along with the URI.
const NFTCard = ({ name, image, color, unit, minted, total, doMint }) => {
  const [cntMint, setCntMint] = useState(0);
  const purLimit = 10;

  const handleChangePlus = () => {
    if (cntMint < purLimit) setCntMint((prev) => prev + 1);
  };

  const handleChangeMinus = () => {
    if (cntMint > 0) setCntMint((prev) => prev - 1);
  };

  useEffect(() => {
    doMint(cntMint);
  }, [cntMint]);

  return (
    <Card
      style={{
        width: "300px",
        margin: 20,
        background: `${color ? color : null}`,
      }}
    >
      <Card.Body>
        <Card.Title style={{ color: "black" }}>{name}</Card.Title>
        <Card.Img src={image}></Card.Img>
        <Card.Text style={{ color: "black" }}>
          {" "}
          {minted} / {total}
        </Card.Text>
        <ButtonGroup>
          <Button onClick={handleChangeMinus}>-</Button>
          <Button disabled>{cntMint}</Button>
          <Button onClick={handleChangePlus}>+</Button>
        </ButtonGroup>
      </Card.Body>
      <Card.Footer style={{ color: "black" }}>
        {cntMint * unit} MATIC
      </Card.Footer>
    </Card>
  );
};

NFTCard.protoTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.any,
  unit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  doMint: PropTypes.func.isRequired,
};

export default NFTCard;
