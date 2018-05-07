import React from 'react';
import GithubImg from './images/github.png'
import EmailImg from './images/email.png'
import LinkedInImg from './images/linkedin.png'
import PhoneImg from './images/phone.png'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="linkBox">
                <h4 className="text-center">Connect with me!</h4>
                <hr />
                <div className="contactLinks">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/qstationwala"><img alt="LinkedIn" className="contactLinkImg" src={LinkedInImg} /></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/lordkriegan"><img alt="Github" className="contactLinkImg" src={GithubImg} /></a>
                    <a rel="noopener noreferrer" target="_blank" href="mailto:qstationwala@gmail.com"><img alt="Email" className="contactLinkImg" src={EmailImg} /></a>
                    <a rel="noopener noreferrer" target="_blank" href="tel:1-714-308-3063"><img alt="Phone" className="contactLinkImg" src={PhoneImg} /></a>
                </div>
            </div>
        );
    }
}

export default Sidebar;