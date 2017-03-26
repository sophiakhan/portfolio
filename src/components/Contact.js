import React from 'react'

const Contact = () => <div>
<div  className="container text-center">
    <h1 id="letsChat">Let's chat</h1>
    <img className="text-center img-responsive" width="500" src="../img/code4.jpg" /> <br />
     <h4><span className="glyphicon glyphicon-envelope contactInfo">  sophiaxkhan@gmail.com</span></h4> 
    <div>
        <br/>
        <ul className="list-inline">
            <li><i className="fa fa-2x fa-envelope-o" aria-hidden="true"></i></li>
            <li><i className="fa fa-2x fa-github" aria-hidden="true"></i></li>
            <li><i className="fa fa-2x fa-linkedin" aria-hidden="true"></i></li>
            <li><i className="fa fa-2x fa-codepen" aria-hidden="true"></i></li>
        </ul>
    </div>
</div>
</div>

export default Contact