import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const modal = (props) => (
    <Auxiliary>
        <Backdrop  show = {props.show} clicked = {props.modalClose}/>
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}
            className="Modal">
            {props.children}
        </div>
    </Auxiliary>

);

export default modal;