import React from 'react';
import Touit from './Touit';
// import { List } from '../api/TouitAPI';
class TouitContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            touits: [],
            ts:0,
            intervalId: 0
        };
    }
    componentDidMount() {
        let intervalId = setInterval(() => {
            (fetch('http://touiteur.cefim-formation.org/list', {
                method: 'GET',
            })
                .then(response => response.json())
                .then((responseText) => {
                    this.setState({ touits: responseText.messages });
                    this.setState({ ts: responseText.ts});
                   
                })
                .catch((error) => {
                    console.log("error", error);
                }))
          
        }, 1000)
        this.setState({ intervalId: intervalId })
        // console.log(List(callback()))
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }
    render() {
        return (
            <div className="zone">
                {this.state.touits.map((touit, index) => <Touit key={index} {...touit} />)}
            </div>

        );
    }
}
export default TouitContainer;