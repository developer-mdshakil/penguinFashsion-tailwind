// add setting link in nav area control all body background
const menuitems = document.getElementById('menuitems');
const newLink = document.createElement('li');
newLink.innerHTML = `
<a class="text-base font-semibold hover:text-red-300" href="#">Setting</a>
`
newLink.addEventListener('click', function(){
    // newLink color set 
    newLink.style.color = 'white'
    // body background color set
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    // header background color set & color set
    const mainHeader = document.getElementById('main-header');
    mainHeader.style.backgroundColor = 'black';
    const links = document.getElementsByClassName('link');
    for(const link of links){
        link.style.color = 'white'
    }
    //tag backgroun color set
    const articles = document.getElementsByClassName('article');
    for( const ariticle of articles ){
        ariticle.style.backgroundColor = 'white';
        ariticle.style.color = 'black'
    }
})
menuitems.appendChild(newLink);

// banner buy now button dynamic customize
const buyNow = document.getElementById('buy-now');
buyNow.addEventListener('click', function(event){
    buyNow.parentNode.removeChild(event.target)
})