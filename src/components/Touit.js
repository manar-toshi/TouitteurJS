import React from 'react';

class Touit extends React.Component{
    render(){
        const {name,message } = this.props;
        return(
          
                <div className="bloc"> 
                    <p>{message}</p>
                    <span className="text-secondary">{name}</span>
                </div>
        );
        }
}
export default Touit;