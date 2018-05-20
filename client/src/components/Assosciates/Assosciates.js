import React from 'react';
import assosciateList from './AssosciateList'

class Assosciates extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h1>Assosciates</h1>
                    </div>
                </div>
                {assosciateList.map((elem, i) => {
                    return (
                        <div>
                            <div className="row">
                                <div className="col-xs-2 text-center assosciatePicCol">
                                    <img alt="Associate Pic" src={elem.image} />
                                    <p>{elem.name}</p>
                                    <p>{elem.title}</p>
                                </div>
                                <div className="col-xs-10 text-center">
                                    <p>{elem.summary}</p>
                                    <p>
                                        {elem.linkList.map((link, n) => {
                                            return (<span><a target="_blank" href={link.href}>{link.linkName}</a>{(n < (elem.linkList.length - 1)) ? " | " : ""}</span>)
                                        })}
                                    </p>
                                </div>
                            </div>
                            {(i < (assosciateList.length - 1) ? <div className="row"><div className="col-xs-12"><hr /></div></div> : "")}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Assosciates;