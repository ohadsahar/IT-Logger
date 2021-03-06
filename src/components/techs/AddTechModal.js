import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techsActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import PropTypes from 'prop-types';


const AddTechModal = ({ addTech }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Form invalid' });
        } else {
            const newTech = {
                firstName: firstName, lastName: lastName
            }
            addTech(newTech);
            M.toast({ html: 'New tech created' });
            setFirstName('');
            setLastName('');
        }
    }

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


AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal);
