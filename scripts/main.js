const container = document.querySelector('.container'); 

const heartButton = document.querySelector('.elements__like'); 
heartButton.addEventListener('click', () => 
heartButton.classList.toggle('elements__like-active')); 

const editButton = document.querySelector('.profile__edit-button'); 
const popupClose = document.querySelector('.popup__close'); 
const popup = container.querySelector('.popup'); 
editButton.addEventListener('click', toggleClass); 
popupClose.addEventListener('click', toggleClass); 


function toggleClass() { 
    popup.classList.toggle('popup_visible'); 
} 

const formElement = container.querySelector('.popup__container') 

const nameInput = container.querySelector('.popup__input_name'); 
const jobInput = container.querySelector('.popup__input_job'); 
function formSubmitHandler(evt) { 
    evt.preventDefault(); 

    jobInput.getAttribute('value:'); 
    nameInput.getAttribute('value'); 

    const ProfileTitle = container.querySelector('.profile__title'); 
    const ProfileSubtitle = container.querySelector('.profile__subtitle'); 
    ProfileTitle.textContent = nameInput.value; 
    ProfileSubtitle.textContent = jobInput.value; 
    toggleClass(); 
}

formElement.addEventListener('submit', formSubmitHandler); 