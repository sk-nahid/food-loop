import React, { Children, use, useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';

const ContextProvidor = ({ children }) => {
    
    
    const authData = {
        
    }

    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default ContextProvidor;