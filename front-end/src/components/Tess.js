import React, {useRef} from 'react'
import { useFetch } from './shared/helpers/useFetch'

const Tess = ()=> {
    const isComponentMounted = useRef(true)
    const [loading, error, data] = useFetch('http://localhost:3100/product/get','GET',isComponentMounted,[])
    return (
        <div>
            {
                console.log(data)
            }
        </div>
    )
}

export default Tess
