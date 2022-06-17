const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clounds = document.querySelector('.clounds');

var pointFinish = false;

const jump = () => {
    mario.classList.add('jump');
    mario.src = 'img/mariofly.gif';

    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src = 'img/mario.gif';

    }, 500);
};


const keydown = document.addEventListener('keydown', jump);

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloundPosition = +window.getComputedStyle(clounds).right.replace('px', '');


    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clounds.style.animation = 'none';
        clounds.style.right = `${cloundPosition}px`;

        pointFinish = true

        clearInterval(loop);

        document.addEventListener('keydown', () => {
            location.reload();
        });



    }

}, 10)

var pointsNow = 0;

const points = setInterval(() => {

    const classPoints = document.querySelector('.points');

    classPoints.innerHTML = parseInt(`${pointsNow++}`);



    if (pointFinish == true) {
        clearInterval(points)
    }



}, 150)

const fast = () => {
    if (pointsNow === 30) {
        document.querySelector('.pipe').classList.add('fast');
    }
}