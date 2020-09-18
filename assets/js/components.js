window.onload = (event) => {
    const links = document.body.querySelectorAll('a[target="_blank"]')

    links.forEach( aTag => {          
        let spanTag = document.createElement('span');
        spanTag.className = 'screen-reader-only';
        spanTag.innerHTML = '(opens in a new tab)';

        if (aTag.querySelectorAll('span.screen-reader-only').length === 0) {
            aTag.appendChild(spanTag)
        }
    })
};