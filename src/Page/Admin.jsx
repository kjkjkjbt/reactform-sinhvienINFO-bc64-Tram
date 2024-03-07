import React, { Component } from 'react';
import { Navigate } from 'react-router';

export default class Admin extends Component {
  render() {
    const isAdmin = true ;
    if (! isAdmin) {
        return <Navigate to= {'/'} />; // Redirect to home page
    }
    return <div>Đây là trang admin</div>;
  }
}
