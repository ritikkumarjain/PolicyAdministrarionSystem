import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import conProp from "../../Images/conProp.png";
import viewPolicy from "../../Images/viewpolicy.png";
import issue from "../../Images/issue.png";
import property from "../../Images/property.png";
import createPolicy from "../../Images/opendoorpolicy.png"
import viewQuotes from "../../Images/View.png"


const Services = () => {
    return (
        <div className="services">
            <div className="ml-5 mr-5">
                <h3 className="text-danger text-left">Services</h3>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="card border-warning mb-3">
                            <div className="card-header">Consumer Business</div>
                            <div className="card-body text-warning">
                                <img src={conProp} className="card-img-top imgCard" />
                                <p className="card-text text-warning">Create/ Update/ View Details for Consumer and Business</p>
                                <Link to="/Home/consumer-business" className="btn btn-outline-warning btn-sm">Create/ Update/ View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card border-danger mb-3">
                            <div className="card-header">Business Property</div>
                            <div className="card-body text-warning">
                                <img src={property} className="card-img-top imgCard2" alt="..." />
                                <p className="card-text text-danger">Create/ Update/ View Details about the Business Property</p>
                                <Link to="/Home/business-property" className="btn btn-outline-danger btn-sm">Create/ Update/ View</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card border-primary mb-3">
                            <div className="card-header">Create Policy</div>
                            <div className="card-body text-warning">
                                <img src={createPolicy} className="card-img-top imgCard" alt="..." />
                                <p className="card-text text-primary">Create Policy For Business</p>
                                <Link to="/Home/create-policy" className="btn btn-outline-primary btn-sm">Create Policy</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card border-success mb-3">
                            <div className="card-header">Issue Policy</div>
                            <div className="card-body text-warning">
                                <img src={issue} className="card-img-top imgCard4" alt="..." />
                                <p className="card-text text-success" >Issue Policy for Business</p>
                                <Link to="/Home/issue-policy" className="btn btn-outline-success btn-sm">Issue Policy</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card border-secondary mb-3">
                            <div className="card-header">View Policy</div>
                            <div className="card-body text-warning">
                                <img src={viewPolicy} className="card-img-top imgCard3" />
                                <p className="card-text text-secondary">View Policy for Business</p>
                                <Link to="/Home/view-policy" className="btn btn-outline-secondary btn-sm">View Policy</Link>
                            </div>
                        </div>
                    </div>

                    {/* <div className="col-lg-4 col-md-6">
                        <div className="card border-info mb-3">
                            <div className="card-header">View Quotes</div>
                            <div className="card-body text-warning">
                                <img src={viewQuotes} className="card-img-top imgCard" alt="..." />
                                <p className="card-text text-info">View Quotes for Business</p>
                                <Link to="/Home/get-quotes" className="btn btn-outline-info btn-sm">View Quotes</Link>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>

        </div>
    );
};
export default Services;