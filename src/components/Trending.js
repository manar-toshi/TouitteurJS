import React from 'react';
class Trending extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trendings: {},
            intervalId: 0
        };
    }
    componentDidMount() {

        let intervalId = setInterval(() => {
            fetch('http://touiteur.cefim-formation.org/trending', {
                method: 'GET',
            })
                .then(response => response.json())
                .then((responseText) => {

                    this.setState({ trendings: responseText });

                })
                .catch((error) => {
                    console.log("error", error);
                })
        }, 1000)
        this.setState({ intervalId: intervalId })

    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId)
    }
    render() {
        let trendingfinal = [];
        const arr = Object.keys(this.state.trendings).map((key) => [key, this.state.trendings[key]]);
        let trendingsort = arr.sort(sortFunction);

        function sortFunction(a, b) {
            if (a[1] === b[1]) {
                return 0;
            }
            else {
                return (a[1] < b[1]) ? -1 : 1;
            }
        }
        for (let i = 0; i < trendingsort.length; i++) {
            trendingfinal.push(trendingsort[i][0])
        }

        return (
            <div className="zone">
                {trendingfinal.map((trending, i) => <div className="bloc1" key={i}> <p># {trending}</p></div>
                )}

            </div>
        );
    }
}
export default Trending;