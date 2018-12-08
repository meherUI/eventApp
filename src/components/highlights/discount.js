import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import MyButton from '../utils/myButton';
class Discount extends Component {
    state = { 
        discountStart:0,
        discountEnd:30
     }
     porcentage=()=>{
         if(this.state.discountStart < this.state.discountEnd){
             this.setState({
                 discountStart : this.state.discountStart +1
             })
         }
     }


     componentDidUpdate(){
         setTimeout(()=>{
            this.porcentage();

         },30)
              }

    render() { 
        return ( 
            <div className="center_wrapper">
                <div className="discount_wrapper">
                <Fade onReveal={()=>this.porcentage()}>
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                    <div className="discount_description">
                        <h3>Purchase Tickets befroe Dec 25,2018</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam necessitatibus, 
                        amet dolorum dicta suscipit, repellendus, facilis ullam maiores illum eius 
                        quis voluptate! In odio, error, inventore expe</p>
                        <MyButton
                            text = "Purchase Ticket"
                            size="small"
                            bck="#ffa800"
                            color="#ffffff"
                        />
                    </div>
                </Fade>
                </div>
            </div>
         );
    }
}
 
export default Discount;