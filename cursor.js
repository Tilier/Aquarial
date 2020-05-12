let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('a');
let buttons = document.querySelectorAll('button');
let sites = document.querySelectorAll('.item');
let otherlinks = document.querySelectorAll('.linked');

window.addEventListener('mousemove',cursor);

function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
}

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
    });

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
    });

    button.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
    });
});

sites.forEach(item => {
    item.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
    });

    item.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
    });
});

otherlinks.forEach(other => {
    other.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
    });

    other.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
    });
});