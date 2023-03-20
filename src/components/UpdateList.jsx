import { React, useState, useEffect } from 'react';
import url from "../config/axios";
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
// import Lists from './Lists';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const UpdateList = (props) => {    
    const [updatedMsg, setUpdatedMsg] = useState([]);
    console.log(updatedMsg);
    

    useEffect(() => {
        getMessge();

    }, []);

    const getMessge = () => {
        // console.log(props.id);
        url.get(`/viewMessage/${props.update}`).then(async (res) => {
              console.log(res);

            setUpdatedMsg(res.data)

        })
            .catch((e) => { console.log(e); })
    }

    const handleClose = () => props.SetShowUpdate(false);
    const updated = () => {
        Swal.fire({
            icon: 'success',
            title: 'successfully Updated!',
        })
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Modal show={props.showUpdate} onHide={handleClose} animation={false}>
                <Modal.Body >
                    <Form.Group as={Row} className="mb-3" >
                            <Form.Label column sm="2">
                                List:
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control
                                // aria-label="List"
                                aria-describedby="basic-addon2" defaultValue={updatedMsg[0]?.message} onChange={(e) => { props.setNewMsg(e.target.value) }}
                            />
                            {/* <Form.Control as="text" rows={3} defaultValue={updatedMsg[0]?.message} onChange={(e) => { setNewMsg(e.target.value) }} /> */}
                            {/* value={props.updateMsg(props.id)} */}
                        </Col>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        props.updateMsg(props.id)
                        updated()
                    }}>
                        Update Changes
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}
export default UpdateList;