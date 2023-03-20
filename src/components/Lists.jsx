import { React, useState, useEffect } from 'react'
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
// import InputGroup from 'react-bootstrap/InputGroup';
import UpdateList from './UpdateList';
import url from "../config/axios";
import Swal from 'sweetalert2';

const Lists = (props) => {
    const [showUpdate, SetShowUpdate] = useState(false);

    const [newMsg, setNewMsg] = useState();
    console.log(newMsg);

    const updateMsg = () => {
        let body = {
            message: newMsg
        }
        url.put(`/updateMessage/${props.id}`, body).then(async (res) => {
            console.log(res);
            // getMessge();
            props.getMessge()
        })
            .catch((e) => { console.log(e); })
    }

    const confirm = () => {
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                props.deleteMsg(props.id)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }

        })
    }

    return (
        <>
            <div style={{ display: "flex", background: "#ADD8E6", marginBottom: "20px", width: "100%", height: "40px", alignItems: "center" }}>
                <Row style={{ width: "100%", display: "flex" }}>

                    {/* ////////////Text in list///////// */}

                    <Col className='col-md-8'>
                        <div>
                            {props.text}
                        </div>
                    </Col>

                    {/* ////////////Delete///////// */}

                    <Col className='col-md-2' style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div style={{ background: "#000080", cursor: "pointer", color: "white", width: "40px", height: "25px", borderRadius: "4px" }}>

                            <i class="fa-solid fa-trash-can"
                                onClick={() => { confirm() }}>
                            </i>

                        </div>
                    </Col>

                    {/* /////////////update//////// */}
                    <Col className='col-md-2' style={{ display: "flex", justifyContent: "flex-end" }}>
                        <div style={{ background: "#000080", cursor: "pointer", color: "white", width: "40px", height: "25px", borderRadius: "4px" }}>
                            <i class="fa-sharp fa-solid fa-pencil" onClick={() => { SetShowUpdate(true) }}></i>
                            {
                                showUpdate ? <UpdateList showUpdate={showUpdate} SetShowUpdate={SetShowUpdate} update={(props.id)} setNewMsg={setNewMsg} updateMsg={updateMsg} /> : null
                            }

                        </div>

                    </Col>

                </Row>

            </div>


        </>
    )
}
export default Lists;