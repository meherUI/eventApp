import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';
const MyButton = (props) => {
    return ( 
        <Button
            href="#"
            variant="contained"
            size={props.size}
            style={{
                background:props.bck,
                color:props.color
            }}
        >
            <img 
            src={TicketIcon}
            className="iconImage"
            alt="icon_btn"/>
            {props.text}
        </Button>
     );
}
 
export default MyButton;