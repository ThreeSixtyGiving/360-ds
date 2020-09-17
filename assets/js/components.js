window.onload = (event) => {
    const links = document.body.querySelectorAll('a[target="_blank"]')

    links.forEach( tag => {          

        let spanTag = document.createElement('span');
        spanTag.className = 'screen-reader-only';
        spanTag.innerHTML = '(opens in a new tab)';

        if(tag.children.childElementCount < 1){
            tag.appendChild(spanTag)
        }
    })
};