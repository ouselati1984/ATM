import React from "react";
import { Modal, Button, Form,ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerHandler } from "../../redux/action/auth-action";

export default function Example() {
  const [show, setShow] = useState(false);
  const [nom, setname] = useState("");
  const [prenom, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [idrole, setrole] = useState("");
  const [codebanque, setbanque] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault()
    const newUser = { nom, prenom, email, password,idrole,codebanque };
    dispatch(registerHandler(newUser));
    setname("");
    setlastName("");
    setemail("");
    setpassword("");
    setrole("");
    setbanque("");
    handleClose();
  };
  return (
    <>
      <text  onClick={handleShow}>
      Add User
      </text>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header variant="primary" closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer Le Nom"
                onChange={(e) => setname(e.target.value)}
                
              />
              <Form.Label>Prenom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer Le Prenom "
                onChange={(e) => setlastName(e.target.value)}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entrer L'Email"
                onChange={(e) => setemail(e.target.value)}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de Passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Entrer Le Mot de Passe"
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer Le Role"
                onChange={(e) => setrole(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Code Banque</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer Le Code Banque"
                onChange={(e) => setbanque(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={registerUser}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
