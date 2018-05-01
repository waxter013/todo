import React, { Component } from 'react';
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory';
import CircularProgressBar from '../CircularProgressBar/CircularProgressBar';

class Timer extends Component {

    constructor() {
        super();
        this.state = {
            percent: 25,
            data: this.getData(0),
            totalTime: 100,
            timeRemaining: 60,
            isPaused: false
        };
    }

    componentDidMount() {
        let percent = this.state.percent;

        // Update the timer
        this.tick = window.setInterval(() => {

            // Update percent
            percent += 1;

            // Reset percent
            percent = (percent > 100) ? 0 : percent;

            // Update state
            this.setState({
                percent,
                data: this.getData(percent)
            });

        }, 1000);
    }

    componentWillUnmount() {
        // Stop timer
        window.clearInterval(this.tick);
    }

    getData(percent) {
        return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
    }

    render() {
        return (
            <div>
                <svg viewBox="0 0 400 400" width="50%" height="50%">

                    {/* Timer Circular Progress Bar */}
                    <VictoryPie
                        standalone={false}
                        animate={{ duration: 1000 }}
                        width={400} height={400}
                        data={this.state.data}
                        innerRadius={120}
                        cornerRadius={25}
                        labels={() => null}
                        style={{
                            data: { fill: (d) => {
                                    const color = d.y > 30 ? "green" : "red";
                                    return d.x === 1 ? color : "transparent";
                                }
                            }
                        }}
                    />

                    {/* Animate Timer Text */}
                    <VictoryAnimation duration={1000} data={this.state}>
                        {(newProps) => {
                            return (

                                // Timer Text
                                <VictoryLabel
                                    textAnchor="middle" verticalAnchor="middle"
                                    x={200} y={200}
                                    text={`${Math.round(newProps.percent)}%`}
                                    style={{ fontSize: 45 }}
                                />
                            );
                        }}
                    </VictoryAnimation>
                </svg>
            </div>
        );
    }
}

export default Timer;