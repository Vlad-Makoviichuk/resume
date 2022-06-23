window.onload = function () {
    const itemRefs = document.querySelectorAll('.resume-content__item, .skills-list');
    itemRefs.forEach((itemRef, idx) => {
        const animation = itemRef.animate(
            [
                { transform: 'translateX(15%)', opacity: 0 },
                { transform: 'translateX(0)', opacity: 1 }
            ],
            {
                duration: 800,
                delay: idx * 200,
            }
        );

        animation.onfinish = evt => {
            itemRef.classList.add('is-animated');
        }
    });
}