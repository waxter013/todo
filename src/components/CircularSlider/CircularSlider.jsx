import React, {Component} from 'react';
import { toDegrees, toRadians } from '../../utilities/math';
import { StyleSheet, css } from 'aphrodite';

/* Not sure why this comment is here, but don't delete it unless you verify that it's not useful */
// class CircularSlider extends Component {
//
//   constructor (props) {
//     super(props);
//
//     const {width, height} = props;
//     const smallestSide = (Math.min(width,height));
//
//     this.state = {
//       cx: width / 2,
//       cy: height / 2,
//       r: (smallestSide / 2) - Math.max(this.props.strokeWidth, this.props.sliderBttnSize) - 10, // -10 for fontSize
//       isDragging: false,
//       value: this.props.value,
//       angle: this.getAngle(this.props.value, this.props.maxValue)
//     };
//
//     this.adjustCoord = this.adjustCoord.bind(this);
//     this.getAngle = this.getAngle.bind(this);
//   }
//
//
//   /**
//    * Adjust an x, y coordinate so that it's within the circle
//    * TODO: Adjust for strokeWidth
//    */
//   adjustCoord (x, y) {
//       const {cx, cy, r} = this.state;
//
//     // Adjust for outside of circle
//     x = clamp(cx - r, cx + r);
//     y = clamp(cy - r, cy + r);
//
//     // Adjust for inside of circle
//     if (x > cx + r) {
//
//     }
//
//     return {x, y};
//   }
//
//   /**
//    * Returns the angle of the circle
//    */
//   getAngle (value, maxValue) {
//     return Math.max(value, maxValue) / maxValue * 360;
//   }
//
//   componentWillMount () {
//     document.addEventListener('mouseup', this.stopSliderBttnMove, false);
//   }
//
//   componentWillUnmount () {
//     document.removeEventListener('mouseup', this.stopSliderBttnMove, false);
//   }
//
//   render () {
//     const {width, height, meterColor, textColor, strokeWidth, sliderBttnSize} = this.props,
//         {cx, cy, r, value} = this.state,
//         startCoord = this.polarToCartesian(0),
//         endCoord = this.polarToCartesian(value);
//
//     return (
//       <div>
//         <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} onMouseMove={this.moveSliderBttn}>
//
//             {/* Slider */}
//             <circle cx={cx} cy={cy} r={r} stroke='#eee' strokeWidth={strokeWidth} fill='none'/>
//
//             {/* Slider Progress Meter */}
//             <path stroke={meterColor} strokeWidth={5} fill='none'
//               d={`M${startCoord.x} ${startCoord.y} A ${r} ${r} 0 ${value > 180? 1: 0} 1 ${endCoord.x} ${endCoord.y}`}/>
//
//             {/* Slider Button */}
//             <g transform={`translate( ${endCoord.x - 7.5}, ${endCoord.y - 7.5} )`}>
//               <circle cx={7.5} cy={7.5} r={sliderBttnSize} fill={meterColor} onMouseDown={this.startSliderBttnMove}/>
//               <text key={value + ''} x={7.5} y={1} fontSize={10} fill={textColor} textAnchor="middle">{value+''}</text>
//             </g>
//         </svg>
//       </div>
//     )
//   }
// }
//
// CircularSlider.defaultProps = {
//   height: 100,
//   width: 100,
//   value: 0,
//   maxValue: 60,
//   meterColor: 'purple',
//   textColor: 'black',
//   strokeWidth: 5,
//   sliderBttnSize: 10
// };
//
// export default CircularSlider;


// TODO: Currently uses state.angle for all calculations. Should use state.value (and props.maxValue) instead.
class CircularSlider extends Component {

    constructor (props) {
        super(props);

        const {width, height, strokeWidth, sliderBttnSize} = props;
        const smallestSide = Math.min(width, height);

        this.state = {
            cx: width / 2,
            cy: height / 2,
            r: (smallestSide / 2) - Math.max(strokeWidth, sliderBttnSize) - 10, // -10 for fontSize
            isDragging: false,
            value: props.value,
            angle: this.getAngle(props.value, props.maxValue)
        };

        this.angleToCoord = this.angleToCoord.bind(this);
        this.coordToAngle = this.coordToAngle.bind(this);
        this.getAngle = this.getAngle.bind(this);
        this.calculateProgressCircle = this.calculateProgressCircle.bind(this);
        this.startSliderBttnMove = this.startSliderBttnMove.bind(this);
        this.stopSliderBttnMove = this.stopSliderBttnMove.bind(this);
        this.moveSliderBttn = this.moveSliderBttn.bind(this);
    }

    /**
     * Convert an angle to an x, y coordinate
     * @param angle - The angle
     * @return Object - An object containing x, y values
     */
    angleToCoord (angle) {

        const { cx, cy, r } = this.state;

        const x = cx + (r * Math.cos(angle)),
            y = cy + (r * Math.sin(angle));

        return {x, y}
    }

    /**
     * Convert an x, y coordinate to an angle
     * @param x - The x coord
     * @param y - The y coord
     * @return number - An angle
     */
    coordToAngle (x, y) {
        const {cx, cy} = this.state;
        
        let angle = Math.atan((y - cy) / (x - cx));

        // Adjust for negative x and y values
        if (x < cx) {
            angle += Math.PI;
        }
        else if (y < cy) {
            angle += 2 * Math.PI;
        }

        // Adjust for negative angle
        if (angle < 0) {
            angle += 2 * Math.PI;
        }

        // Convert Radians to Degrees
        angle = toDegrees(angle);

        return Math.round(angle);
    }

    /**
     * Calculates the angle of the progress bar
     * @param value - The progress bar's value
     * @param maxValue - The progress bar's maximum value
     * @returns angle
     */
    getAngle (value, maxValue) {
        return Math.max(value, maxValue) / maxValue * 360;
    }

    /**
     * Calculate all relevant values for the progress meter
     */
    calculateProgressCircle (startAngle = 0, endAngle) {
        startAngle = toRadians(startAngle) %  (2 * Math.PI);
        endAngle = toRadians(endAngle) % (2 * Math.PI);

        const {x: fromX, y: fromY} = this.angleToCoord(startAngle);
        const {x: toX, y: toY} = this.angleToCoord(endAngle);
        
        return {
            fromX,
            fromY,
            toX,
            toY
        };
    }

    /**
     * Allow the slider button to be moved
     */
    startSliderBttnMove (e) {
        this.setState(() => ({
            isDragging: true
        }));
    }

    /**
     * Disallow the slider button from being moved
     */
    stopSliderBttnMove (e) {
        this.setState(() => ({
            isDragging: false,
        }));
    }

    /**
     * Handle moving of slider button
     */
    moveSliderBttn (e) {

        if (this.state.isDragging) {
            
            let x, y;
            // Touch Position
            if (e instanceof TouchEvent) {
              x = e.touches[0].clientX;
              y = e.touches[0].clientY;
            }
            // Mouse Position
            else {
              x = e.clientX;
              y = e.clientY;
            }
          
            this.setState(() => ({
                angle: this.coordToAngle(x, y)
            }));

            this.props.onChange(this.state.angle);
        }
    }

    componentWillMount () {
        document.addEventListener('mouseup', this.stopSliderBttnMove, false);
        document.addEventListener('mouseleave', this.stopSliderBttnMove, false);
        document.addEventListener('mousemove', this.moveSliderBttn, false);
      
        document.addEventListener('touchend', this.stopSliderBttnMove, false);
        // document.addEventListener('touchcancel', this.stopSliderBttnMove, false);
        document.addEventListener('touchmove', this.moveSliderBttn, false);
    }

    componentWillUnmount () {
        document.removeEventListener('mouseup', this.stopSliderBttnMove, false);
        document.removeEventListener('mouseleave', this.stopSliderBttnMove, false);
        document.removeEventListener('mousemove', this.moveSliderBttn, false);
      
        document.removeEventListener('touchend', this.stopSliderBttnMove, false);
        // document.removeEventListener('touchcancel', this.stopSliderBttnMove, false);
        document.removeEventListener('touchmove', this.moveSliderBttn, false);
    }

    render () {
        const {width, height, meterColor, textColor, strokeWidth, sliderBttnSize} = this.props,
            {cx, cy, r, angle} = this.state,
            {fromX, fromY, toX, toY} = this.calculateProgressCircle(0, angle);

        return (
            <div>
                <svg className={css(styles.noselect)} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>

                    {/* Slider */}
                    <circle cx={cx} cy={cy} r={r} stroke='#eee' strokeWidth={strokeWidth} fill='none'/>

                    {/* Slider Progress Meter */}
                    <path stroke={meterColor} strokeWidth={5} fill='none'
                          d={`M ${fromX} ${fromY} A ${r} ${r} 0 ${angle > 180? 1: 0} 1 ${toX} ${toY}`}/>

                    {/* Slider Button */}
                    <g transform={`translate( ${toX}, ${toY} )`}>
                        <circle cx={0} cy={0} r={sliderBttnSize} fill={meterColor} onMouseDown={this.startSliderBttnMove} onTouchStart={this.startSliderBttnMove}/>
                        <text key={angle + ''} x={0} y={-10} fontSize={10} fill={textColor} textAnchor="middle">{angle+''}</text>
                    </g>
                </svg>
            </div>
        )
    }
}

const styles = StyleSheet.create({
  noselect: {
    userSelect: 'none'
  }
});

CircularSlider.defaultProps = {
    height: 100,
    width: 100,
    value: 0,
    angleOffset: 90,
    maxValue: 60,
    meterColor: 'purple',
    textColor: 'black',
    strokeWidth: 5,
    sliderBttnSize: 10
};

export default CircularSlider;