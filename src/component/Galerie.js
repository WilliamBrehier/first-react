import React from 'react';
import './Galerie.css';

class Galerie extends React.Component {
    render() {
        const {urls, title} = this.props;

        return (
            <div className="galerie">
                {
                    urls.map(url => <img src={url} alt={"Image du film " + title} />)
                }
            </div>
        );
    }
}

export default Galerie;