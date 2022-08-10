import Header from '../../Header/Header.js';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Container, Col, Form, Row, FormGroup, Label, Button } from 'reactstrap';
import "../../ConsumerBusiness/ConsumerBusinessControllers/ConsumerBusiness.css";
import { useNavigate } from 'react-router-dom';

const CreateBusinessProperty = () => {

    const consumerId = React.createRef();
    const buildingSqft = React.createRef();
    const buildingType = React.createRef();
    const buildingStoreys = React.createRef();
    const buildingAge = React.createRef();
    const costOfTheAsset = React.createRef();
    const salvageValue = React.createRef();
    const usefulLifeOfTheAsset = React.createRef();
    const formRef = useRef(null);


    const navigate = useNavigate();
    const [getBool, setBool] = useState(false);
    const [getResult, setGetResult] = useState(null);
   

    async function OnSubmitCreateBusinessProperty() {

        if (!formRef.current?.reportValidity()) {
            alert("Wrong or Unfilled Inputs");
            return;
        }
        const postData = {
            ConsumerId: parseInt(consumerId.current.value),
            BuildingSqft: parseInt(buildingSqft.current.value),
            BuildingType: buildingType.current.value,
            BuildingStoreys: parseInt(buildingStoreys.current.value),
            BuildingAge: parseInt(buildingAge.current.value),
            CostOfTheAsset: parseInt(costOfTheAsset.current.value),
            SalvageValue: parseInt(salvageValue.current.value),
            UsefulLifeOfTheAsset: parseInt(usefulLifeOfTheAsset.current.value)
        }

        await fetch("http://13.127.74.103/api/Consumer/CreateBusinessProperty", {
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
                alert("Error Occured.Please Check inputs");
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
            <div style={{ marginTop: '20px' }}>
                <h4>Create Business Property</h4>
                <form ref={formRef}>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="ConsumerId" className="label">Consumer Id</label>
                                <input type="number" className="inputs2" style={{ marginLeft: "108px" }} name="ConsumerId" ref={consumerId} placeholder="Consumer Id"  required />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="BuildingSqft">Building Sqft</label>
                                <input type="number" className="inputs2" name="BuildingSqft" style={{ marginLeft: "100px" }} ref={buildingSqft} placeholder="Building area in Sqft" required />
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                                <div class="dropdown">
                                    <label htmlFor="building_type" className="form-content">Building Type</label>
                                    <select name="BuildingType" id="building" ref={buildingType} required>
                                        <option disabled>Choose Building Type</option>
                                        <option value="Owner" >Owner</option>
                                        <option value="Rental">Rental</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="BuildingStoreys">Building Storeys</label>
                                <input type="number" className="inputs2" style={{ marginLeft: "80px" }} name="BuildingStoreys" ref={buildingStoreys} placeholder="Building Storeys(in terms of floor)" required />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="buildingAge">Building Age</label>
                                <input type="Number" className="inputs2" style={{ marginLeft: "104px" }} name="BuildingAge" ref={buildingAge} placeholder="Building Age(in terms of years)" required />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="CostOfTheAsset">Cost Of The Asset</label>
                                <input type="number" className="inputs2" style={{ marginLeft: "67px" }} name="CostOfTheAsset" ref={costOfTheAsset} placeholder="Cost Of The Asset" required />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="SalvageValue">Salvage Value</label>
                                <input type="number" className="inputs2" name="SalvageValue" style={{ marginLeft: "95px" }} ref={salvageValue} placeholder="Salvage Value" required />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="UsefulLifeOfTheAsset">Useful Life Of The Asset</label>
                                <input type="text" className="inputs2" name="UsefulLifeOfTheAsset" style={{ marginLeft: "25px" }} ref={usefulLifeOfTheAsset} placeholder="Useful Life Of The Asset" required />

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
                                Data SuccessFully Created.
                            </div>
                            <div >
                                <table className="table table table-striped table-dark" style={{width: "10%",marginLeft: "auto", marginRight: "auto" }}>
                                    <thead>
                                        <tr>
                                            <td>Consumer Id</td>
                                            <td>Property Id</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getResult.map(bp =>
                                            <tr>
                                                <td>{bp.ConsumerId}</td>
                                                <td>{bp.PropertyId}</td>
                                            </tr>
                                        )}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    }
                </div>
            </div>
        </>
    );


};
export default CreateBusinessProperty;

