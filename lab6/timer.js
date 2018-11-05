import React, { Component } from 'react';

export class Timer extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        }

        setInterval(() => {
            this.setState({ time: new Date() });
        }, 500);
    }
    render() {
        return <div
            style={{
                backgroundColor: 'gray',
                borderRadius: 20,
                width: '50vw',
                margin: 'auto'
            }}
        >{['w', 'o', 'r', 'k'].map(d =>
            <pre style={{ margin: 0 }}>
                > {d}/  /{this.state.time.toLocaleTimeString()}
            </pre>)}
        </div>
    }
}