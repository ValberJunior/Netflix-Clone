//jquery
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})


//Events

// Header

const icon = document.getElementById('icon');
const sub_menu = document.getElementById('sub-menu');
let visible = false;

icon.addEventListener('click', ()=>{

    let action = !visible;
    if(action){
        sub_menu.style.display = 'flex';
        return visible = true;
    } else{
        sub_menu.style.display = 'none';
        return visible = false;
    }

})

//audio

const audio = document.getElementById('audio');
const sound = document.getElementById('sound');
let isPlaying = false;

sound.addEventListener('click',()=>{
    let action = !isPlaying;

    if(action){
        audio.play();
        sound.innerHTML = '<i class="fas fa-volume-up"></i>';
        return isPlaying = true;
        }
        else{
        audio.pause() ;
        sound.innerHTML = '<i class="fas fa-volume-mute"></i>';
        return isPlaying = false;
        }

})