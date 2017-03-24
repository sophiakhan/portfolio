import React, { Component } from 'react'

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        }
    }

    render() {
        return <div>
            <div className="row">
                <div className="col-sm-8">
                    <div className="websiteWindow">
                        <img src={this.props.screenshot} />
                    </div> 
                </div>
                <div className="col-sm-4 projectInfo">
                    <h1 className="projectTitle">{this.props.title}</h1>
                    <ul className="list-inline">
                        <li><i className={this.props.html}></i></li>
                        <li><i className={this.props.css}></i></li>
                        <li><i className={this.props.bootstrap}></i></li>
                        <li><i className={this.props.js}></i></li>
                        <li><i className={this.props.jq}></i></li>
                        <li><i className={this.props.react}></i></li>
                        <li><i className={this.props.node}></i></li>
                        <li><i className={this.props.sass}></i></li>
                        <li><i className={this.props.postgres}></i></li>
                    </ul>
                    <a className="projectLink" href={this.props.url}>Github</a> 
                    <br/> <br/>
                    <p className="projectDesc"> Chartreuse magna green juice minim, XOXO kale chips sunt kombucha YOLO sapiente deep v commodo echo park. Exercitation fanny pack gluten-free quis, eiusmod iceland helvetica qui edison bulb ethical mixtape lo-fi. Chia disrupt narwhal helvetica sartorial unicorn.</p>
                </div>
            </div>
        </div>
        
    }
}

export default Project