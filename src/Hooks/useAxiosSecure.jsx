import axios from 'axios'
import useAuth from './useAuth';
import {useNavigate} from 'react-router-dom'

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {signOutUser} = useAuth()

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`

        return config
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
      });

      // intercepts 401 and 403 status
      axiosSecure.interceptors.response.use((response) => {
        return response;
      }, async(error) => {
        const status = error.response.status;
        if(status === 401 || status === 403){
            await signOutUser();
            navigate('/login')
        }
        return Promise.reject(error);
      })
    return axiosSecure;
};

export default useAxiosSecure;