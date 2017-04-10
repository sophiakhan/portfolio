import React from 'react'

const Contact = () => <div>
<div  className="container text-center">
    <h1 id="letsChat">Let's chat</h1>
    <br />
    <div className="row">
        <div className="col-sm-6">
            <img className="text-center img-responsive" width="500" src="img/code4.jpg" /> 
        </div>
        <div className="col-sm-6">
        <br/><br/><br/>
            <h4>Interested in exploring a project, discussing diversity in tech, or chatting about your favorite book? Feel free to reach out! I'd love to hear from you.</h4> <br/>
            <h4><span className="glyphicon glyphicon-envelope contactInfo">  sophiaxkhan@gmail.com</span></h4> 
            <div>
                <br/>
                <ul className="list-inline">
                    <li><a href="mailto:sophiaxkhan@gmail.com"><i className="fa fa-2x fa-envelope-o" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/sophiakhan"><i className="fa fa-2x fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/sophiaxkhan/"><i className="fa fa-2x fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="http://codepen.io/sophiakhan/"><i className="fa fa-2x fa-codepen" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

export default Contact

