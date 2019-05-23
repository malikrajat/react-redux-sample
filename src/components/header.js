import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render () {
        return (
            <div>
                <Link to="/" className="padding24">Posts</Link>
                <Link to="/users" className="padding24">users</Link>
                <Link to="/albums" className="padding24">albums</Link>
                <Link to="/todos" className="padding24">todos</Link>
            </div>
        )
    }
}
export default Header;