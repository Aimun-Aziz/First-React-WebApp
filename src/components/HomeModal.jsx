import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomeModal(props) {
    

    return (
        <div className="container" style={{ padding: "30px", background: "#212e52", color: "white" }}>
            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        TextArea
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" disabled placeholder="Textarea" rows={3} value={props.textarea} />
                    </Col>
                </Form.Group>
            </div>
            <br />

            <div >
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" disabled placeholder="Email" value={props.email} />
                    </Col>
                </Form.Group>
            </div>
            <br />


            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" disabled placeholder="Password" value={props.password} />
                    </Col>
                </Form.Group>
            </div>
            <br />

            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        File
                    </Form.Label>
                    <Col sm="10">
                        {/* <Form.Control type="file" disabled multiple  /> */}
                        <img src={props.file} style={{ width: "300px" }} />
                    </Col>
                </Form.Group>
            </div>
            <br />

            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Color Picker
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="color"
                            id="exampleColorInput"
                            defaultValue="#563d7c"
                            title="Choose your color"
                            value={props.color}
                            disabled />
                    </Col>
                </Form.Group>
            </div>
            <br />


            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Options
                    </Form.Label>
                    <Col sm="10">
                        <Form.Select disabled aria-label="Default select example" value={props.dropdown}>
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>

                </Form.Group>
            </div>
            <br />


            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Checkbox
                    </Form.Label>
                    <Col sm="10" style={{ width: "10%" }}>
                        <div className="container" style={{ width: "12px" }}>
                            <Row>
                                <Col style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Form.Check disabled label="1" value="1" checked={props.checkbox === "1"} />
                                    <Form.Check disabled label="2" value="2" checked={props.checkbox === "2"} />
                                    <Form.Check disabled label="3" value="3" checked={props.checkbox === "3"} />
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Form.Group>
            </div>
            <br />

            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Radio Button
                    </Form.Label>
                    <Col sm="10" style={{ width: "10%" }}>
                        <div className="container" style={{ width: "12px" }}>
                            <Row>
                                <Col style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Form.Check label="1" name="r" type="radio" checked={props.radiobutton === 1} disabled />
                                    <Form.Check label="2" name="r" type="radio" checked={props.radiobutton === 2} disabled />
                                    <Form.Check label="3" name="r" type="radio" checked={props.radiobutton === 3} disabled />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Form.Group>
            </div>
            <br />

            <div>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">
                        Switch
                    </Form.Label>
                    <Col sm="10" style={{ width: "12%" }}>
                        <Form.Check

                            type="switch"
                            checked={props.toggle}
                            disabled
                        />
                    </Col>
                </Form.Group>
            </div>
            <br />
        </div>
    )
}
