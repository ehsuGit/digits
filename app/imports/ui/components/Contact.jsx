import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap-icons';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const StuffItem = ({ stuff }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={stuff.image} width={75} />
      <Card.Title>{stuff.firstName} {stuff.lastName}</Card.Title>
      <Card.Subtitle>{stuff.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{stuff.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
StuffItem.propTypes = {
  stuff: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default StuffItem;
