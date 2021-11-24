import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi'

class Info extends React.Component {
  render() {
    return (
      <div className="info-container">
        <Link to="" className="info-link">< FiArrowDown /></Link>
      </div>
    );
  }
}

export default Info;
