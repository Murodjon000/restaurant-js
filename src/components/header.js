const container = document.getElementById('content');

const header = document.createElement('header');
header.classList.add('header');

const wrapper = document.createElement('div');
wrapper.classList.add('header-wrapper');

const text = document.createElement('h1');
text.classList.add('header-text');
text.textContent = 'Uzbek Kitchen';

const myHeader = () => {
    container.appendChild(header);
    header.appendChild(wrapper);
    wrapper.appendChild(text);
};

export default myHeader;

