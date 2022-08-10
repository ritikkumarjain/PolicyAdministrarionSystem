import Header from '../Header/Header.js';
import React, { useState, useRef } from 'react';
import "react-table-6/react-table.css";
import { Col, Form, Row, FormGroup, Button } from 'reactstrap';
import "./policy.css";
import { useNavigate } from 'react-router-dom';


const GetQuotes = () => {

    const propertyValue = React.createRef();
    const businessValue = React.createRef();
    const propertyType = React.createRef();

    const [getResult, setGetResult] = useState(null);
    const navigate = useNavigate();
    const [getBool, setBool] = useState(false);
    const formRef = useRef(null);



    async function OnSubmit() {

        if (!formRef.current?.reportValidity()) {
            alert("Wrong Inputs");
            return;
        }
        const PropertyValue = propertyValue.current.value;
        const BusinessValue = businessValue.current.value;
        const PropertyType = propertyType.current.value;



        await fetch(`http://13.232.53.35/getQuotes/${PropertyValue}/${BusinessValue}/${PropertyType}`)
            .then(response => response.json())
            .then(
                (result) => {
                    setGetResult([result]);
                    setBool(true);


                },
                (error) => {
                    alert("Some Error Occured During Fetching");
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
        <div >
            <Header />
            <div style={{marginTop: '20px'}}>
                <h4 align="center">Get Quotes</h4>
                <form ref={formRef}>
                    <table>
                        <tr>
                            <td>
                            <label htmlFor="PropertyValue">Property Value</label>
                                <input type="number" className="inputs2" name="PropertyValue" ref={propertyValue} placeholder="Property Value" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="BusinessValue">Business Value</label>
                                <input type="number" className="inputs2" name="BusinessValue" ref={businessValue} placeholder="Business Value" required />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="dropdown">
                                    <label htmlFor="PropertyType" className="form-content">Property Type</label>
                                    <select name="PropertyType" className="inputs2 gq1" id="PropertyType" ref={propertyType} required>
                                    <option disabled value="Choose Property Type">Choose Property Type</option>
                                    <option value="Building">Building</option>
                                    <option value="Factory Equipment">FactoryEquipment</option>
                                    <option value="Property in Transit">PropertyInTransit</option>
                                </select>
                            </div>
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
                    <div className="alert alert-success">
                        Quotes is: {getResult}
                    </div>
                }
            </div>
        </div >
    );
};

export default GetQuotes;