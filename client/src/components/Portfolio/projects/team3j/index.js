import React from 'react'
import projectImg from './images/image.png'
class Project extends React.Component {
    project = {
        title: "Team3J",
        liveLink: "https://team3j.herokuapp.com",
        ghLink: "https://github.com/lordkriegan/team3j/",
        summary: "A site built for a local business. Shows weekly event information, provides map and directions to shop, most recents posts from social media feeds, and site-owner can maintain a buylist (store is a collectible card shop) as well as post news on the home page.",
        tech: ["Node", "Express", "Handlebars", "MySQL", "Sequelize","Bootstrap", "jQuery", "Axios", "Social media APIs (Twitter, Instagram, Facebook)"],
        role: "This was a solo project."
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