import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'


export default function Result() {
    const [result, setResult] = useState()
    console.log(result);
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState() 

    const minus = () =>{
        if(num1 > num2){
            setResult(parseInt(num1)-parseInt(num2))
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops check numbers again...',
                text: 'First number should be greater!',
              })
            setResult(0)
        }
    }

    const divide = ()=>{
        if(parseInt(num1)/parseInt(num2) === Infinity ){
            Swal.fire({
                icon: 'error',
                title: 'Oops check numbers again...',
                text: 'Not divisible by Zero',
              })
            setResult(0)
        }
        else {
        setResult(parseInt(num1)/parseInt(num2))
        }
    }

    return (
        <div style={{ margin: "20px 20px 20px 20px", height: "300px", background: "#212e52", color: "white", fontSize: "24px", fontWeight: "500px", display: "flex", justifyContent: "center", flexDirection:"column", alignItems:"center",border:"2px solid Black"}}>
            <div style={{ width: "50%", background:"white", color:"black"}}>
                <span>
                    Result= {result}
                </span>
            </div>
            <br />
            <div style={{ width: "50%" }}>
                <Row>
                    <Col>
                        <Form.Control size="sm" type="number" placeholder="Num1" 
                         onChange={(e)=>{setNum1(e.target.value)}}/>
                       
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Form.Control size="sm" type="number" placeholder="Num2" 
                        onChange={(e)=>{setNum2(e.target.value)}}/>
                        
                    </Col>
                </Row>
            </div>
            <br />
            <div style={{width:"10%", display:"flex", justifyContent:"space-between"}}>
            <Button variant="success" onClick={()=>{setResult(parseInt(num1) + parseInt(num2))}}>+</Button>
            <Button variant="success" onClick={()=>{minus()}}> - </Button>
            <Button variant="success" onClick={()=>{setResult(parseInt(num1) * parseInt(num2))}}>*</Button>
            <Button variant="success" onClick={()=>{divide()}}> / </Button>

            </div>

        </div>
    )
}
