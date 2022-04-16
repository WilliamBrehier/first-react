import React from "react";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <header>
                <h1>Mes films préférés</h1>
                <small>Une liste de supers films à  voir et à revoir</small>
            </header>
        );
    }
}

export default Header;