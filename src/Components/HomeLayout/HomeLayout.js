import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Navigate } from 'react-router-dom';

export default class HomeLayout extends Component {
    render() {
        return (
          <div>
            <Header />
            <div className="d-flex">
              <div className="w-50">
                <Navigate />
              </div>
              
            </div>
            <Header />
            <Footer />
          </div>
        );
      }
}
