import Header from '../Header/Header.js';
import React, { useState, useRef } from 'react';
import { Col, FormGroup, Button } from 'reactstrap';
import "./policy.css";
import { useNavigate } from 'react-router-dom';

const IssuePolicy = () => {

    const consumerId = React.createRef();
    const businessId = React.createRef();
    const policyId = React.createRef();
    const paymentDetails = React.createRef();
    const acceptanceStatus = React.createRef();

    const [getResult, setGetResult] = useState(null);
    const navigate = useNavigate();
    const formRef = useRef(null);





    async function OnSubmitIssuePolicy() {

        if (!formRef.current?.reportValidity()) {
            alert("Wrong Inputs");
            return;
        }
        const postData = {
            ConsumerId: consumerId.current.value,
            BusinessId: businessId.current.value,
            PolicyId: policyId.current.value,
            PaymentDetails: paymentDetails.current.value,
            AcceptanceStatus: acceptanceStatus.current.value

        }


        await fetch("http://13.232.53.35/api/Policy/issuePolicy", {
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
            })
            .catch(error => {
                alert("Some Error Occured During Fetching");
                window.location.reload();
            });
    }
    const OnCancel = () => {
        navigate("/Home");
    }

    const NotCancel = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <Header />
            <div style={{marginTop:"20px"}}>
                <h4>Issue Policy</h4>
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
                        <tr>
                            <td>
                                <label htmlFor="policyId">Policy Id</label>
                                <input type="text" className="inputs2 ip1" name="policyId" ref={policyId} placeholder="Policy Id" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="paymentDetails">Payment Details</label>
                                <input type="text" className="inputs2 ip2 " name="paymentDetails" ref={paymentDetails} placeholder="Payment Details whether Success or Not" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="acceptanceStatus">Acceptance Status</label>
                                <input type="text" className="inputs2 ip3" name="acceptanceStatus" ref={acceptanceStatus} placeholder="Acceptance Status whether Accepted or Not" required />
                            </td>
                        </tr>
                    </table>
                    <Col className="buttons">
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={() => OnSubmitIssuePolicy()} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger" onClick={(e) => window.confirm("Are you sure!?") ? OnCancel() : NotCancel(e)}>Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </form>
                <div>
                    {getResult &&
                        <div className="alert alert-success">
                            Policy is Issued
                        </div>
                    }
                </div>
            </div>
        </>
    );


};
export default IssuePolicy;

