import React from 'react';

export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card">
            <button aria-label="Удалить" className="card__bin" type="button"></button>
            <img onClick={handleClick} src={props.card.link} alt={props.card.name} className="card__image" />
            <div className="card__info">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-container">
                    <button aria-label="Нравится" className="card__like" type="button"></button>
                    <div className="card__like-count">{props.card.likes.length}</div>
                </div>
            </div>
        </li>
    );
}
