import React, { Component } from 'react';
import { VictoryPie, VictoryAnimation } from 'victory';

class CircularProgressBar extends Component {

    constructor (props) {
        super (props);
        this.state = {
            value: this.props.value || 0,
            maxValue: this.props.maxValue || 100,
            data: this.getData()
        };

        this.cartesianToPolar = this.cartesianToPolar.bind(this)
        this.polarToCartesian = this.polarToCartesian.bind(this)
    }

    polarToCartesian(angle){
        const {cx,cy,r} = this.state
            , a = (angle-270) * Math.PI / 180.0
            , x = cx + (r * Math.cos(a))
            , y = cy + (r * Math.sin(a))
        return {x,y}
    }
    cartesianToPolar(x,y){
        const {cx,cy} = this.state
        return Math.round((Math.atan((y-cy)/(x-cx)))/(Math.PI/180)+((x>cx) ? 270 : 90))
    }

    getData () {
        let percent = this.state.value / this.state.maxValue;

        // TODO: Fix the y-values. The current ones are incorrect.
        return [{x: 1, y: this.state.value}, {x: 2, y: this.state.maxValue - this.state.value}];
    }

    render () {
        return (
            <div>
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
            </div>
        );
    }
}