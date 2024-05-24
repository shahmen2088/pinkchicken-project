function createItemForList() {
    let div = document.createElement('div')
    let paragraph = document.createElement('p');
    let xmlSvg = document.createElement('div');
    let button = document.createElement('button');
    div.className = 'mediaPlan__item';
    paragraph.className = 'mediaPlan__item-text';
    paragraph.innerHTML = 'Companyname 10/23';
    xmlSvg.className = 'mediaPlan__item-xmlLogo';
    xmlSvg.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2H17C19 2 20 3 20 5V6.38" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 13.02V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22 14.99V17C22 21 21 22 17 22H7C3 22 2 21 2 17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.24147 11.6364L7.20453 13.3353L8.17613 11.6364H9.1051L7.74431 13.8182L9.11647 16.0001H8.18749L7.20453 14.3694L6.22442 16.0001H5.2926L6.65056 13.8182L5.30965 11.6364H6.24147Z" fill="black"/>
    <path d="M9.97726 16.0001V11.6364H10.7926V12.3467H10.8466C10.9375 12.1061 11.0862 11.9186 11.2926 11.7842C11.499 11.6478 11.7462 11.5796 12.0341 11.5796C12.3257 11.5796 12.5701 11.6478 12.767 11.7842C12.9659 11.9205 13.1127 12.108 13.2074 12.3467H13.2528C13.357 12.1137 13.5227 11.9281 13.75 11.7898C13.9773 11.6497 14.2481 11.5796 14.5625 11.5796C14.9583 11.5796 15.2812 11.7037 15.5312 11.9518C15.7831 12.1999 15.9091 12.5739 15.9091 13.0739V16.0001H15.0596V13.1535C15.0596 12.858 14.9792 12.644 14.8182 12.5114C14.6572 12.3789 14.465 12.3126 14.2415 12.3126C13.965 12.3126 13.75 12.3978 13.5966 12.5682C13.4432 12.7368 13.3665 12.9537 13.3665 13.2188V16.0001H12.5199V13.0995C12.5199 12.8628 12.446 12.6724 12.2983 12.5285C12.1506 12.3845 11.9583 12.3126 11.7216 12.3126C11.5606 12.3126 11.4119 12.3552 11.2756 12.4404C11.1411 12.5237 11.0322 12.6402 10.9489 12.7898C10.8674 12.9395 10.8267 13.1128 10.8267 13.3097V16.0001H9.97726Z" fill="black"/>
    <path d="M17.897 10.1819V16.0001H17.0476V10.1819H17.897Z" fill="black"/>
    </svg>`;
    button.className = 'mediaPlan__item-button';
    button.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 12L12 17L7 12" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 5L12 16" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="5.75" y1="18.25" x2="18.25" y2="18.25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
    div.append(xmlSvg)
    div.append(paragraph)
    div.append(button)
    return div;
}



function sendMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() !== "") {
        document.getElementById("chat-box").innerHTML += `<p>${message}</p>`;
        document.getElementById("message").value = "";
    }
}

let logo = document.querySelector('#main__content__files__logo');
let text = document.querySelector('#main__content__files__description');


function requestMediaPlan() {
    let stillText = document.querySelector('#media__inner-still');
    text.style.display = 'none';
    logo.style.display = 'none';
    document.querySelector('#media').style.display = "block";
    let mediaList = document.querySelector('#media__inner-list');
    mediaList.appendChild(createItemForList());
    let arr = Array.from(mediaList.children);
    if (arr.length > 5) {
        stillText.style.display = 'block';
    }
}

function requestReport() {
    let stillText = document.querySelector('#report__inner-still');

    text.style.display = 'none';
    logo.style.display = 'none';
    document.querySelector('#report').style.display = "block";
    let mediaList = document.querySelector('#report__inner-list');
    mediaList.appendChild(createItemForList());
    let arr = Array.from(mediaList.children);
    if (arr.length > 3) {
        stillText.style.display = 'block';
    }
}

function showMoreReports () {
    let stillText = document.querySelector('#report__inner-still');
    let report = document.querySelector('#report');
    report.style.overflow = 'scroll';

    stillText.style.display = 'none';
}

function showMoreMediaPlans () {
    let stillText = document.querySelector('#report__inner-still');
    let media = document.querySelector('#media');
    media.style.overflow = 'scroll';
    media.style.scrollWidth = 'thin';
    stillText.style.display = 'none';
}