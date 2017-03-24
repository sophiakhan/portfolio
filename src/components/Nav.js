import React from 'react';

class Nav extends React.Component {
    render() {
        return <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div id="headerHighlight"></div>
                    <div id="headerName">Sophia Khan</div>
                    <ul class="list-inline pull-right">
                        <li><a href="./index.html">ABOUT</a></li>
                        <li><a href="./portfolio.html">PORTFOLIO</a></li>
                        <li><a href="https://medium.com/@sophiaxkhan">BLOG</a></li>
                        <li><a href="./contact.html">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    }

}

export default Nav