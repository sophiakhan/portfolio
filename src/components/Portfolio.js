import React from 'react'
import Project from './Project.js'

const Portfolio = () => <div>
    <div className="row">
        <div className="col-sm-8">
            <div className="websiteWindow">
                <img src="https://unsplash.it/3000/1996?image=1071" alt="Project 1" />
            </div> 
        </div>
        <div className="col-sm-4 projectInfo">
            <h1 className="projectTitle">Todo:Space</h1>
            <ul className="list-inline">
                <li><i className="devicon-html5-plain-wordmark"></i></li>
                <li><i className="devicon-css3-plain-wordmark"></i></li>
                <li><i className="devicon-javascript-plain"></i></li>
            </ul>
            <a className="projectLink" href="">Github</a> 
            <br/> <br/>
            <p className="projectDesc">Cold-pressed farm-to-table trust fund beard hammock taxidermy succulents, fashion axe pour-over heirloom pinterest health goth. Tattooed enamel pin tote bag, yr chambray leggings hot chicken kombucha chartreuse keffiyeh bicycle rights you probably haven't heard of them waistcoat brooklyn tumeric.</p>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-8">
            <div className="websiteWindow">
                <img src="https://unsplash.it/4288/2848?image=1020" alt="Project 2" />
            </div> 
        </div>
        <div className="col-sm-4 projectInfo">
            <h1 className="projectTitle">Chrip</h1>
            <ul className="list-inline">
                <li><i className="devicon-html5-plain-wordmark"></i></li>
                <li><i className="devicon-css3-plain-wordmark"></i></li>
                <li><i className="devicon-javascript-plain"></i></li>
                <li><i className="devicon-nodejs-plain"></i></li>
            </ul>
            <a className="projectLink" href="">Github</a> 
            <br/> <br/>
            <p className="projectDesc"> Chartreuse magna green juice minim, XOXO kale chips sunt kombucha YOLO sapiente deep v commodo echo park. Exercitation fanny pack gluten-free quis, eiusmod iceland helvetica qui edison bulb ethical mixtape lo-fi. Chia disrupt narwhal helvetica sartorial unicorn.</p>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-8">
            <div className="websiteWindow">
                <img src="https://unsplash.it/6000/3375?image=910" alt="Project 3" />
            </div> 
        </div>
        <div className="col-sm-4 projectInfo">
            <h1 className="projectTitle">Etsy</h1>
            <ul className="list-inline">
                <li><i className="devicon-html5-plain-wordmark"></i></li>
                <li><i className="devicon-css3-plain-wordmark"></i></li>
                <li><i className="devicon-javascript-plain"></i></li>
            </ul>
            <a className="projectLink" href="">Github</a> 
            <br/> <br/>
            <p className="projectDesc"> Chartreuse magna green juice minim, XOXO kale chips sunt kombucha YOLO sapiente deep v commodo echo park. Exercitation fanny pack gluten-free quis, eiusmod iceland helvetica qui edison bulb ethical mixtape lo-fi. Chia disrupt narwhal helvetica sartorial unicorn.</p>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-8">
            <div className="websiteWindow">
                <img src="https://unsplash.it/5598/3732?image=1060" alt="Project 3" />
            </div> 
        </div>
        <div className="col-sm-4 projectInfo">
            <h1 className="projectTitle">Surf & Paddle</h1>
            <ul className="list-inline">
                <li><i className="devicon-html5-plain-wordmark"></i></li>
                <li><i className="devicon-css3-plain-wordmark"></i></li>
            </ul>
            <a className="projectLink" href="">Github</a> 
            <br/> <br />
            <p className="projectDesc">Green juice iceland bitters, lo-fi swag forage leggings chambray lyft readymade direct trade health goth. Viral church-key live-edge, craft beer mixtape banjo selfies marfa waistcoat tacos cornhole.</p>
        </div>
    </div>

    <Project title="Todo Application" screenshot="" html="devicon-html5-plain-wordmark" css="devicon-css3-plain-wordmark" bootstrap="devicon-bootstrap-plain-wordmark" js="devicon-javascript-plain" react="devicon-react-original-wordmark" url="" />

    <Project title="2:Space" screenshot="../img/2space.png" html= "devicon-html5-plain-wordmark" css="devicon-css3-plain-wordmark" bootstrap="devicon-bootstrap-plain-wordmark" js="devicon-javascript-plain" jq="devicon-jquery-plain-wordmark" url=" https://sophiakhan.github.io/flight-checkout/" />
     
</div>

export default Portfolio