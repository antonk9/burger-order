import React, { useEffect } from 'react';
import AuthService from 'API/AuthService';
import { useNavigate } from "react-router-dom";
import AdminNav from "components/Admin/AdminNav";

const Admin = () => {
    const isUserLoggedIn = AuthService.getCurrentUser();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!isUserLoggedIn) {
            navigate("/login", {
                state: {
                    redirectPage: '/admin'
                }
            })
        }
    }, [])
    
    return (
        <div className="page-auth">
           <AdminNav />
        </div>
    );
};

export default Admin;