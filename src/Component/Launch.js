import React, { Component } from 'react';
import styled from 'styled-components';
class Launch extends Component {
  render() {
    return (
      <Container>
        <div>
          {/* Full Page Image Header with Vertically Centered Content */}
          <header className="masthead">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                  <h1 className="font-weight-light">Vertically Centered Masthead Content</h1>
                  <p className="lead">A great starter layout for a landing page</p>
                </div>
              </div>
            </div>
          </header>
          {/* Page Content */}
        </div>
      </Container>
    );
  }
}

export default Launch;
const Container = styled.div`

.masthead {
    height: 100vh;
    min-height: 500px;
    // background-image: url('./img/test.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

.img-banner{
    width: 100vw;
    height: 80vh;
}
`