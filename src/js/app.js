
const XML_SVG_LOGO = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 13.02V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 14.99V17C22 21 21 22 17 22H7C3 22 2 21 2 17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.24147 11.6364L7.20453 13.3353L8.17613 11.6364H9.1051L7.74431 13.8182L9.11647 16.0001H8.18749L7.20453 14.3694L6.22442 16.0001H5.2926L6.65056 13.8182L5.30965 11.6364H6.24147Z" fill="black"/>
<path d="M9.97726 16.0001V11.6364H10.7926V12.3467H10.8466C10.9375 12.1061 11.0862 11.9186 11.2926 11.7842C11.499 11.6478 11.7462 11.5796 12.0341 11.5796C12.3257 11.5796 12.5701 11.6478 12.767 11.7842C12.9659 11.9205 13.1127 12.108 13.2074 12.3467H13.2528C13.357 12.1137 13.5227 11.9281 13.75 11.7898C13.9773 11.6497 14.2481 11.5796 14.5625 11.5796C14.9583 11.5796 15.2812 11.7037 15.5312 11.9518C15.7831 12.1999 15.9091 12.5739 15.9091 13.0739V16.0001H15.0596V13.1535C15.0596 12.858 14.9792 12.644 14.8182 12.5114C14.6572 12.3789 14.465 12.3126 14.2415 12.3126C13.965 12.3126 13.75 12.3978 13.5966 12.5682C13.4432 12.7368 13.3665 12.9537 13.3665 13.2188V16.0001H12.5199V13.0995C12.5199 12.8628 12.446 12.6724 12.2983 12.5285C12.1506 12.3845 11.9583 12.3126 11.7216 12.3126C11.5606 12.3126 11.4119 12.3552 11.2756 12.4404C11.1411 12.5237 11.0322 12.6402 10.9489 12.7898C10.8674 12.9395 10.8267 13.1128 10.8267 13.3097V16.0001H9.97726Z" fill="black"/>
<path d="M17.897 10.1819V16.0001H17.0476V10.1819H17.897Z" fill="black"/>
</svg>`;
const LOADING_BUTTON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12C2 17.52 6.48 22 12 22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3"/>
</svg>`;
const LOADING_MEDIAPLANS_TEXT = `<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.26136 10.2727L8.34659 4H7.1875L7.27273 10.2727H8.26136ZM7.22585 12.5696C7.37642 12.7202 7.55682 12.7955 7.76705 12.7955C7.90909 12.7955 8.03693 12.7614 8.15057 12.6932C8.26705 12.6222 8.35938 12.5284 8.42756 12.4119C8.49858 12.2955 8.53409 12.1676 8.53409 12.0284C8.53409 11.8182 8.45881 11.6378 8.30824 11.4872C8.15767 11.3366 7.97727 11.2614 7.76705 11.2614C7.55682 11.2614 7.37642 11.3366 7.22585 11.4872C7.07528 11.6378 7 11.8182 7 12.0284C7 12.2386 7.07528 12.419 7.22585 12.5696Z" fill="#949494"/>
</svg>
</span>Медиаплан в процессе составления`;
const LOADING_SUCCESS_TEXT = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="#1CC437"/>
<path d="M3.83333 7.375L5.64226 9.1387C6.41901 9.89604 7.65791 9.89604 8.43466 9.1387L12.1667 5.5" stroke="white" stroke-width="1.5"/>
</svg>`;
const DOWNLOAD__BUTTON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 12L12 17L7 12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5L12 16" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<line x1="5.75" y1="18.25" x2="18.25" y2="18.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;
const LOADING_REPORTS_TEXT = `<span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.26136 10.2727L8.34659 4H7.1875L7.27273 10.2727H8.26136ZM7.22585 12.5696C7.37642 12.7202 7.55682 12.7955 7.76705 12.7955C7.90909 12.7955 8.03693 12.7614 8.15057 12.6932C8.26705 12.6222 8.35938 12.5284 8.42756 12.4119C8.49858 12.2955 8.53409 12.1676 8.53409 12.0284C8.53409 11.8182 8.45881 11.6378 8.30824 11.4872C8.15767 11.3366 7.97727 11.2614 7.76705 11.2614C7.55682 11.2614 7.37642 11.3366 7.22585 11.4872C7.07528 11.6378 7 11.8182 7 12.0284C7 12.2386 7.07528 12.419 7.22585 12.5696Z" fill="#949494"/>
</svg>
</span>Отчет формируется`;
const DATE_FORMAT = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
}


function createItemForList() {
    let li = document.createElement('li')
    let paragraph = document.createElement('p');
    let xmlSvg = document.createElement('div');
    let button = document.createElement('button');
    const currentDate = new Date().toLocaleString('ru', {
        month: 'numeric',
        day: 'numeric'
    });
    li.className = 'mediaPlan__item';
    paragraph.className = 'mediaPlan__item-text';
    paragraph.innerHTML = `Companyname ${currentDate}`;
    xmlSvg.className = 'mediaPlan__item-xmlLogo';
    xmlSvg.innerHTML = XML_SVG_LOGO;
    button.className = 'mediaPlan__item-button';
    button.innerHTML = LOADING_BUTTON;
    li.append(xmlSvg)
    li.append(paragraph)
    li.append(button)
    return li;
}


let ul = document.querySelector('#main__content__office__chat-inner-list');
let content = document.querySelector('#main__content__office__chat-inner');

function sendMessage() {
    let message = document.getElementById("message").value;
    let liMessage = document.createElement('li');
    let currentDate = new Date().toLocaleString('ru', { hour: 'numeric', minute: 'numeric' })
    liMessage.className = 'main__content__office__chat-inner-list-li';

    let messageText = document.createElement('div');
    messageText.className = 'main__content__office__chat-inner-list-li-text';
    messageText.innerText = message;


    let date = document.createElement('p');
    date.innerHTML = `${currentDate}`;

    liMessage.appendChild(messageText)
    liMessage.appendChild(date);
    console.log(liMessage);
    requestAnswer().then(v=> {
        setTimeout(() => {
            ul.appendChild(v);
        }, 3000)
        
    });

    if (message.trim()) {
        ul.appendChild(liMessage);
        document.getElementById("message").value = "";
        content.style.overflow = 'scroll';
    }
}

async function requestAnswer() {
    const liForAnswer = document.createElement('li');
    liForAnswer.className = 'main__content__office__chat-inner-list-li-answer';
    let date = document.createElement('p');
    let currentDate = new Date().toLocaleString('ru', { hour: 'numeric', minute: 'numeric' })

    date.innerHTML = `${currentDate}`;

    let messageText = document.createElement('div');
    messageText.className = 'main__content__office__chat-inner-list-li-text';
    fetch(`https://jsonplaceholder.typicode.com/comments/${Math.round(Math.random() * 501)}`).then(v => v.json()).then(v => 
        messageText.innerText = v.body
    );
    liForAnswer.appendChild(messageText);
    liForAnswer.appendChild(date);

    return liForAnswer;
}





const stillText = document.querySelector('#media__inner-still');
const media = document.querySelector('#media__inner');
const mediaList = document.querySelector('#media__inner-list');
const logo = document.querySelector('#main__content__files__logo');
const text = document.querySelector('#main__content__files__description');


function requestMediaPlan() {
    const currentDate = new Date().toLocaleString('ru', DATE_FORMAT);
    text.style.display = 'none';
    logo.style.display = 'none';
    document.querySelector('#media').style.display = 'block';
    let loadingText = document.createElement('div');
    loadingText.innerHTML = LOADING_MEDIAPLANS_TEXT;
    loadingText.className = 'loading__text';
    mediaList.appendChild(createItemForList());
    media.appendChild(loadingText);
    let items = Array.from(mediaList.children);
    for (let mediaListItem of items) {
        setTimeout(() => {
            mediaListItem.children[2].innerHTML = DOWNLOAD__BUTTON;
            mediaListItem.children[2].style.backgroundColor = '#F4D4ED'
            loadingText.innerHTML = `${LOADING_SUCCESS_TEXT} Медиаплан от ${currentDate} готов`;
            setTimeout(() => {
                loadingText.style.display = 'none';
            }, 2000)
        }, 2000)
    }
    if (items.length > 3 && media.style.overflow !== 'scroll') {
        stillText.style.display = 'block';
    } else {
        stillText.style.display = 'none';
    }
    document.querySelector('#media').style.display = "block";
}





function requestReport() {
    let stillText = document.querySelector('#report__inner-still');
    let report = document.querySelector('#report__inner');
    let reportList = document.querySelector('#report__inner-list');
    const currentDate = new Date().toLocaleString('ru', DATE_FORMAT);
    text.style.display = 'none';
    logo.style.display = 'none';
    document.querySelector('#report').style.display = 'block';
    let loadingText = document.createElement('div');
    loadingText.innerHTML = LOADING_REPORTS_TEXT;
    loadingText.className = 'loading__text';
    reportList.appendChild(createItemForList());
    report.appendChild(loadingText);
    let items = Array.from(reportList.children);
    for (let reportListItem of items) {
        setTimeout(() => {
            reportListItem.children[2].innerHTML = DOWNLOAD__BUTTON;
            reportListItem.children[2].style.backgroundColor = '#F4D4ED'
            loadingText.innerHTML = `${LOADING_SUCCESS_TEXT} Отчет от ${currentDate} готов`;
            setTimeout(() => {
                loadingText.style.display = 'none';

            }, 2000)
        }, 2000)
    }
    if (items.length > 3 && report.style.overflow !== 'scroll') {
        stillText.style.display = 'block';
    } else {
        stillText.style.display = 'none';
    }
    document.querySelector('#report').style.display = "block";
}

function showMoreReports() {
    let stillText = document.querySelector('#report__inner-still');
    let report = document.querySelector('#report__inner');
    stillText.style.display = 'none';
    report.style.overflow = 'scroll';
}

function showMoreMediaPlans() {
    let stillText = document.querySelector('#media__inner-still');
    let media = document.querySelector('#media__inner');
    stillText.style.display = 'none';
    media.style.overflow = 'scroll';
}


function closeMoreMediaPlans() {
    let media = document.querySelector('#media__inner');
    let btn = document.querySelector("#media__open-btn");
    if (btn.style.transform === '') {
        btn.style.transform = "rotateX(180deg)";
    } else {
        btn.style.transform = "";
    }
    if (media.style.display === 'none') {
        media.style.display = 'block';
    } else {
        media.style.display = 'none';
    }
}

function closeMoreReport() {
    let report = document.querySelector('#report__inner');
    let btn = document.querySelector("#report__open-btn");
    if (btn.style.transform === '') {
        btn.style.transform = "rotateX(180deg)";
    } else {
        btn.style.transform = "";
    }
    if (report.style.display === 'none') {
        report.style.display = 'block';
    } else {
        report.style.display = 'none';
    }
}

function openHelperSettings() {
    let helper = document.querySelector('#main__content__helper');
    if (helper.style.visibility === 'hidden') {
        helper.style.visibility = 'visible';
    } else {
        helper.style.visibility = 'hidden';
    }
}