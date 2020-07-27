import React from 'react';
import './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];

    if(props.open){
        attachedClasses = ['SideDrawer', 'Open'];
    }

    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked = {props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%"></Logo>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxiliary>
    );
}

export default sideDrawer;