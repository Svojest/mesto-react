import { CurrentUserContext } from 'context/CurrentUserContext';
import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState(currentUser.name);
    const [about, setAbout] = React.useState(currentUser.about);

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        console.log('ho');
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name,
            about: about,
        });
    }

    return (
        <PopupWithForm
            name="form-edit"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__input-container">
                <input
                    value={name || ''}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="popup__input popup__input_type_name"
                    id="form-name"
                    placeholder="Имя"
                    name="form-name"
                    minLength={2}
                    maxLength={40}
                    required={true}
                />
                <span className="popup__input-error form-name-error" />
                <input
                    value={about || ''}
                    onChange={(e) => setAbout(e.target.value)}
                    type="text"
                    className="popup__input popup__input_type_about"
                    id="form-about"
                    placeholder="О себе"
                    name="form-about"
                    minLength={2}
                    maxLength={200}
                    required={true}
                />
                <span className="popup__input-error form-about-error" />
            </fieldset>
        </PopupWithForm>
    );
}
