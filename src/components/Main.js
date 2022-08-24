import { CurrentUserContext } from 'context/CurrentUserContext';
import React from 'react';
import Card from './Card';

export default function Main({
    cards,
    onEditProfile,
    onEditAvatar,
    onAddPlace,
    onCardClick,
    onCardDelete,
    onCardLike,
}) {
    const currentUser = React.useContext(CurrentUserContext);

    //

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__container-avatar">
                        <img src={currentUser.avatar} alt="Аватар пользователя" className="profile__image" />
                        <button
                            onClick={onEditAvatar}
                            className="profile__btn-avatar"
                            type="button"
                            name="update-avatar"
                            id="update-avatar"
                            aria-label="avatar"
                        />
                    </div>
                    <div className="profile__info">
                        <div className="profile__title-group">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button
                                onClick={onEditProfile}
                                className="profile__btn-edit"
                                type="button"
                                name="edit-profile"
                                id="edit-profile"
                                aria-label="edit"
                            />
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button onClick={onAddPlace} className="profile__btn-add" type="button" aria-label="add" />
            </section>
            <section className="gallery">
                <ul className="gallery__item">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            key={card._id}
                            onCardClick={onCardClick}
                            onCardDelete={onCardDelete}
                            onCardLike={onCardLike}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}
