import { CurrentUserContext } from 'context/CurrentUserContext';
import React from 'react';

export default function Card({ onCardClick, onCardLike, onCardDelete, card }) {
    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = `${isOwn ? 'card__bin' : 'card__bin_hidden'}`;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `${isLiked ? 'card__like_active' : 'card__like'}`;

    function handleClick() {
        onCardClick(card);
    }
    function handleLikeClick() {
        onCardLike(card);
    }
    function handleDeleteCard() {
        onCardDelete(card);
    }

    return (
        <li className="card">
            <button
                onClick={handleDeleteCard}
                aria-label="Удалить"
                className={cardDeleteButtonClassName}
                type="button"
            />
            <img onClick={handleClick} src={card.link} alt={card.name} className="card__image" />
            <div className="card__info">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-container">
                    <button
                        onClick={handleLikeClick}
                        aria-label="Нравится"
                        className={cardLikeButtonClassName}
                        type="button"
                    />
                    <div className="card__like-count">{card.likes.length}</div>
                </div>
            </div>
        </li>
    );
}
