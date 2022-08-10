import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';

const ConsumerBusiness = () => {

    return (
        <>
            <Header />
            <div className="business-property-container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card border-warning mb-3">
                            <div className="card-header">Create Consumer Business</div>
                            <div className="card-body text-warning">
                                <Link to="/Home/consumer-business-create" className="btn btn-outline-warning btn-sm">Create</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card border-danger mb-3">
                            <div className="card-header">Update Consumer Business</div>
                            <div className="card-body text-warning">
                                <Link to="/Home/consumer-business-update" className="btn btn-outline-danger btn-sm">Update</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="card border-primary mb-3">
                            <div className="card-header">View Consumer Business</div>
                            <div className="card-body text-warning">
                                <Link to="/Home/consumer-business-view" className="btn btn-outline-primary btn-sm">View</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ConsumerBusiness;