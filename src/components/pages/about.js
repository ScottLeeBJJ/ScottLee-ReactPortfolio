import React from 'react';
import profilePicture from "../../../static/assets/images/bio/professional.jpg";
import { convertToRaw } from 'draft-js';

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column" 
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                Hello, thanks for viewing my portfolio. I am a former U.S. Army Infantryman and I also spent 7 years in retail sales after the Military.
                I am now a Full Stack Software Developer with knowledge of Python, Javascript, React, Redux, Git, Bootstrap and many other technologies. 
                I am also learning new technologies such as C++ and C# for Unreal and Unity Engines, I would like to get into game development and other projects.
                I aspire to build/help build great projects that will be used for a long time to come. I look forward to hearing about your projects and working with you to develope 
                these projects together. 
            </div>
        </div>
    );
}