const element = document.querySelector('.main__feature');
element.classList.add('animate__animated', 'animate__bounceIn');
element.onclick = () => {
    element.classList.add('animate__animated', 'animate__bounceIn');
    console.log("clicked");
};