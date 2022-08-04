import React from 'react';
import AuthService from "API/AuthService";

const AdminNav = () => {
    const isAdmin = AuthService.getUserRole().includes('ADMIN');
    const adminNav = [
        {
            title: 'Users',
            _id: 1
        }, {
            title: 'Products',
            _id: 2
        }, {
            title: 'Orders',
            _id: 3
        }

    ]

    return (
        <div>
            {
                adminNav.map(item =>
                    <div key={item._id}>{item.title}</div>)
            }
        </div>
    );
};

export default AdminNav;