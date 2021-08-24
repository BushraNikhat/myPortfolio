import React from 'react'

const ProgressBar = ({interest}) => {
    return (
        <>

            <div className="progress" >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{width:"100%",
                        backgroundColor:"#0a2538"}}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >{interest}</div>
                      
            </div>

        </>
    )
}

export default ProgressBar
