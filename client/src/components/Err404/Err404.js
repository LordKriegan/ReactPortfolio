import React from 'react';
import Err404Img from './images/404.gif';
class Err404 extends React.Component {
  render() {
    return (
      <div>
        <img alt="Error 404!" className="img-responsive err404" src={Err404Img} />
      </div>
    );
  }
}

export default Err404;
