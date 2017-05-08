import React from 'react'
import { Link } from 'react-router'
import './css/global.css'

const Layout = (props) => <div>
    <header>
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div id="headerHighlight"></div>
                    <div id="headerName">Sophia Khan</div>
                    <ul className="list-inline pull-right">
                        <li><Link to="/">PORTFOLIO</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><a href="https://medium.com/@sophiaxkhan" target="_blank">BLOG</a></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <br/>

    <main>
        <div className="container">

            {props.children}

        </div>
    </main>

    <footer>
        <div className="text-center">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> // Copyright 2017.</div>
    </footer>
</div>

export default Layout