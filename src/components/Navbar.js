import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Navbar(props) {
    const [def_text, new_text] = useState("Dark mode");

    let toggletext = () => {
        if (def_text === "Dark mode") {
            new_text("Light mode");
        } else {
            new_text("Dark mode");
        }
    }

    const shareBlog = () => {
        // Construct the URL for sharing the blog
        const shareURL = ``;

        // Open the share URL in a new tab
        window.open(shareURL, '_blank');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar bg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home" style={{ color: props.mode === "dark" ? "white" : "black" }}><b>Chronicals</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home" style={{ color: props.mode === "dark" ? "white" : "black" }}><b>HOME</b></a>
                        </li>

                    </ul>
                    <div className='nav_btns'>
                        <form className="d-flex" role="search">
                            <button className="create btn btn-outline-success btn_create" type="submit">
                                <a href="/main" style={{ color: props.mode === "dark" ? "white" : "black" }}>Create<b> +</b></a>
                            </button>
                        </form>

                        <div className={`toggle_btn form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`} onClick={toggletext}>
                            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ textDecoration: 'none', color: props.mode === "dark" ? "white" : "black" }}>{def_text}</label>
                        </div>


                        <button className="btn btn-outline-secondary" onClick={shareBlog} style={{ marginLeft: '10px' }}>
                            Share Blog
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    mode: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired
};
