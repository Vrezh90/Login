import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Dashboard from "./Dashboard/dashboard";
import Login from "./Login/login";
import React from 'react';


const App = () => {

    return (
        <Router>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/dashboard'} element={<Dashboard/>}/>

                <Route path="*" element={<Navigate to={'/login'}/>}/>

            </Routes>
        </Router>
    );
};

export default App;
