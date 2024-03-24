import React from "react";
import githubLogo from "../assets/svgs/github.svg"
import linkedinLogo from "../assets/svgs/linkedin.svg"

function Footer() {
    return(
        <div className= "footer-content">
            <div className= "footer-logos">
            <a href="https://github.com/Brady-hash" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/brady-davis-j/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" />
            </a>
            </div>

        </div>
    );
}

export default Footer;