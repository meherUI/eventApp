import React, { Component } from 'react';
import { Drawer,List, ListItem } from '@material-ui/core';

const SideDrawer = (props) => {
    return ( 
        <Drawer 
            anchor="right" 
            open={props.open} 
            onClose={() => props.onClose(false)} 
        >
       <List component="nav">
         <ListItem button onCLick={()=> console.log('Featured')}>Featured</ListItem>
         <ListItem button onCLick={()=> console.log('Venue NFO')}>Venue NFO</ListItem>
         <ListItem button onCLick={()=> console.log('Highlights')}>Highlights</ListItem>
         <ListItem button onCLick={()=> console.log('Pricing')}>Pricing</ListItem>
         <ListItem button onCLick={()=> console.log('Location')}>Location</ListItem>
       </List>
           
        </Drawer>
     );
}
 
export default SideDrawer;