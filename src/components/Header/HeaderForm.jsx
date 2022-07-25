import React from 'react';


const HeaderForm = props => {


    return (
        <div className="formHeader" style={{display: props.dis}}>
           <div>
            <label>Tittle</label>
            <input type="text"/> 
            </div>
           <div>
            <label>Creator</label>
            <input type="text" /> 
            </div>
           <div>
            <label>Description</label>
            <input type="text"/> 
            </div>
        </div>
    );
};

HeaderForm.propTypes = {
    
};

export default HeaderForm;