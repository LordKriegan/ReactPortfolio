import React from 'react'
import projects from './projects'

class Portfolio extends React.Component {
    state = {
        activeProject: 0
    }
    selectProject = (e) => {
        this.setState({
            activeProject: e.target.id
        })
    }
    getElem = (projects) => {
        const Elem = projects[this.state.activeProject].component
        return <Elem />
    }
    render() {
        return (
            <div>
                <ul className="nav nav-pills" role="tablist">
                    {
                        projects.map((project, i) => {
                            return (
                                <li role="presentation" key={i} className={this.state.activeProject.toString() === i.toString() ? "active" : ""}><a id={i} onClick={this.selectProject}>{project.name}</a></li>
                            )
                        })
                    }
                </ul>
                {this.getElem(projects)}
            </div>
        );
    }
}

export default Portfolio;
