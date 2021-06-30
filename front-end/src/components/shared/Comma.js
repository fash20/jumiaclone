import { FaMarsDouble } from "react-icons/fa";

 const comma = (num) => {

    if (num != undefined){
    let str = num.toString();
    str = str.split('').reverse().join('');
    let len  = str.length;
    let r = '';
    for(let i = len-1;  i >= 0; i--){
        r = r + str[i]
        if (i !== 0 && i%3 === 0 ){
            r = r + ','
        }

    }
    return r
}
else {
    return ''
}
}

export default comma;