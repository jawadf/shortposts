import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

const Modal = props => {

  const style={
    fontSize: '2.2rem'
  }

  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className='ui dimmer modals visible active'>
      <div onClick={(e) => e.stopPropagation()} style={style} className="ui my-modal standard modal visible active"> 
        <div className="header">{props.title}</div>
        <div className="content" >{props.content}</div>
        <div className="actions" >
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;