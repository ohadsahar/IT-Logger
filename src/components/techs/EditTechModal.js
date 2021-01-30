import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateTech } from '../../actions/techsActions';

const EditTechModal = ({ current, updateTech }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if (current) {
            setFirstName(current.firstName);
            setLastName(current.lastName);
        }
    }, [current])


    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Form invalid' })
        } else {
            const newTech = {
                id: current.id,
                firstName: firstName,
                lastName: lastName
            }
            updateTech(newTech);
            M.toast({ html: 'Tech has been updated successfully' })
        }
    }

    return (
        <div id='edit-tech' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit Tech</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="!#" onClick={onSubmit} className="modal-close waves-effect waves-green btn-flat">Submit</a>
                </div>
            </div>
        </div>
    )


}

EditTechModal.propTypes = {
    current: PropTypes.object,
    updateTech: PropTypes.func.isRequired,
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

const mapStateToProps = state => ({
    current: state.tech.current
})

export default connect(mapStateToProps, { updateTech })(EditTechModal);
