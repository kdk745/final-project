import React, { Component } from 'react';


class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: '',
      lon: '',
      scrollItems: [

      ]
    };
  }


  componentDidMount() {
    console.log('component mounted');
  }

  render() {
    return (
      <div className="Admin">
        hello
      </div>
    );
  }
}

export default Admin;

// Admin.propTypes = {
//   onComponentMount: PropTypes.func.isRequired,
// };
