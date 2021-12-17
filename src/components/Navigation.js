import React from 'react'
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <>
        <Link to="/allpost">
        <button className="btn">All posts</button>
        </Link>
            <Link to="/createpost">
            <button className="btn">Create Post</button>
            </Link>
        </>
    )
}
export default Navigation
