import React from 'react';

export default function ImagePopup(props) {
    return (
        <div className={`popup popup_image_open ${props.card && 'popup_opened'} `}>
            <div className="popup__container-image">
                <img src={props.card && props.card.link} alt={props.card && props.card.name} className="popup__image" />
                <h2 className="popup__name-image">{props.card && props.card.name}</h2>
                <button
                    onClick={props.onClose}
                    type="reset"
                    className="popup__button popup__button_type_close"
                    id="close-popupImage"
                    aria-label="reset"
                ></button>
            </div>
        </div>
    );
}
