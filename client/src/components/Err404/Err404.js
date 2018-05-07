import React from 'react';
import Err404Img from './images/Err404.gif';
class Err404 extends React.Component {
  render() {
    return (
      <div className="err404">
        <h1 className="pull-left">Error 404!</h1>
        <img alt="Error 404!" className="img-responsive" src={Err404Img} />
        <h3 className="pull-right">Page not found!</h3>
        {/*
        not sure of the original artist of this picture but image was pulled from this site (via google images)
        https://aminoapps.com/c/anime/page/blog/im-so-confused/66tz_uPz7mavEaVoBYGmZNqLP30wdm
        */}
      </div>
    );
  }
}

export default Err404;
