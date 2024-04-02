import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

/** Renders a single row in the List contact table. See pages/Listcontact.jsx. */
const Note = ({ note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>
);

// Require a document to be passed to this component.
Note.propTypes = {
  note: PropTypes.shape({
    note: PropTypes.string,
    contactId: PropTypes.string,
    owner: PropTypes.string,
    createdAt: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default Note;
