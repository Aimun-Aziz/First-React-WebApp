import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Counter(props) {
    //console.log(props.counter);
    const [counter, setCounter] = useState("0")
    const [name, setName] = useState("")
    console.log(name);
    return (
        <div style={{ height: "200px", background: "#212e52", color: "white", border: "2px solid Black" }}>
            counter
            <div>
                <Button variant="primary" onClick={() => { setCounter(parseInt(counter + 1)) }}>+</Button>{' '}
                <span>{counter}</span>
                <Button variant="danger" onClick={() => { setCounter(counter - 1) }}>-</Button>{' '}
            </div>

            <div style={{ marginTop: "30px" }}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => { setName(e.target.value) }}

                    />
                    <Button variant="primary" id="button-addon2" onClick={() => { props.setSendName(name) }}>
                        Button
                    </Button>
                </InputGroup>
            </div>
        </div>
    )
}
