import React, { useState } from 'react'



function AddYogaForm(props){

    const initInputs = { name: props.name || "", sanskirt: props.sanskirt || "", balancing: props.balancing || "", type: props.type || ""  }
        
        const [inputs, setInputs] = useState(initInputs);

        const handleChange = (e) => {
        const {name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }
    
        const handleSubmit = ((e) => {
            e.preventDefault() 
            if (inputs.balancing.toLowerCase() === "true" ) {
                inputs.balancing = true
            } else {
                inputs.balancing = false
            }
            props.submit(inputs, props._id)
            setInputs(initInputs)
    })

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>add to your yoga library!</h2>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        name="sanskirt"
                        value={inputs.sanskirt}
                        onChange={handleChange}
                        placeholder="sanskirt"
                    />
                    <input
                        type="text"
                        name="balancing"
                        value={inputs.balancing}
                        onChange={handleChange}
                        placeholder="Balancing?"
                    />
                    
                    
                
                    <input
                        type="text"
                        name="type"
                        value={inputs.type}
                        onChange={handleChange}
                        placeholder="Type of pose"
                    />
                    <button className="add-btn">{props.btnText}</button>
                </form>
            </div>
    )
}

export default AddYogaForm;