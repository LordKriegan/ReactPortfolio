import React from 'react'
import ReactDOM from 'react-dom'
class Project extends React.Component {

    showInfo = (btn, infoWindow, btnClicked) => {
        document.getElementById("summaryBtn").classList.remove("active");
        document.getElementById("techBtn").classList.remove("active");
        document.getElementById("roleBtn").classList.remove("active");
        document.getElementById("linksBtn").classList.remove("active");

        document.getElementById("summaryInfo").classList.add("hidden");
        document.getElementById("techInfo").classList.add("hidden");
        document.getElementById("roleInfo").classList.add("hidden");
        document.getElementById("linksInfo").classList.add("hidden");

        document.getElementById(btn).classList.add("active");
        document.getElementById(infoWindow).classList.remove("hidden");

        if (btnClicked) {
            const infoWindow = ReactDOM.findDOMNode(this.refs.infoWindow);
            window.scrollTo(0, infoWindow.offsetTop)
        }
    }

    componentDidMount() {
        this.showInfo("summaryBtn", "summaryInfo", 0);
    }

    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h1>{this.props.project.title}</h1>
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <img src={this.props.project.image} alt="Project Screenshot" className="img-responsive center-block" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        {/* for some reason putting this display style in app.css doesn't allow me to center buttons, but having it here does. hence the inline style*/}
                        <ul className="nav nav-pills" style={{display: "inline-block", paddingTop: "10px"}}>
                            <li role="presentation" id="summaryBtn"><a onClick={() => this.showInfo("summaryBtn", "summaryInfo", 1)}>Summary</a></li>
                            <li role="presentation" id="techBtn"><a onClick={() => this.showInfo("techBtn", "techInfo", 1)}>Technologies Used</a></li>
                            <li role="presentation" id="roleBtn"><a onClick={() => this.showInfo("roleBtn", "roleInfo", 1)}>My Roles</a></li>
                            <li role="presentation" id="linksBtn"><a onClick={() => this.showInfo("linksBtn", "linksInfo", 1)}>Links</a></li>
                        </ul>
                    </div>
                </div>
                <div ref="infoWindow" className="row">
                    <div className="col-xs-12 text-center">
                        <div id="summaryInfo" className="hidden">
                            <h3>Summary</h3>
                            <p>{this.props.project.summary}</p>
                        </div>
                        <div id="roleInfo" className="hidden">
                            <h3>My Roles</h3>
                            <p>{this.props.project.role}</p>
                        </div>
                        <div id="techInfo" className="hidden">
                            <h3>Technologies Used</h3>
                            <ul>
                                {this.props.project.tech.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div id="linksInfo" className="hidden">
                            <h3>Links</h3>
                            <div className="linkList">
                                <a target="_blank" href={this.props.project.liveLink}>Live Link <span class="glyphicon glyphicon-new-window"></span></a>
                                <a target="_blank" href={this.props.project.ghLink}>Github Link <span class="glyphicon glyphicon-new-window"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;