import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {
        document.body.classList.toggle('background_home_image');
    }

    componentWillUnmount() {
        document.body.classList.toggle('background_home_image');
    }

    render() {
        return (
            <div className="homeDiv">
                <h1>Including destinations such as:</h1>
                <ul>
                    <li><h2>Whidbey Island</h2></li>
                    <li><h2>Port Townsend</h2></li>
                    <li><h2>Leavenworth</h2></li>
                    <li><h2>San Juan Islands</h2></li>
                </ul>
            </div>
        );
    }
}
