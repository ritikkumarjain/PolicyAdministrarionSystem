import Header from '../Header/Header.js';
import React, { useState, useRef } from 'react';
import "react-table-6/react-table.css";
import { Col, Form, Row, FormGroup, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';


const ViewBusinessProperty = () => {

    const businessProperty = [];
    const policyId = React.createRef();
    const consumerId = React.createRef();
    const businessId = React.createRef();

    const [getResult, setGetResult] = useState(null);
    const navigate = useNavigate();
    const [getBool, setBool] = useState(false);
    const formRef = useRef(null);


    async function OnSubmit() {

        if (!formRef.current?.reportValidity()) {
            alert("Wrong or Unfilled Inputs");
            return;
        }
        const PolicyId = policyId.current.value;
        const ConsumerId = consumerId.current.value;
        const BusinessId = businessId.current.value;


        await fetch(`http://13.232.53.35/api/Policy/viewPolicy/${ConsumerId}/${BusinessId}/${PolicyId}`)
            .then(response => response.json())
            .then(
                (result) => {
                    setGetResult([result]);
                    setBool(true);

                },
                (error) => {
                    alert("Some Error Occured During Fetching");
                    window.location.reload();                }
            )
    };
    const OnCancel = () => {
        navigate("/Home");
    }

    const NotCancel = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <Header />
            <div style={{ marginTop: '20px' }}>
                <h4 align="center">View Policy</h4>
                <form ref={formRef}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="PolicyId">Policy Id</label>
                                <input type="text" className="inputs2 vp1" name="PolicyId" ref={policyId} placeholder="Policy Id"  required />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="ConsumerId">Consumer Id</label>
                                <input type="text" className="inputs2" name="ConsumerId" ref={consumerId} placeholder="Consumer Id" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="BusinessId">Business Id</label>
                                <input type="text" className="inputs2 cp1" name="BusinessId" ref={businessId} placeholder="Business Id"  required />
                            </td>
                        </tr>
                    </table>
                    <Col className="buttons">
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={() => OnSubmit()} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <button type="button" className="btn btn-danger" onClick={(e) => window.confirm("Are you sure!?") ? OnCancel() : NotCancel(e)}>Cancel</button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </form>
            </div>
            <div>
                {getBool &&
                    <div>
                        <table className="table table table-striped" style={{ "width": "50%", marginLeft: 350 }}>
                            <thead >
                                <tr>
                                    <th>Consumer Id</th>
                                    <th>Policy Id</th>
                                    <th>Business Id</th>
                                    <th>Consumer Name</th>
                                    <th>Agent Id</th>
                                    <th>Agent Name</th>
                                    <th>Acceptance Status</th>
                                    <th>Accepted Quotes</th>
                                    <th>Effective Date</th>
                                    <th>Payment Details</th>
                                    <th>Policy Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getResult.map(bp =>
                                    <tr key={bp.consumerId}>
                                        <td>{bp.consumerId}</td>
                                        <td>{bp.policyId}</td>
                                        <td>{bp.businessId}</td>
                                        <td>{bp.consumerName}</td>
                                        <td>{bp.agentId}</td>
                                        <td>{bp.agentName}</td>
                                        <td>{bp.acceptanceStatus}</td>
                                        <td>{bp.acceptedQuotes}</td>
                                        <td>{bp.effectiveDate}</td>
                                        <td>{bp.paymentDetails}</td>
                                        <td>{bp.policyStatus}</td>

                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                } 
            </div>
        </div >
    );

};

export default ViewBusinessProperty;