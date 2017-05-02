import React from 'react'
import Project from './Project.js'

const Portfolio = () => <div>
    <Project title="Localgivr" screenshot="img/localgivr.png" html="devicon-html5-plain-wordmark" css="devicon-css3-plain-wordmark" bootstrap="devicon-bootstrap-plain-wordmark" js="devicon-javascript-plain" react="devicon-react-original" url="https://localgivr.herokuapp.com/" problem="Develop front end for Localgivr: a tool that connects users with small-scale giving opportunities in their area." process="Created a React application built with a rails backend. Rendering dynamic information for user and organization profiles, need requests, and user onboarding." />

    <Project title="Todo Application" screenshot="img/todo.png" html="devicon-html5-plain-wordmark" css="devicon-css3-plain-wordmark" bootstrap="devicon-bootstrap-plain-wordmark" js="devicon-javascript-plain" node="devicon-nodejs-plain" react="devicon-react-original" url="https://github.com/sophiakhan/w6d3-node-todo" url="https://github.com/sophiakhan/d1-learn-react" problem="Create to do application that utilizes Node Express to save to do items." process="Created a Node Express server and defined routes. React Webpack was used to build a real-time rendering server. To do items were built as React components. " />
    
    <Project title="Etsy Mockup" screenshot="img/etsy.png" html= "devicon-html5-plain-wordmark" css="devicon-css3-plain-wordmark" bootstrap="devicon-bootstrap-plain-wordmark" js="devicon-javascript-plain" url="https://github.com/sophiakhan/w5d2-recreate-etsy-search" problem=" Recreate a functional Etsy search page using Etsy API." process=" HTML, CSS, and Bootstrap were used to build the framework of the Etsy page. Then, Javascript was used to build the search cards and create a function to fetch search data from Etsy's API." />

    <Project title="2:Space" screenshot="img/2space.png" html= "devicon-html5-plain-wordmark" css="devicon-css3-plain-wordmark" bootstrap="devicon-bootstrap-plain-wordmark" js="devicon-javascript-plain" jq="devicon-jquery-plain-wordmark" url=" https://sophiakhan.github.io/flight-checkout/" problem="Create flight checkout page using jQuery elements." process="Use HTML, CSS, and Bootstrap to create the checkout page, and then use jQuery plug-ins to enhance the site. jQuery plug-ins were manipulated to suit the webpage." />


     
</div>
                                                      
export default Portfolio

//TODO : determine which to do repo to use. 