import { CurrentUserContext } from 'context/CurrentUserContext';
import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
    const currentUser = React.useContext(CurrentUserContext);

    const avatarRef = useRef();

    useEffect(() => {
        avatarRef.current.value = currentUser.avatar;
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="form-edit-avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Сохранить"
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__input-container">
                <input
                    ref={avatarRef}
                    type="url"
                    className="popup__input popup__input_type_avatar-url"
                    id="avatar-url"
                    placeholder="Ссылка на картинку"
                    name="avatar-url"
                    required={true}
                />
                <span className="popup__input-error avatar-url-error"></span>
            </fieldset>
        </PopupWithForm>
    );
}
