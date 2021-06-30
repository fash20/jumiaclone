import {useState, useEffect} from 'react'

export const useDetectClickOutside = (dropdownRef, initalStates)=>{

    const [isActive, setIsActive] = useState(initalStates)
    useEffect(()=>{
        const clickEvent = (e) => {
            if( dropdownRef.current !== null && !dropdownRef.current.contains(e.target) ){
            setIsActive(!isActive)}

        }
        if (isActive) {
            window.addEventListener('click', clickEvent);
        }
        return () => {
            window.removeEventListener('click', clickEvent);

        }
    }, [isActive, setIsActive])

    return [isActive, setIsActive]
}