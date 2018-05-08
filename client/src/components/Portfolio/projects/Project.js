import React from 'react'
class Project extends React.Component {
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
                        <div>
                            <h3>Summary</h3>
                            <p>{this.props.project.summary}</p>
                            <hr />
                        </div>
                        <div>
                            <h3>My Roles</h3>
                            <p>{this.props.project.role}</p>
                            <hr />
                        </div>
                        <div>
                            <h3>Technologies Used</h3>
                            <ul>
                                {this.props.project.tech.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                            <hr />
                        </div>
                        <div>
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