import React from "react";
import Email from "./Email";
import Content from "./Content";

export default function Header() {
    return (
        <div className="Header">
            <h3>Laura Smith</h3>
            <p className="JobRole">Frontend Developer</p>
            <p className="Email">laurasmith.website</p>
            <Email />
            <Content />
        </div>
    )
}