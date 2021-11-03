import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { adddabHandler } from "../../redux/action/auth-action";
export default function Ajoutdab() {
  const [show, setShow] = useState(false);
  const [affiliation, setaffiliation] = useState("");
  const [nomdab, setnomdab] = useState("");
  const [agence, setagence] = useState("");
  const [etat, setetat] = useState("");
  const [responsable, setresponsable] = useState("");
  const [codebanque, setbanque] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const registerDab = (e) => {
    e.preventDefault()
    const newDab = { affiliation, nomdab, agence, etat,responsable,codebanque };
    dispatch(adddabHandler(newDab));
    setaffiliation("");
    setnomdab("");
    setagence("");
    setetat("");
    setresponsable("");
    setbanque("");
    handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add DAB
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter DAB</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Affiliation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer Le Numero d'affiliation"
                onChange={(e) => setaffiliation(e.target.value)}
              />
              <Form.Label>Nom DAB</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer Le Nom DAB "
                onChange={(e) => setnomdab(e.target.value)}
              />
              <Form.Label>Agence</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer L'Agence"
                onChange={(e) => setagence(e.target.value)}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Etat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer L'Etat"
                onChange={(e) => setetat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Responsable</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer Le Responsable"
                onChange={(e) => setresponsable(e.target.value)}
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

            <Button variant="primary" type="submit" onClick={registerDab}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
