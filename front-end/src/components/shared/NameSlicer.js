const nameSlicer = (length, name)=>{
    return name.length <= length ? name   : name.substring(0,length,)+ '...'
}
export default nameSlicer