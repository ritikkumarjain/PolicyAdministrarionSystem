import Header from '../Header/Header.js';
import React, { useState,useRef } from 'react';
import { Container, Col, FormGroup, Button } from 'reactstrap';
import "../ConsumerBusiness/ConsumerBusinessControllers/ConsumerBusiness.css";
import { useNavigate } from 'react-router-dom';
import "./policy.css";

const CreatePolicy = () => {

    const consumerId = React.createRef();
    const businessId = React.createRef();

    const [getResult, setGetResult] = useState(null);
    const navigate = useNavigate();
    const [getBool, setBool] = useState(false);
    const formRef = useRef(null);


    async function OnSubmitCreatePolicy() {
        // console.log(propertyId.current.value);

        if (!formRef.current?.reportValidity()) {
            alert("Wrong or Unfilled Inputs");
            return;
        }
        const postData = {
            ConsumerId: consumerId.current.value,
            BusinessId: businessId.current.value,
        }

        // console.log(postData)

        await fetch("http://13.232.53.35/api/Policy/createPolicy", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(result => {
                setGetResult(result);
                setBool(true);
                // console.log([result])
            })
            .catch(error => {
                alert("Some Error Occured During Fetching. Looks into the values entered. No quotes available.");
                window.location.reload();            });
    }

    const OnCancel = ()=>{
        navigate("/Home");
    }

    const NotCancel=(e)=>{
        e.preventDefault();
    }


    return (
        <>
            <Header />
            <div style={{ marginTop: '10px' }}>
                <h4>Create Policy</h4>
                <div >
                    <form ref={formRef}> 
                        <table>
                            <tr>
                                <td>
                                <label htmlFor="ConsumerId">Consumer Id</label>
                                    <input type="text" className="inputs2" name="ConsumerId" ref={consumerId} placeholder="Consumer Id" required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <label htmlFor="businessId">Business Id</label>
                                    <input type="text" className="inputs2 cp1" name="BusinessId" ref={businessId} placeholder="Business Id" required />
                                </td>
                            </tr>
                        </table>
                        <Col className="buttons">
                            <FormGroup row>
                                <Col sm={5}>
                                </Col>
                                <Col sm={1}>
                                    <button type="button" onClick={() => OnSubmitCreatePolicy()} className="btn btn-success">Submit</button>
                                </Col>
                                <Col sm={1}>
                                    <Button color="danger" onClick={(e) => window.confirm("Are you sure!?") ? OnCancel(): NotCancel(e)}>Cancel</Button>{' '}
                                </Col>
                                <Col sm={5}>
                                </Col>
                            </FormGroup>
                        </Col>
                    </form>
                </div>
                <div>
                    {getBool &&
                        <div className="alert alert-success">
                            Policy SuccessFully Initiated. 
                            <div className = "alert alert-info">Policy Id is: {getResult}</div>
                        </div>
                    }
                </div>
            </div>
        </>
    );


};
export default CreatePolicy;

