import React from 'react';

export default function PopupWithForm({ isOpen, onClose, name, title, buttonText, children, onSubmit }) {
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form ${name}`} name={name} onSubmit={onSubmit}>
                    {children}

                    <button type="submit" className="popup__button popup__button_type_save" aria-label="submit">
                        {buttonText}
                    </button>
                    <button
                        type="reset"
                        className="popup__button popup__button_type_close"
                        aria-label="reset"
                        onClick={onClose}
                    ></button>
                </form>
            </div>
        </div>
    );
}
