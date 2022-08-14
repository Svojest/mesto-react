import React from 'react';

export default function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <form className={`popup__form ${props.name}`} name={props.name} noValidate />
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button
                    type="reset"
                    className="popup__button popup__button_type_close"
                    aria-label="reset"
                    onClick={props.onClose}
                ></button>
            </div>
        </div>
    );
}
