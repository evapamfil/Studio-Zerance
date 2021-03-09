document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1.2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });

document.querySelector('#contact').addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector('.contact').classList.add('open')
}, false)

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.contact').classList.remove('open')
}, false)


document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault()
    try {
        var GenderApi = require('gender-api.com-client');
    
        var genderApiClient = new GenderApi.Client('uMKGppFmMzzraRgZPG');

        var name = document.querySelector('#name').value;
        var responseGender = document.querySelector('#response');
    
        genderApiClient.getByFirstName( name, function (response) {

            document.querySelector('.response').classList.add('open')

            if(response.gender == 'female'){
                responseGender.innerHTML = "We rob banks ";
            } else if ( response.gender == 'male' ){
                responseGender.textContent = "Rosebud";
            } else {
                responseGender.innerHTML = "It’s a trap !";
            }
        });

    }
    catch(e) {
        console.log('Error:', e);
    }
} , false)

document.querySelector('.response button').addEventListener('click', function(){
    document.querySelector('.response').classList.remove('open')
    document.querySelector('.contact').classList.remove('open')
}, false)

document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger').classList.toggle('open')
    document.querySelector('.nav').classList.toggle('open')
}, false)
  
