import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techsActions';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types'

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {

    useEffect(() => {
        console.log(techs);
        getTechs();
        //eslint-disable-next-line
    }, [])

    if (loading || techs === null) { return <PreLoader /> }

    return (
        <div id='tech-list-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Tech List</h4>
                <ul className="collection">
                    {!loading && techs.length === 0 ? (<p>No Techs</p>) :
                        (techs.map(tech => <TechItem className="collection-item" key={tech.id} tech={tech} />))
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
