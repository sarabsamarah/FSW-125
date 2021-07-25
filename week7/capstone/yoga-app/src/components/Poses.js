import React, { useState } from 'react'
import "./Pose.css"
import AddYogaForm from './AddYogaForm'


function Poses(props){
    const { deletePose, name, sanskirt, balancing, type, _id } = props
    const [editToggle, editPose] = useState(false)

    return (
        <div className= "list-container">
         { !editToggle ?
           
              <div>
                    <h2 className = "poseName">{name} {sanskirt}</h2>
                        <h4>Type: {type}</h4>
                        <p>Balance: {balancing ? "true" : "false"}</p>
                    
                    
                    <button onClick={() => 
                        deletePose(_id)} 
                        className='delete-btn'>Delete
                    </button>

                    <button onClick={() => 
                        editPose(prevToggle => !prevToggle)} className="edit-btn"> Edit
                    </button>
              </div>
        
        :
        <>
            <AddYogaForm
                key={_id}
                name={name}
                sanskirt={sanskirt}
                balancing={balancing}
                type={type}
                _id={_id}
                btnText="Submit Edit" 
                submit={props.editPose}
            />
            <button
                className="delete-btn"
                onClick={() => editPose(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
        }
        </div>
    );
}
export default Poses;