import React from 'react';
import profilePic from './images/profilePic.jpg'
class AboutMe extends React.Component {
    render() {
        return(
            <div>
                <img className="pull-left profilePic" src={profilePic} alt="Profile Pic" />
                <h1>About Me</h1>
                <hr />
                <div className="somePTags">
                <p>Hello! My name is Qamar Abbas Stationwala. Most people call me Q for short, though (and cue the James Bond jokes...). I graduated from Esperanza High School in 2008.</p>
                <p>I've always been pretty good with computers; ever since I was a kid. When I was in high school I took a VB6 class in my junior year, and HTML in my senior year. While attending college I took various programming courses, some of which include C, C++, Assembly, and Java. I have taught myself a tiny bit of Python as well.</p>
                <p>As far as my work history goes, I have had the same job since high school. I started as a cashier at Rite-Aid, but several years ago I was promoted to shift-supervisor. I learned a lot about working in and managing teams. The lesson I value most though working at Rite-Aid is my strong sense of work ethic.</p>
                <p>A few of my hobbies include listening to a large variety of music, playing board and card games, and watching movies. You know... In case you were thinking of getting me anything... *nudge nudge, wink wink*</p>
                <p>If you'd like to reach out to me, you can either connect with me through one of the links in the sidebar, or you can send me a message from the <a href="/contact">Contact page</a> (probably the quickest).</p>
            </div>
            </div>
        );
    }
}

export default AboutMe;