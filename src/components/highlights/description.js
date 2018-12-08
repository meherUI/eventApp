import React, { Component } from 'react';   
import Fade from 'react-reveal/Fade';

class Description extends Component {
    state = {  }
    render() { 
        return ( 
            <Fade>
                <div className="center_wrapper">
                    <h2>Highlights</h2>
                    <div className="highlight_description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam necessitatibus, 
                        amet dolorum dicta suscipit, repellendus, facilis ullam maiores illum eius 
                        quis voluptate! In odio, error, inventore expedita ipsa ullam dicta 
                        neque nobis odit impedit molestiae, minus blanditiis vel? Provident
                    </div>
                </div>
            </Fade> 
         );
    }
}
 
export default Description;