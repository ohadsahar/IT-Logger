import React, { useState } from 'react'


const AddTechModal = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => { }

    return (
        <div id='tech-add-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active">First name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active">Last name</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="!#" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Submit</a>
                </div>
            </div>
        </div>
    )
}
const modalStyle = {
    width: '75%',
    height: '75%'
}

export default AddTechModal;
