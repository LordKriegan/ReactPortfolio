import React from 'react'
import projectImg from './images/image.png'
class Project extends React.Component {
    project = {
        title: "Digi-tome",
        liveLink: "https://digi-tome.herokuapp.com",
        ghLink: "https://github.com/dtstrange/digi-tome/",
        summary: "A self-publishing site for aspiring authors to share their creative works. Users can sign up for an account and either browse and read books posted by other users or share some of their own.",
        tech: ["Node", "Express", "React", "MySQL", "Sequelize", "Bootstrap", "Axios", "Express-jwt", "Express-fileupload", "Disqus"],
        role: "My roles in this project included setting up the database and setting up the crud routes, as well as figuring out how to handle file uploads. I also helped design some of the front-end React components."
    }
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h1>{this.project.title}</h1>
                    </div>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <img src={projectImg} alt="Project Screenshot" className="img-responsive center-block" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <div>
                            <h3>Summary</h3>
                            <p>{this.project.summary}</p>
                            <hr />
                        </div>
                        <div>
                            <h3>My Roles</h3>
                            <p>{this.project.role}</p>
                            <hr />
                        </div>
                        <div>
                            <h3>Technologies Used</h3>
                            <ul>
                                {this.project.tech.map((item) => {
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
                                <a target="_blank" href={this.project.liveLink}>Live Link <span class="glyphicon glyphicon-new-window"></span></a>
                                <a target="_blank" href={this.project.ghLink}>Github Link <span class="glyphicon glyphicon-new-window"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;