import * as React from "react";
import { Link } from "react-router-dom";

import '../../styles/header.scss';

const urls = ['first', 'second', 'third']

const Header: React.FunctionComponent = () => {

    const mapUrls = () => {
        return(
            <div className="header-container">
                {
                    urls.map((item, key) => (
                        <div className="header-items" key={key}>
                            <Link to={`/${item}`}>{item}</Link>
                        </div>
                    ))
                }
            </div>
        )
    }

    return(
        <div className="header-container">
            { mapUrls() }
        </div>
    )
}

export default Header;