import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions';
import PropTypes from 'prop-types';

const EditLogModal = ({ updateLog, current }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current])

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Must insert tech and message' });
        } else {
            const updatedLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }
            updateLog(updatedLog);
            M.toast({ html: `Log updated by: ${tech}` })
        }
        setMessage('');
        setAttention(false);
        setTech('');

    }
    return (
        <div id='edit-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select tech</option>
                            <option value="Ohad Sahar">Ohad Sahar</option>
                            <option value="Noy Ditchi">Noy Ditchi</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <label>
                            <input type="checkbox" className="filled-in" checked={attention} onChange={e => setAttention(!attention)} />
                            <span>Need attention</span>
                        </label>
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

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal);