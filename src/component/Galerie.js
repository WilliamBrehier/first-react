import React from 'react';
import './Galerie.css';

class Galerie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "imgIndex": 0
        }
    }

    switchSlideRight = () => {
        if(this.state.imgIndex < this.props.urls.length -1){
            this.setState({
                    "imgIndex": this.state.imgIndex + 1
            });
        }else if (this.state.imgIndex === this.props.urls.length -1){
            this.setState({
                    "imgIndex": 0
            });
        }
        
    }


    switchSlideLeft = () => {
        if(this.state.imgIndex > 0){
            this.setState({
                "imgIndex": this.state.imgIndex - 1
            });
        }else if (this.state.imgIndex === 0){
            this.setState({
                "imgIndex": this.props.urls.length -1
            });
        }
    }


    render() {
        const {imgIndex} = this.state;
        const {urls} = this.props;

        return (
            <div className='Slide'>
            <div className="galerie">  
                <img src= {urls[imgIndex]}/>
            </div>
            {
                imgIndex > 0 &&
                <button onClick={this.switchSlideLeft}>Précédent</button>
            }
            {
                imgIndex < urls.length -1 &&
                <button onClick={this.switchSlideRight}>Suivant</button>
            }    
                
            </div>
            
        );
    }
}


export default Galerie;