
import Button from 'react-bootstrap/Button';
import { useState ,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Message() {

    const [count, setCount] = useState('1');
    console.log(count);
    const [msg, setMsg] = useState('');
    const [showMsg, setShowMsg] = useState([]);

    let arr = [];
    console.log(arr);
    const msg_task = () => {
        for (let i = 1; i <= count; i++) {
            
            console.log("same")
            //setDisplay(true)
            arr.push(msg);

        }
        setShowMsg(arr)

    }


    useEffect(() => {
        msg_task();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
    return (
        <div>
            <div className="container">
                <InputGroup className='mb4'>
                    <Form.Control
                        placeholder="Quantity"
                        type="number"
                        onChange={(e) => { setCount(e.target.value) }}
                    />
                </InputGroup>

            </div>

            <div className="container" style={{ height: "100%", marginTop: "30px" }}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Write a Message"
                        onChange={(e) => { setMsg(e.target.value) }}
                    />
                    <Button variant="secondary" onClick={() => { msg_task()}}>Send Message</Button>
                    <Button variant='danger' onClick={(e)=>{setShowMsg([])}}>Clear</Button>
                </InputGroup>
            </div>

            <div className="container" style={{ background: "#212e52", color: "white", height: "100%", marginTop: "23px" }}>

                {
                    showMsg.length !== 0 ?
                        showMsg.map((e) => {
                            return <h5>
                                {e}
                            </h5>
                        })
                        : null
                        
                }
            </div>
        </div>
    )
}
