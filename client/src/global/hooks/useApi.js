import { useState } from 'react';
import axios from 'axios';

const useApi = () => {
    const baseUrl =
        process.env.NODE_ENV === 'production' ?
            '' : 'http://localhost:8001';

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const fetchData = async (endpoint, method, postData) => {
        try {
            let headers = {
                'Content-Type': 'application/json',
            };
            if (endpoint === '/api/blogs' || endpoint === '/api/users/login' || endpoint === '/api/blogs/userBlogs') {
                const token = localStorage.getItem("token");
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }
            }

            const url = `${baseUrl}${endpoint}`;
            setLoading(true);
            let response;

            if (method === 'post') {
                response = await axios.post(url, postData, { headers });
            } else if (method === 'get') {
                response = await axios.get(url, { headers });
            } else if (method === 'patch') {
                response = await axios.patch(url, postData, { headers });
            } else if (method === 'delete') {
                response = await axios.delete(url, { headers });
            }

            if (response.status >= 400) {
                throw new Error(`not found ${response.status} !`);
            }

            if (response !== null) {
                setData(response.data);
                setLoading(false);
            }

            if (response.status === 404) {
                console.log(response);
            }
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }
        } catch (error) {
            console.error('Error in API request:', error);
            setErrorMsg(error.message);
            setLoading(true);
        } finally {
            setLoading(false);
        }
    };

    const postData = async (endpoint, postData) => {
        setLoading(true);
        setErrorMsg(null);
        fetchData(endpoint, 'post', postData);
    };
    const getData = async (endpoint) => {
        setLoading(true);
        setErrorMsg(null);
        fetchData(endpoint, 'get');
    };
    const updateData = async (endpoint, updatedData) => {
        setLoading(true);
        setErrorMsg(null);
        fetchData(endpoint, 'patch', updatedData);
    };
    const deleteData = async (endpoint, id) => {
        setLoading(true);
        setErrorMsg(null);
        fetchData(endpoint, 'delete', id);
    };

    return {
        data,
        loading,
        errorMsg,
        postData,
        getData,
        updateData,
        deleteData
    };
};

export default useApi;



// import { useState } from 'react';
// import axios from 'axios';


// const useApi = () => {

//     const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8001'

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [errorMsg, setErrorMsg] = useState(null);


//     const fetchData = async (endpoint, method, postData) => {
//         try {
//             if(endpoint === '/users/login') {
//                 axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token") || ""}`;
//             }
//             const url = `${baseUrl}${endpoint}`;
//             setLoading(true);
//             let response;
//             if (method === 'post') {
//                 response = await axios.post(url, postData)
//             } else if (method === 'get') {
//                 response = await axios.get(url);
//             } else if (method === 'patch') {
//                 response = await axios.patch(url, postData);
//             } else if (method === 'delete') {
//                 response = await axios.delete(url);
//             }
//             if (response.status >= 400) {
//                 throw new Error(`not found ${response.status} !`);
//             }
//             if (response !== null) {
//                 setData(response.data);
//                 setLoading(false);
//             }
//             if (response.data.token) {
//                 localStorage.setItem("token", response.data.token)
//             }
//             if(response.status === 404) {
//                 console.log(response)
//             }
//         } catch (error) {
//             console.error('Error in API request:', error);
//             setErrorMsg(error.message);
//             setLoading(true);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const postData = async (endpoint, postData) => {
//         setLoading(true);
//         setErrorMsg(null);
//         fetchData(endpoint, 'post', postData);
//     };
//     const getData = async (endpoint) => {
//         setLoading(true);
//         setErrorMsg(null);
//         fetchData(endpoint, 'get');
//     };
//     const updateData = async (endpoint, updatedData) => {
//         setLoading(true);
//         setErrorMsg(null);
//         fetchData(endpoint, 'patch', updatedData);
//     };
//     const deleteData = async (endpoint, id) => {
//         setLoading(true);
//         setErrorMsg(null);
//         fetchData(endpoint, 'delete', id);
//     };

//     return {
//         data,
//         loading,
//         errorMsg,
//         postData,
//         getData,
//         updateData,
//         deleteData
//     };
// };

// export default useApi;
