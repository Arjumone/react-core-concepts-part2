import React from 'react';

const User = ({user}) => {
    const {email,name,phone,company}=user
    return (
        <div className='card'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{company.name}</p>
        </div>
    );
};

export default User;