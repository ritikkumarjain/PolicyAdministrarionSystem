import './App.css';
import Home from './Components/Home/Home.js';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/LoginPage/Login.js';
import ConsumerBusiness from './Components/ConsumerBusiness/ConsumerBusiness.js';
import BusinessProperty from './Components/BusinessProperty/BusinessProperty.js';
import CreateBusinessProperty from './Components/BusinessProperty/BusinessControllers/CreateBusinessProperty.js';
import UpdateBusinessProperty from './Components/BusinessProperty/BusinessControllers/UpdateBusinessProperty.js';
import ViewBusinessProperty from './Components/BusinessProperty/BusinessControllers/ViewBusinessProperty.js';
import CreateConsumerBusiness from './Components/ConsumerBusiness/ConsumerBusinessControllers/CreateConsumerBusiness.js';
import UpdateConsumerBusiness from './Components/ConsumerBusiness/ConsumerBusinessControllers/UpdateConsumerBusiness.js';
import ViewConsumerBusiness from './Components/ConsumerBusiness/ConsumerBusinessControllers/ViewConsumerBusiness.js';
import CreatePolicy from "./Components/PolicyMicroservice/CreatePolicy.js";
import IssuePolicy from "./Components/PolicyMicroservice/IssuePolicy.js";
import ViewPolicy from "./Components/PolicyMicroservice/ViewPolicy.js";
import GetQuotes from "./Components/PolicyMicroservice/GetQuotes.js";






function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Home/consumer-business" element={<ConsumerBusiness />} />
                <Route path="/Home/business-property" element={<BusinessProperty />} />
                <Route path="/Home/business-property-create" element={<CreateBusinessProperty />} />
                <Route path="/Home/business-property-update" element={<UpdateBusinessProperty />} />
                <Route path="/Home/business-property-view" element={<ViewBusinessProperty />} />
                <Route path="/Home/consumer-business-create" element={<CreateConsumerBusiness />} />
                <Route path="/Home/consumer-business-update" element={<UpdateConsumerBusiness />} />
                <Route path="/Home/consumer-business-view" element={<ViewConsumerBusiness />} />
                <Route path="/Home/create-policy" element={<CreatePolicy />} />
                <Route path="/Home/issue-policy" element={<IssuePolicy />} />
                <Route path="/Home/view-policy" element={<ViewPolicy />} />
                <Route path="/Home/get-quotes" element={<GetQuotes />} />
            </Routes>
        </div>
    );
}

export default App;
