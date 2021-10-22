export default function scrollToInit() {
    const elLinksScrollTo = document.querySelectorAll('[scroll-to]');

    elLinksScrollTo.forEach((elLink, index) => {
        elLink.addEventListener('click', (e) => {
            e.preventDefault();
            actionScrollTo(elLink);
        });
    });

}

const actionScrollTo = (el) => {

    console.log('hello');

    const id = el.getAttribute('href');
    const elScrollTo = document.querySelector(id);

    if (elScrollTo) {
        window.scrollTo({
            top: elScrollTo.getBoundingClientRect().top + window.pageYOffset,
            behavior: 'smooth'
        });
    }
}
