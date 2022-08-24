import { CurrentUserContext } from 'context/CurrentUserContext';
import React from 'react';
import { api } from '../utils/api';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, userCards]) => {
                setCurrentUser(userData);
                setCards(userCards);
            })
            .catch(() => {
                console.log('Произошла ошибка');
            });
    }, []);

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
    function handleUpdateUser(newUserInfo) {
        api.setUserInfo(newUserInfo)
            .then((res) => {
                if (res) {
                    setCurrentUser(res);
                    closeAllPopups();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleDeleteCard(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleUpdateAvatar(newAvatar) {
        api.setAvatar(newAvatar)
            .then((res) => {
                if (res) {
                    setCurrentUser(res);
                    closeAllPopups();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleAddPlaceSubmit(newCard) {
        api.addCard(newCard)
            .then((res) => {
                if (res) {
                    setCards([res, ...cards]);
                    closeAllPopups();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />

                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardDelete={handleDeleteCard}
                    onCardLike={handleCardLike}
                    cards={cards}
                />
                <Footer />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                ></EditProfilePopup>

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                ></AddPlacePopup>

                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                ></EditAvatarPopup>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
