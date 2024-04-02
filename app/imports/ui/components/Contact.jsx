import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, ListGroup } from 'react-bootstrap';
import Note from './Note';

/** Renders a single row in the List contact table. See pages/Listcontact.jsx. */
const Contact = ({ contact, notes }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={contact.image} width={75} />
      <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <Note key={note._id} note={note} />)}
      </ListGroup>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape)({
    note: PropTypes.string,
    contactId: PropTypes.string,
    owner: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
