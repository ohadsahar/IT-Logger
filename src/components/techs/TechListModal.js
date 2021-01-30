import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techsActions';
import TechItem from './TechItem';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, [])

    return (
        <div id='tech-list-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Tech List</h4>
                <ul className="collection">
                    {!loading && techs !== null &&
                        techs.map(tech => <TechItem className="collection-item" key={tech.id} tech={tech} />)
                    }
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech,
})

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default connect(mapStateToProps, { getTechs })(TechListModal);
