import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <>
                <section className="header">
                    <div className="header-title">
                        <div>
                            <h1>Fourteeners Galore!</h1>
                        </div>
                    </div>
                    <span className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/create" >Create</Link>
                    </span>
                </section>
            </>
        )
    }
}
