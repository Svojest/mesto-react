export { settingSelectors, btnEditProfile, btnAddCard, btnUpdateAvatar, inputAboutProfile, inputTitleProfile };

const settingSelectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButton: '.popup__button_type_save',
    inactiveButton: 'popup__button_inactive',
    inputErrorSelector: '.popup__input-error',
    errorText: 'popup__input-error_active',
    inputInvalid: 'popup__input_invalid',
};

// Кнопки для открытия popup
const btnEditProfile = document.querySelector('.profile__btn-edit');
const btnAddCard = document.querySelector('.profile__btn-add');
const btnUpdateAvatar = document.querySelector('.profile__btn-avatar');
// Содержимое Edit
const inputTitleProfile = document.querySelector('.popup__input_type_name');
const inputAboutProfile = document.querySelector('.popup__input_type_about');
