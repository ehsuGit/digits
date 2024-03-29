import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Contact = ({ stuff }) => (
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
Contact.propTypes = {
  stuff: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
