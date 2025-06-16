import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';



const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000/'
    })

const useAxios = () => {
    const { user } = useAuth();
    
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `bearer ${user.accessToken}`
        return config
    })

    
    return axiosInstance
};

export default useAxios;