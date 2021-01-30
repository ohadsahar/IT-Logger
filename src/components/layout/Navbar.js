import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLog } from '../../actions/logActions';

const Navbar = ({ searchLog }) => {

    const text = useRef('');

    const onChange = (e) => {
        searchLog(text.current.value);
    }

    return (
        <nav className="blue">
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required placeholder="Search Logs" ref={text} onChange={onChange} />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    searchLog: PropTypes.func.isRequired,
}

export default connect(null, { searchLog })(Navbar);