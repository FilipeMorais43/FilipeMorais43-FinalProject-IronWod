import React, { Component } from 'react';
import './style.scss';

class ErrorView extends Component {
  render() {
    return (
      <div>
        <h1>There was an error</h1>
        <div className="error__image">
          <img
            src="https://cdn.windowsreport.com/wp-content/uploads/2018/02/How-to-fix-error-0x80070570-in-Windows-10.jpg"
            alt="errorimage"
          />
        </div>
      </div>
    );
  }
}

export default ErrorView;
