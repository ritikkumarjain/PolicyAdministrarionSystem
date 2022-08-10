import Header from '../../Header/Header.js';
import React, { useState, useRef } from 'react';
import { Container, Col, FormGroup, Button } from 'reactstrap';
import "./ConsumerBusiness.css";
import { useNavigate } from 'react-router-dom';



const UpdateConsumerBusiness = () => {

    const consumerName = React.createRef();
    const email = React.createRef();
    const pan = React.createRef();
    const businessOverview = React.createRef();
    const validityofConsumer = React.createRef();
    const agentId = React.createRef();
    const agentName = React.createRef();
    const businessType = React.createRef();
    const totalEmployees = React.createRef();
    const annualTurnOver = React.createRef();
    const capitalInvested = React.createRef();

    const navigate = useNavigate();
    const [getBool, setBool] = useState(false);
    const [getResult, setGetResult] = useState(null);
    const formRef = useRef(null);



    async function OnSubmitCreateBusinessProperty() {

        if (!formRef.current?.reportValidity()) {
            alert("Wrong Inputs");
            return;
        }
        const postData = {
            ConsumerName: consumerName.current.value,
            ConsumerEmail: email.current.value,
            ConsumerPan: pan.current.value,
            BusinessOverview: businessOverview.current.value,
            ValidityOfConsumer: parseInt(validityofConsumer.current.value),
            AgentId: parseInt(agentId.current.value),
            AgentName: agentName.current.value,
            BusinessType: businessType.current.value,
            AnnualTurnOver: parseInt(annualTurnOver.current.value),
            TotalEmployees: parseInt(totalEmployees.current.value),
            CapitalInvested: parseInt(capitalInvested.current.value)
        }



        await fetch("http://13.127.74.103/api/Consumer/CreateConsumerBusiness", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(data => {
                setGetResult([JSON.parse(data)]);
                setBool(true);

            })
            .catch(error => {
                alert("Error Occured.Data is Incorrect");
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
        <div>
            <Header />
            <div style={{ marginTop: '20px' }}>
                <h4>Create Consumer Business</h4>
                <form ref={formRef}>
                    <table>
                        {/* <tr>
                            <td>
                                <label htmlFor="consumerId" >Consumer Id</label>
                                <input type="text" name="consumerId" className="inputs" style={{ marginLeft: "60px" }} ref={consumerId} placeholder="Consumer Id"  required />
                            </td>
                        </tr> */}
                        <tr>
                            <td>
                                <label htmlFor="consumerName" >Consumer Name</label>
                                <input type="text" name="consumerName" className="inputs" style={{ marginLeft: "30px" }} ref={consumerName} placeholder="Consumer Name" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email" >Email</label>
                                <input type="text" name="email" className="inputs" style={{ marginLeft: "110px" }} ref={email} placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pan" >Pan</label>
                                <input type="text" name="pan" className="inputs" style={{ marginLeft: "122px" }} ref={pan} placeholder="Pan" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="businessOverview" >Business Overview</label>
                                <input type="text" name="businessOverview" className="inputs" style={{ marginLeft: "18px" }} ref={businessOverview} placeholder="Business Overview" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="validityofConsumer" >Validity of Consumer</label>
                                <input type="number" name="validityofConsumer" className="inputs" style={{ marginLeft: "5px" }} ref={validityofConsumer} placeholder="Validity of Consumer" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="agentId" >Agent Id</label>
                                <input type="number" name="agentId" className="inputs" style={{ marginLeft: "90px" }} ref={agentId} placeholder="Agent Id" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="agentName" >Agent Name</label>
                                <input type="text" name="agentName" className="inputs" style={{ marginLeft: "60px" }} ref={agentName} placeholder="Agent Name" required />
                            </td>
                        </tr>
                        {/* <tr>
                            <td>
                                <label htmlFor="businessId" >Business Id</label>
                                <input type="text" name="businessId" className="inputs" style={{ marginLeft: "70px" }} ref={businessId} placeholder="Business Id" required />
                            </td>
                        </tr> */}
                        <tr>
                            <td>
                                <div class="dropdown">
                                    <label htmlFor="businessType" className="form-content">Business Type</label>
                                    <select name="BusinessType" id="business" ref={businessType} required>
                                        <option disabled value="Choose Business Type">Choose Business Type</option>
                                        <option value="Replacement">Replacement</option>
                                        <option value="PayBack">PayBack</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="annualTurnOver" >Annual TurnOver</label>
                                <input type="number" name="annualTurnOver" className="inputs" style={{ marginLeft: "28px" }} ref={annualTurnOver} placeholder="Annual TurnOver" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="totalEmployees" >Total Employees</label>
                                <input type="number" name="totalEmployees" className="inputs" style={{ marginLeft: "35px" }} ref={totalEmployees} placeholder="Total Employees" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="capitalInvested" >Capital Invested</label>

                                <input type="number" name="capitalInvested" style={{ marginLeft: "37px" }} className="inputs" ref={capitalInvested} placeholder="Capital Invested" required />
                            </td>
                        </tr>
                    </table>
                    <Col className="buttons">
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={() => OnSubmitCreateBusinessProperty()} className="btn btn-success">Submit</button>
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
                    {getBool &&
                        <div >
                            <div className="alert alert-success">
                                Data SuccessFully Updated.
                            </div>
                            <div >
                                <table className="table table table-striped table-dark" style={{width:"10%", marginLeft: "auto" , marginRight: "auto"}}>
                                    <thead>
                                        <tr>
                                            <td>Consumer Id</td>
                                            <td>Business Id</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getResult.map(bp =>
                                            <tr>
                                                <td>{bp.ConsumerId}</td>
                                                <td>{bp.BusinessId}</td>
                                            </tr>

                                        )}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div>
    );


};
export default UpdateConsumerBusiness;

