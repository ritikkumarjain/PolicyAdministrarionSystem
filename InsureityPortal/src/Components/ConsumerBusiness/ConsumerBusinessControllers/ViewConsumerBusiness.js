import Header from '../../Header/Header.js';
import React, { useState, useRef } from 'react';
import "react-table-6/react-table.css";
import { Col, Form, Row, FormGroup, Button } from 'reactstrap';
import "./ConsumerBusiness.css";
import { useNavigate } from 'react-router-dom';


const ViewConsumerBusiness = () => {

    const consumerBusiness = [];
    const businessId = React.createRef();
    const customerId = React.createRef();
    const [getResult, setGetResult] = useState(null);
    const navigate = useNavigate();
    const [getBool, setBool] = useState(false);
    const formRef = useRef(null);



    async function OnSubmit() {

        if (!formRef.current?.reportValidity()) {
            alert("Wrong or Unfilled Inputs");
            return;
        }
        const BusinessId = businessId.current.value;
        const CustomerId = customerId.current.value;
        await fetch(`http://13.127.74.103/api/Consumer/ViewConsumerBusiness/${CustomerId}/${BusinessId}`)
            .then(response => response.json())
            .then(
                (result) => {
                    setGetResult([result]);
                    setBool(true);
                },
                (error) => {
                    alert("Some Error Occured During Fetching.Data is Incorrect");
                    window.location.reload();
                }
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
                <h4 align="center">View Consumer Business</h4>
                <form ref={formRef}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="BusinessId" className="label">Business Id</label>
                                <input type="number" className="inputs" name="BusinessId" ref={businessId} placeholder="Business Id" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="CustomerId" className="label">Customer Id</label>
                                <input type="number" name="CustomerId" className="inputs2" ref={customerId} placeholder="Consumer Id"  required />
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
                        <table className="table table table-striped" style={{ width: "50%" ,marginLeft: "auto", marginRight: "auto" }}>
                            <thead >
                                <tr>
                                    <th>Business Id</th>
                                    <th>BusinessType</th>
                                    <th>AnnualTurnOver</th>
                                    <th>TotalEmployees</th>
                                    <th>CapitalInvested</th>
                                    <th>ConsumerId</th>
                                    <th>ConsumerName</th>
                                    <th>Email</th>
                                    <th>Pan</th>
                                    <th>BusinessOverview</th>
                                    <th>ValidityofConsumer</th>
                                    <th>AgentId</th>
                                    <th>AgentName</th>

                                </tr>
                            </thead>
                            <tbody>
                                {getResult.map(bp =>
                                    <tr key={bp.businessId}>
                                        <td>{bp.businessId}</td>
                                        <td>{bp.businessType}</td>
                                        <td>{bp.annualTurnOver}</td>
                                        <td>{bp.totalEmployees}</td>
                                        <td>{bp.capitalInvested}</td>
                                        <td>{bp.consumerId}</td>
                                        <td>{bp.consumerName}</td>
                                        <td>{bp.consumerEmail}</td>
                                        <td>{bp.consumerPan}</td>
                                        <td>{bp.businessOverview}</td>
                                        <td>{bp.validityOfConsumer}</td>
                                        <td>{bp.agentId}</td>
                                        <td>{bp.agentName}</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            {/* </div> */}

        </div >
    );

};

export default ViewConsumerBusiness;