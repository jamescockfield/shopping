import React from "react";
import UserPanel from "components/UserPanel";

const Navbar = () => (
    <div className="navbar">
        <a href="/"><h1>Shopping Website</h1></a>
        <UserPanel/>
    </div>
);

export default Navbar;
