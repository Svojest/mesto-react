import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            <PopupWithForm
                name="form-edit"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="popup__input-container">
                    <input
                        type="text"
                        className="popup__input popup__input_type_name"
                        id="form-name"
                        placeholder="Имя"
                        name="form-name"
                        minLength={2}
                        maxLength={40}
                        required={true}
                    />
                    <span className="popup__input-error form-name-error"></span>
                    <input
                        type="text"
                        className="popup__input popup__input_type_about"
                        id="form-about"
                        placeholder="О себе"
                        name="form-about"
                        minLength={2}
                        maxLength={200}
                        required={true}
                    />
                    <span className="popup__input-error form-about-error"></span>
                    <button className="popup__button popup__button_type_save" type="submit" aria-label="Сохранить">
                        Сохранить
                    </button>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name="form-add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <fieldset className="popup__input-container">
                    <input
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
                        type="url"
                        className="popup__input popup__input_type_card-url"
                        id="card-url"
                        placeholder="Ссылка на картинку"
                        name="card-url"
                        required={true}
                    />
                    <span className="popup__input-error card-url-error"></span>
                    <button
                        type="submit"
                        className="popup__button popup__button_type_save popup__button_type_add"
                        aria-label="Создать"
                    >
                        Создать
                    </button>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm
                name="form-edit-avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <fieldset className="popup__input-container">
                    <input
                        type="url"
                        className="popup__input popup__input_type_avatar-url"
                        id="avatar-url"
                        placeholder="Ссылка на картинку"
                        name="avatar-url"
                        required={true}
                    />
                    <span className="popup__input-error avatar-url-error"></span>
                    <button className="popup__button popup__button_type_save" type="submit" aria-label="Сохранить">
                        Сохранить
                    </button>
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name="form-delete" title="Вы уверены?" onClose={closeAllPopups}>
                <fieldset className="popup__input-container popup__input-container_confirm">
                    <button
                        type="submit"
                        className="popup__button popup__button_type_save popup__button_type_confirm"
                        aria-label="Да"
                    >
                        Да
                    </button>
                </fieldset>
            </PopupWithForm>
        </div>
    );

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }
}

export default App;
