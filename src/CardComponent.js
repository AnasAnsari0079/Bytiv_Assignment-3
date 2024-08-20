import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
  faUser,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Form } from "react-bootstrap";
import "./CardComponent.css";

const CardComponent = ({ user, onDelete, onUpdate }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState(user);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleDeleteClick = () => {
    if (onDelete) {
      onDelete(user.id); // Call onDelete with the user's id
    }
  };

  const handleEditClick = () => {
    setEditData(user); // Initialize editData with the current user data
    setShowEditModal(true);
  };

  const handleSaveClick = () => {
    if (onUpdate) {
      onUpdate(user.id, editData); // Update user data in parent component
    }
    setShowEditModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="image-container">
          <div className="image-icon">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <span className="image-text">
              You are using an outdated API endpoint.
            </span>
          </div>
          <a href="/documentation" className="documentation-link">
            Documentation
          </a>
        </div>
      </div>
      <div className="card-body">
        <h2>{user.name}</h2>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> {user.email}
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> {user.phone}
        </p>
        <p>
          <FontAwesomeIcon icon={faGlobe} />{" "}
          <a href={user.website}>{user.website}</a>
        </p>
      </div>
      <div className="card-footer">
        <button className="heart-button" onClick={handleLikeClick}>
          <FontAwesomeIcon icon={isLiked ? faHeartSolid : faHeartRegular} />
        </button>
        <button className="footer-button" onClick={handleEditClick}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
        <button className="footer-button" onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrashAlt} onClick={handleDeleteClick} />
        </button>
      </div>

      {/* Bootstrap Modal for editing user details */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                name="website"
                value={editData.website}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveClick}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardComponent;
