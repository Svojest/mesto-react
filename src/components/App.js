import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard(null);
    }

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
                buttonText="Сохранить"
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
                </fieldset>
            </PopupWithForm>

            <PopupWithForm
                name="form-add"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                buttonText="Добавить"
            >
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
                </fieldset>
            </PopupWithForm>

            <PopupWithForm
                name="form-edit-avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                buttonText="Сохранить"
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
                </fieldset>
            </PopupWithForm>

            <PopupWithForm name="form-delete" title="Вы уверены?" onClose={closeAllPopups} buttonText="Да" />
        </div>
    );
}

export default App;
