import { CurrentUserContext } from 'context/CurrentUserContext';
import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const currentUser = React.useContext(CurrentUserContext);

    const [nameCard, setNameCard] = React.useState('');
    const [linkCard, setLinkCard] = React.useState('');

    React.useEffect(() => {
        setNameCard('');
        setLinkCard('');
    }, [currentUser]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        console.log('ho');
        // Передаём значения управляемых компонентов во внешний обработчик
        onAddPlace({
            name: nameCard,
            link: linkCard,
        });
    }
    return (
        <PopupWithForm
            name="form-add"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            buttonText="Добавить"
            onSubmit={handleSubmit}
        >
            <fieldset className="popup__input-container">
                <input
                    value={nameCard || ''}
                    onChange={(e) => setNameCard(e.target.value)}
                    type="text"
                    className="popup__input popup__input_type_card-title"
                    id="card-name"
                    placeholder="Название"
                    name="card-name"
                    minLength={2}
                    maxLength={30}
                    required={true}
                />
                <span className="popup__input-error card-name-error"></span>
                <input
                    value={linkCard || ''}
                    onChange={(e) => setLinkCard(e.target.value)}
                    type="url"
                    className="popup__input popup__input_type_card-url"
                    id="card-url"
                    placeholder="Ссылка на картинку"
                    name="card-url"
                    required={true}
                />
                <span className="popup__input-error card-url-error"></span>
            </fieldset>
        </PopupWithForm>
    );
}
