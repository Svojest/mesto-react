import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

export default function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userAbout, setUserAbout] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, userCards]) => {
                setUserName(userData.name);
                setUserAbout(userData.about);
                setUserAvatar(userData.avatar);
                setCards(userCards);
            })
            .catch(() => {
                console.log('Произошла ошибка');
            });
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__container-avatar">
                        <img src={userAvatar} alt="Аватар пользователя" className="profile__image" />
                        <button
                            onClick={props.onEditAvatar}
                            className="profile__btn-avatar"
                            type="button"
                            name="update-avatar"
                            id="update-avatar"
                            aria-label="avatar"
                        ></button>
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-group">
                            <h1 className="profile__title">{userName}</h1>
                            <button
                                onClick={props.onEditProfile}
                                className="profile__btn-edit"
                                type="button"
                                name="edit-profile"
                                id="edit-profile"
                                aria-label="edit"
                            ></button>
                        </div>
                        <p className="profile__subtitle">{userAbout}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} className="profile__btn-add" type="button" aria-label="add"></button>
            </section>
            <section className="gallery">
                <ul className="gallery__item">
                    {cards.map((card, _id) => (
                        <Card card={card} key={_id} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    );
}
