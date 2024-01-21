export const getEffectiveBackgroundColor = (element: HTMLElement) => {
    let backgroundColor = getComputedStyle(element).backgroundColor;
    let currentElement = element;

    while (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') {
        if (currentElement.parentElement) {
            currentElement = currentElement.parentElement;
        } else {
            break;
        }

        backgroundColor = getComputedStyle(currentElement).backgroundColor;
    }

    return (backgroundColor === 'rgba(0, 0, 0, 0)' || backgroundColor === 'transparent') ? 'white' : backgroundColor;
};

