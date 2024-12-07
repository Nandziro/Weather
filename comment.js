const reviewUser = document.querySelector('.comment__name');
const reviewRating = document.querySelector('.comment__rating');
const reviewText = document.querySelector('.comment__text');
let btnInput = document.querySelector('.comment__btn')
let revList = document.querySelector('.reviews')

const colors = ["#ac2b3b", "#8C1B2F", "#59202B", "#FB2E01", "#8C031C", "#591202"];
function changeColor(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex]
}
btnInput.addEventListener('click', function(){
    let userValue = reviewUser.value
    let rateValue = reviewRating.value
    let textValue = reviewText.value
    if(reviewUser === '' && reviewRating  === '' && reviewText  === ''){
        alert("Не всі поля заповнені")
    }
    else{
        localStorage.setItem('user', userValue);
        localStorage.setItem('rating', rateValue);
        localStorage.setItem('text', textValue);

        let reviewsBody = document.createElement('div')
        reviewsBody.classList.add('reviews__box')
        revList.appendChild(reviewsBody)
        reviewsBody.style.backgroundColor = changeColor();

        let getUser = localStorage.getItem('user')
        let getRating = localStorage.getItem('rating')
        let getText = localStorage.getItem('text')

        reviewsBody.innerHTML = `<h3> Відгук користувача ${getUser}</h3> Оцінка сайту: ${getRating} <br> Текст відгуку: ${getText}`
    }
})
