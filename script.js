var images = Array.from(document.querySelectorAll('.item img'));
var imgContainer = document.querySelector('#imgContainer');
var imgBox = document.querySelector('#imgBox');
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#prev');
var closeBtn = document.querySelector('#close');
var currentIndex;

for(var i = 0; i < images.length; i++){
    
    images[i].addEventListener("click",function(e){
        imgContainer.style.display = "flex";
        imgBox.style.backgroundImage = `url('${e.target.getAttribute('src')}')`;

        currentIndex = images.indexOf(e.target);
    });
}

function nextSlide(){
    currentIndex++;
    if(currentIndex == images.length){
        currentIndex = 0;
    }
    imgSrc = images[currentIndex].getAttribute("src");
    imgBox.style.backgroundImage = `url('${imgSrc}')`;

}

function prevSlide(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length -1;
    }
    imgSrc = images[currentIndex].getAttribute("src");
    imgBox.style.backgroundImage = `url('${imgSrc}')`;

}

function close(){
    imgContainer.style.display = "none";
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
closeBtn.addEventListener('click', close);

document.addEventListener("keydown", function(e){
    
    if(e.key == "ArrowLeft"){
        prevSlide();
    }else if(e.key == "ArrowRight"){
        nextSlide();
    }else if(e.key == "Escape"){
        close();
    }
})

imgContainer.addEventListener('click', function(e){
    if(e.target !== imgBox && e.target !== prevBtn && e.target !== nextBtn){
        close();
    }
})