import React from 'react'

function Divider(props) {
    const {divideBy} =props
    const {divideWith} = props
    return (
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:"center",height:'5px', maxWidth:'200px'}}>
            {
                divideBy === '1' ? (<div style={{height:'0',width:'20000px', border:'1px solid #dfdfdf' }} ></div>) :
                (
                    <>
                    <div style={{height:'0',width:'20000px', border:'1px solid #dfdfdf' }}></div>
                    <h5 style={{margin:'0 4px'}}>{divideWith}</h5>
                    <div style={{height:'0',width:'20000px', border:'1px solid #dfdfdf' }} ></div>
                    </>
                )
            }
            
        </div>
    )
}

export default Divider
