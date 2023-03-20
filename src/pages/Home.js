import React, { useState } from 'react'
// import Counter from '../components/Counter'
// import Footer from '../components/Footer'
// import ListingEmployees from '../components/ListingEmployees'
// import Navbar from '../components/Navbar'
// import Result from '../components/Result'
import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';
// import Swal from 'sweetalert2';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import HomeModal from '../components/HomeModal';
//  function Home() {
// const  [counter , setCounter] = useState("0")
// const  [sendName , setSendName] = useState(" ")

// console.log(sendName);

export default function Example() {
    const [textarea, setTextarea] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [file, setfile] = useState("placeholder.png");
    const [color, setcolor] = useState();
    const [dropdown, setDropdown] = useState();
    const [checkbox, setCheckbox] = useState();
    const [radiobutton, setRadiobutton] = useState();
    const [toggle, setToggle] = useState(false);

    
     let fileimg = require("./images/" + file );
   
    // console.log(textarea);
    // console.log(email);
    // console.log(password);
    //  console.log(file);
    // console.log(color);
    // console.log(dropdown);
    // console.log(checkbox);
    // console.log(radiobutton);
    //console.log(toggle);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const saved = () => {
        Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
        })
    }
    // console.log(values);
    return (
        <>
            <Button variant="secondary" onClick={()=>{setShow(true)}}>Show values</Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Form Values</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                     <HomeModal textarea={textarea} email={email} password={password} file={fileimg} color={color} dropdown={dropdown} checkbox={checkbox} radiobutton={radiobutton} toggle={toggle}/>
                     

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saved}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>



            <div className="container" style={{ padding: "30px", background: "#212e52", color: "white", marginTop: "35px" }}>

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            TextArea
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" placeholder="Textarea" rows={3} onChange={(e) => { setTextarea(e.target.value) }} />

                            {/* <Form.Control type="text" value={textarea}  placeholder=" value" /> */}
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            File
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="file" onChange={(e) => {setfile(e.target.files[0].name) }} />
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
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

                                onChange={(e) => { setcolor(e.target.value) }} />
                        </Col>
                    </Form.Group>
                </div>
                <br />


                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3"  >
                        <Form.Label column sm="2">
                            Options
                        </Form.Label>
                        <Col sm="10" >
                            <Form.Select aria-label="Default select example" onChange={(e) => { setDropdown(e.target.value) }}>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>

                    </Form.Group>
                </div>
                <br />


                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Checkbox
                        </Form.Label>
                        <Col sm="10" style={{ width: "10%" }}>
                            <div className="container" style={{ width: "12px" }}>
                                <Row>
                                    <Col style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Check label="1" value="1" onChange={(e) => { setCheckbox(e.target.value) }} />
                                        <Form.Check label="2" value="2" onChange={(e) => { setCheckbox(e.target.value) }} />
                                        <Form.Check label="3" value="3" onChange={(e) => { setCheckbox(e.target.value) }} />
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Radio Button
                        </Form.Label>
                        <Col sm="10" style={{ width: "10%" }}>
                            <div className="container" style={{ width: "12px" }}>
                                <Row >
                                    <Col style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Check label="1" name="r" type="radio"  onChange={() => { setRadiobutton(1) }} />
                                        <Form.Check label="2" name="r" type="radio"  onChange={() => { setRadiobutton(2) }} />
                                        <Form.Check label="3" name="r" type="radio"  onChange={() => { setRadiobutton(3) }} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Switch
                        </Form.Label>
                        <Col sm="10" style={{ width: "12%" }}>
                            <Form.Check

                                type="switch"
                                onChange={(e) => { setToggle(e.target.checked) }}
                            />
                        </Col>
                    </Form.Group>
                </div>
                <br />
               
            </div>

            {/* ///////////////////////////////////// second form ////////////////////// */}

            <div className="container" style={{ padding: "30px", background: "#212e52", color: "white", marginTop: "35px" }}>

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            TextArea
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" disabled placeholder="Textarea" rows={3} value={textarea} />
                            {/* <Form.Control type="text" value={textarea}  placeholder=" value" /> */}
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" disabled placeholder="Email" value={email} />
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" disabled placeholder="Password" value={password} />
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            File
                        </Form.Label>
                        <Col sm="10">
                            {/* <Form.Control type="file" disabled multiple  /> */}
                            <img src= {fileimg} style={{width:"300px"}}/>
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
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
                                value={color}
                                disabled />
                        </Col>
                    </Form.Group>
                </div>
                <br />


                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Options
                        </Form.Label>
                        <Col sm="10">
                            <Form.Select disabled aria-label="Default select example" value={dropdown}>
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>

                    </Form.Group>
                </div>
                <br />


                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Checkbox
                        </Form.Label>
                        <Col sm="10" style={{ width: "10%" }}>
                            <div className="container" style={{ width: "12px" }}>
                                <Row>
                                    <Col style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Check disabled label="1" value="1" checked={checkbox === "1"} />
                                        <Form.Check disabled label="2" value="2" checked={checkbox === "2"} />
                                        <Form.Check disabled label="3" value="3" checked={checkbox === "3"} />
                                    </Col>
                                </Row>

                            </div>
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Radio Button
                        </Form.Label>
                        <Col sm="10" style={{ width: "10%" }}>
                            <div className="container" style={{ width: "12px" }}>
                                <Row>
                                    <Col style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Form.Check label="1" name="radio" type="radio" checked={radiobutton === 1} disabled />
                                        <Form.Check label="2" name="radio" type="radio" checked={radiobutton === 2} disabled />
                                        <Form.Check label="3" name="radio" type="radio" checked={radiobutton === 3} disabled />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Form.Group>
                </div>
                <br />

                <div style={{ background: "#212e52", color: "white" }}>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">
                            Switch
                        </Form.Label>
                        <Col sm="10" style={{ width: "12%" }}>
                            <Form.Check

                                type="switch"
                                checked={toggle}
                                disabled
                            />
                        </Col>
                    </Form.Group>
                </div>
                <br />

            </div>

        </>
    );

}

    // <div style={{border:"2px solid Black"}}>
    //   {/* <Navbar counter={counter} sendName={sendName}/>
    //   <Counter counter={counter} setCounter={setCounter} setSendName={setSendName}/>
    //   <Result/>
    //   <ListingEmployees/> */}

    //     <h2>This is a home page</h2>

    // </div>

