import React from 'react';


class Header extends React.Component {
    render() {
        return (

            <div className="container-fluid bg-light pl-0 pr-0">
                <div className="row">
                    <div className="col-4">
                    
                        <img src="http://www.sylvie-destaing-avocat.fr/images/accueil/accueil-img-header.jpg" alt="header" height="100" width="100%" />
                    </div>
                    <div className="col-4 pt-3">
                        <h1>My Touitteur</h1>
                    </div>
                    <div className="col-4 ">
                        <img src="http://www.sylvie-destaing-avocat.fr/images/accueil/accueil-img-header.jpg" alt="header" height="100" width="100%" />
                    </div>
                </div>
            </div>


        );
    }
}
export default Header;