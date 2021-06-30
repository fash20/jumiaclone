import axios from "axios"
import { useState,useEffect } from 'react'


export const useFetch = (url, method, ref, initialValue,token) => {
    const [data, setData] = useState(initialValue)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const access_token= token

    const chooseMethod = (method) => {
        switch (method) {
            case 'GET':
                return axios.get(url,{
                    headers: {
                        'Authorization': `token ${access_token}`
                      }
                })
                    .then(response => setData(response.data))
                    .catch(err => setError(err))
                break
            case 'POST':
                return axios.post(url)
                    .then(response => setData(response.data))
                    .catch(err => setError(err))
                    .then(()=>setLoading(false))
                break
            case 'PUT':
                return axios.put(url)
                    .then(response => setData(response.data))
                    .catch(err => setError(err))
                    .then(()=>setLoading(false))
                break
            case 'DELETE':
                return axios.delete(url)
                    .then(response => setData(response.data))
                    .catch(err => setError(err))
                    .then(()=>setLoading(false))
                break
            default: setData({})
                break

        }

    }

    useEffect(() => {
        if (ref.current) {
            chooseMethod(method)

        }
        return () => {
           ref.current = false
        }
    }, [url, ref])

    return [loading, error, data];

}