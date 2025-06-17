import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import { toast } from 'react-toastify/unstyled';
import { ToastContainer } from 'react-toastify';



const axiosInstance = axios.create({
        baseURL: 'https://food-loop-server.vercel.app/'
    })

const useAxios = () => {
    const { user,logOut } = useAuth();
    
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `bearer ${user.accessToken}`
        return config
    })

    //
    axiosInstance.interceptors.response.use(res => {
        return res
    }, error => {
        if (error.status === 401 || error.status === 403) {
            logOut()
                .then(() => {
                    console.log('you don t have any access token')
                })
            .catch(error=> console.log(error))
        }
        
        return Promise.reject(error)
    })
    

    
    return axiosInstance
};

export default useAxios;