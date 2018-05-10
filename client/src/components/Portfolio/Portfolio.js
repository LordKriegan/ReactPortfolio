import React from 'react'
import projects from './projects/projectList'
import Project from './projects/Project'
class Portfolio extends React.Component {
    state = {
        activeProject: 0
    }
    selectProject = (e) => {
        this.setState({
            activeProject: e.target.id
        })
    }
    render() {
        return (
            <div className="text-center">
                <ul className="nav nav-pills" role="tablist" style={{display: "inline-block"}}>
                    {
                        projects.map((project, i) => {
                            return (
                                <li role="presentation" key={i} className={this.state.activeProject.toString() === i.toString() ? "active" : ""}><a id={i} onClick={this.selectProject}>{project.title}</a></li>
                            )
                        })
                    }
                </ul>
                <Project project={projects[this.state.activeProject]} />
            </div>
        );
    }
}

export default Portfolio;
