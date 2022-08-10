import Header from '../../Header/Header.js';
import React, { useState,useRef } from 'react';
import "react-table-6/react-table.css";
import { Col,  FormGroup } from 'reactstrap';
import "../../ConsumerBusiness/ConsumerBusinessControllers/ConsumerBusiness.css";
import { useNavigate } from 'react-router-dom';


const ViewBusinessProperty = () => {

    const propertyId = React.createRef();
    const customerId = React.createRef();
    const [getResult, setGetResult] = useState(null);
    const navigate = useNavigate();
    const [getBool,setBool] = useState(false);
    const formRef = useRef(null);


    async function OnSubmit() {

        if (!formRef.current?.reportValidity()) {
            alert("Wrong or Unfilled  Inputs");
            return;
        }
        const PropertyId = propertyId.current.value;
        const CustomerId = customerId.current.value;
        await fetch(`http://13.127.74.103/api/Consumer/viewConsumerProperty/${CustomerId}/${PropertyId}`)
            .then(response => response.json())
            .then(
                (result) => {
                    
                    setGetResult([result]);
                    setBool(true);
                },
                (error) => {
                    alert("Some Error Occured During Fetching.Data Given is Incorrect");
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
            <div style={{marginTop: '20px'}}>
                <h4 align="center">View Business Property</h4>
                <form ref={formRef}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="PropertyId" className="label">Property Id</label>
                                <input type="number" className="inputs2" name="PropertyId" ref={propertyId} placeholder="Property Id" required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="CustomerId">CustomerId</label>
                                <input type="number" className="inputs2" name="CustomerId" ref={customerId} placeholder="Consumer Id"  required />
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
            {   getBool &&
                    <div>
                        <table className="table table table-striped" style={{ "width": "50%", marginLeft: 250 }}>
                            <thead >
                                <tr>
                                    <th>Consumer Id</th>
                                    <th>Property Id</th>
                                    <th>BuildingSqft</th>
                                    <th>Building Type</th>
                                    <th>Building Storeys</th>
                                    <th>Building Age</th>
                                    <th>CostOfThe Asset</th>
                                    <th>SalvageValue</th>
                                    <th>UsefulLifeOfTheAsset</th>
                                    <th>PropertyValue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getResult.map(bp =>
                                    <tr key={bp.propertyId}>
                                        <td>{bp.consumerId}</td>
                                        <td>{bp.propertyId}</td>
                                        <td>{bp.buildingSqft}</td>
                                        <td>{bp.buildingType}</td>
                                        <td>{bp.buildingStoreys}</td>
                                        <td>{bp.buildingAge}</td>
                                        <td>{bp.costOfTheAsset}</td>
                                        <td>{bp.salvageValue}</td>
                                        <td>{bp.usefulLifeOfTheAsset}</td>
                                        <td>{bp.propertyValue}</td>
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