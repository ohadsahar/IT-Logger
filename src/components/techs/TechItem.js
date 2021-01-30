import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech, setCurrent } from '../../actions/techsActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech, setCurrent }) => {

    const onDelete = () => {
        deleteTech(tech.id);
        M.toast({ html: `The Tech: ${tech.firstName} ${tech.lastName} has beed removed successfully` });
    }


    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#edit-tech" className="modal-trigger secondary-content">
                    <i className="material-icons" onClick={() => { setCurrent(tech) }}>edit </i>
                </a>
                <a href="!#" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.protoTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech, setCurrent })(TechItem);