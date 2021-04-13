import React, { useContext } from "react";
import UserContext from "../utils/UserContext"

const Nav = () => {
    const context = useContext(UserContext);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button 
            className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <div className="searchbox">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">
                        Search
                        </span>
                    </div>
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="name"
                        aria-label="Search"
                        onChange={e => context.userSearch(e)}
                    />
                </div>
            </div>
        </div>
    </nav>
    )
}
//Nav scaffolds search functionality together, contains both element and the call for search by name
export default Nav