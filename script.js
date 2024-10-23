const boxes = document.querySelectorAll('.box');
const images = document.querySelectorAll('img');
const stoonsDivs = document.querySelectorAll('.stoons'); // Select the stoons divs
let timeLeft = 60;
function setTimeLeft(){
    let msg = document.getElementById("countdown-message");
    if(msg.innerHTML == "player1 playing"){
        msg.innerHTML="player2 playing";
        timeLeft = 60;
        }else{
        msg.innerHTML="player1 playing";
        timeLeft = 60;
    }
}

let player = document.querySelector('.stoon');

if (player) {
    let currentBox = player.parentElement;

    // Adding drag and drop functionality
    images.forEach(image => {
        image.setAttribute('draggable', 'true'); // Make images draggable

        image.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', image.className); // Store the class name of the image being dragged
            e.dataTransfer.setData('id', image.id); // Store the id of the image being dragged if needed
        });
    });
    function re() {
        location.reload();
    }
    
    function reA() {
        location.reload();
        
        localStorage.setItem("score1", 0);
        localStorage.setItem("score2", 0);
    }
    // Handle drag over event on stoons divs
    stoonsDivs.forEach(stoon => {
        stoon.addEventListener('dragover', (e) => {
            e.preventDefault(); // Prevent default to allow drop
        });

        stoon.addEventListener('drop', (e) => {
            e.preventDefault();
            const className = e.dataTransfer.getData('text/plain'); // Get the class name of the dragged image
            const imageId = e.dataTransfer.getData('id'); // Get the id of the dragged image if needed

            // Find the image being dragged
            const draggedImage = document.getElementById(imageId); // Use the id to find the image
            if (draggedImage) {
                // Append the dragged image to the stoons div
                stoon.appendChild(draggedImage);
                setTimeLeft();
                let img1 = stoon.getElementsByClassName("img1");
                let img2 = stoon.getElementsByClassName("img2");
                if(img1.length>=22){
                    localStorage.setItem('score1', Number(localStorage.getItem("score1"))+1);
                    document.getElementById("score1").innerHTML = localStorage.getItem("score1");
                    re();
                }else if(img2.length>=22){
                    localStorage.setItem('score2', Number(localStorage.getItem("score2"))+1);
                    document.getElementById("score2").innerHTML = localStorage.getItem("score2");
                    re();
                }else{
                    document.getElementById("player1stoon").innerHTML = img1.length;
                    document.getElementById("player2stoon").innerHTML = img2.length;
                }
                
            }
        });
    });
    
    document.getElementById("score1").innerHTML = localStorage.getItem("score1");
    document.getElementById("score2").innerHTML = localStorage.getItem("score2");
    // Adding click functionality to boxes to move images
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            let boxRect = box.getBoundingClientRect();
            let currentRect = currentBox.getBoundingClientRect();

            let deltaX = Math.abs(boxRect.x - currentRect.x);
            let deltaY = Math.abs(boxRect.y - currentRect.y);

            if ((deltaX < 90 && deltaY === 0) || (deltaY < 90 && deltaX === 0)) {
                if (!box.firstChild) {
                    currentBox = box;
                    box.appendChild(player);
                    setTimeLeft();
                } else {
                    console.log('لا يمكن تحريك الصورة إلى صندوق يحتوي على صورة بالفعل.');
                }
            }
        });
    });

    boxes.forEach(boxone => {
        boxone.addEventListener('click', () => {
            boxes.forEach(onceOfAll => {
                onceOfAll.classList.remove('active');
            });
            images.forEach(img => {
                img.classList.remove('stoon');
            });
            if (boxone.firstChild) {
                boxone.classList.add("active");
                boxone.firstChild.classList.add("stoon");
                player = boxone.firstChild;
                currentBox = boxone;
            }
        });
    });
} else {
    console.error('No player image with class "stoon" found.');
}

/*----------------------*/

let countdownElement = document.getElementById('countdown');
let countdownTimer = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {setTimeLeft()}
}, 1000);


