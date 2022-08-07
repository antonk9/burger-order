import React, { useEffect } from 'react';
import AuthService from 'API/AuthService';
import { useNavigate } from "react-router-dom";
import AdminBoxes from "components/Admin/AdminBoxes";

const Admin = () => {
    const isAdmin = AuthService.getUserRole()?.includes('ADMIN');
    const user = AuthService.getCurrentUser();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user) {
            navigate("/login", {
                state: {
                    redirectPage: '/admin'
                }
            })
        }
    }, [])

    const adminView = () => {
        return (
            <>
                <h3>hello, { user.firstname }!</h3>
                <AdminBoxes />
            </>
        )
            
    }
    
    return (
        <div className="page-auth">
            {!isAdmin && <span>You are not allowed to see this part</span>}
            {isAdmin && adminView()}
        </div>
    );
};

export default Admin;