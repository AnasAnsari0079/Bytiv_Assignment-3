import React, { useState } from 'react';
import CardComponent from './CardComponent';
import './CardContainer.css';

const CardContainer = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', website: 'johndoe.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210', website: 'janedoe.com' },
    ]);

    // Handle the deletion of a user by id
    const handleDeleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    };

    // Handle the update of a user's data
    const handleUpdateUser = (id, updatedData) => {
        const updatedUsers = users.map(user => 
            user.id === id ? { ...user, ...updatedData } : user
        );
        setUsers(updatedUsers);
    };

    return (
        <div className="card-container">
            {users.map(user => (
                <CardComponent 
                    key={user.id} 
                    user={user} 
                    onDelete={handleDeleteUser} 
                    onUpdate={handleUpdateUser} 
                />
            ))}
        </div>
    );
};

export default CardContainer;
