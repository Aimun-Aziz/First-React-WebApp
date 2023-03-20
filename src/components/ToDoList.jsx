import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Lists from './Lists';
import url from "../config/axios";

export default function ToDoList() {
    const [inputList, setInputList] = useState(" ");
    // const [list, setList] = useState([]);
    const [msg, setMsg] = useState([]);
    console.log(msg);
    

    useEffect(() => {
        getMessge();

    }, []);

    const getMessge = () => {
        url.get(`/viewMessage`).then(async (res) => {
            setMsg(res.data)

        })
            .catch((e) => { console.log(e); })
    }

    const createList = () => {
        let body = {
            message: inputList
        }
        url.post(`/writeMessage`, body).then(async (res) => {
            getMessge();
            setInputList(" ");

        })
            .catch((e) => { console.log(e); })
    }

    // const noOfList = () => {
    //     setList((abc) => {
    //         return [...abc, inputList];
    //     })
    //     setInputList(" ");
    // }

    const deleteMsg = (id) => {
        console.log(id);
        url.delete(`/removeMessage/${id}`).then(async (res) => {
            getMessge();
        })
            .catch((e) => { console.log(e); })
        // setList((abc)=>{
        //     return abc.filter((arrElement, i) =>{
        //         return i !== id;
        //     })
        // })

    };

    const updateMsg = (id) => {
        url.put(`/updateMessage/${id}`).then(async (res) => {
            getMessge();
        })
        .catch ((e) => { console.log(e); })
    }

return (
    <div style={{ background: "#0F52BA", height: "800px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className='container' style={{ background: "white", height: "700px", overflow: "auto", fontWeight: "500", borderRadius: "5px", width: "50%" }}> <br />

            <div className="container" style={{ width: "400px", display: "flex" }} >
                <InputGroup className='mb4' style={{ border: "2px solid #4682B4", borderRadius: "5px" }} >
                    <Form.Control
                        value={inputList}
                        onChange={(e) => { setInputList(e.target.value) }}
                    />
                </InputGroup>
                <div style={{ display: "flex", justifyContent: "right", marginLeft: "30px" }}>
                    <Button variant="primary" onClick={() => { createList() }}>Add</Button>

                </div>
            </div>

            <div className="container" style={{ width: "400px", borderRadius: "5px", marginTop: "30px" }}>
                {msg.map((e, i) => {

                    return (
                        <Lists key={i} id={e.id} text={e.message} deleteMsg={deleteMsg} getMessge={getMessge}
                        />
                    )

                })}
            </div>

        </div>
    </div>
)
}
