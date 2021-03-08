import plovImg from '../assets/plov.jpg';
import main1 from '../assets/main-1.jpg';
import main2 from '../assets/main-2.jpg';
import main3 from '../assets/main-3.jpg';

const container = document.getElementById('content');

const menu = document.createElement('div');
menu.classList.add('menu');

const menuTab = (dataId, text) => {
  const tab = document.createElement('div');
  tab.classList.add('menu-tab');
  tab.setAttribute('data-id', dataId);
  tab.textContent = text;
  return tab;
};

const menuTabs = document.createElement('div');
menuTabs.classList.add('menu-tabs-box');
const mainTab = menuTab('main', 'Menu');
mainTab.setAttribute('id', 'default-open');
const aboutTab = menuTab('about', 'About');
const contactTab = menuTab('contact', 'Contact');

menuTabs.innerHTML += mainTab.outerHTML + aboutTab.outerHTML + contactTab.outerHTML;

const menuItem = (id, title) => {
  const item = document.createElement('div');
  item.classList.add('menu-item');
  item.setAttribute('id', id);

  const heading = document.createElement('h2');
  heading.classList.add('item-title');
  heading.textContent = title;

  const content = document.createElement('div');
  content.classList.add('menu-item-content');

  item.appendChild(heading);
  item.appendChild(content);

  return [item, content];
};

const menuContent = document.createElement('div');
menuContent.classList.add('menu-content');

const [aboutItem, aboutContent] = menuItem('about', 'About us');
const max75 = document.createElement('div');
max75.classList.add('max-75');

const aboutImg = document.createElement('img');
aboutImg.src = plovImg;
aboutImg.classList.add('about-image');
const aboutPara = document.createElement('p');
aboutPara.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam exercitationem debitis ipsam temporibus doloremque laboriosam fugiat dicta iste. Asperiores laudantium fugit ut maiores omnis quos perspiciatis eaque sequi architecto commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
aboutPara.classList.add('about-para');

max75.innerHTML += aboutImg.outerHTML + aboutPara.outerHTML;
aboutContent.appendChild(max75);
menuContent.appendChild(aboutItem);

const [contactItem, contactContent] = menuItem('contact', 'Contact us');

const contactPara = document.createElement('p');
contactPara.textContent = 'Feel free contact us:';
contactPara.classList.add('contact-para');

const contactTel = document.createElement('h2');
contactTel.classList.add('contact-tel');
contactTel.textContent = '+99897-777-77';

contactContent.innerHTML += contactPara.outerHTML + contactTel.outerHTML;
menuContent.appendChild(contactItem);

const mainWrapper = (image, text) => {
  const mainWrapperBox = document.createElement('div');
  mainWrapperBox.classList.add('main-wrapper');

  const mainImage = document.createElement('img');
  mainImage.src = image;
  mainImage.classList.add('main-image');

  const mainPara = document.createElement('span');
  mainPara.textContent = text;
  mainPara.classList.add('main-para');

  mainWrapperBox.appendChild(mainImage);
  mainWrapperBox.appendChild(mainPara);

  return mainWrapperBox;
};

const [mainItem, mainContent]= menuItem('main', 'Menu');
const gridBox = document.createElement('div');
gridBox.classList.add('grid-box');

const mainList = mainWrapper(main1,'PLOV WITH RISE 350');
const mainList2 = mainWrapper(main2,'MEAT DUMPLINGS 30');
const mainList3 = mainWrapper(main3,'MEAT KEBAB 80');

const mainList4 = mainWrapper(main1,'PLOV WITH RISE 350');
const mainList5 = mainWrapper(main2,'MEAT DUMPLINGS 30');
const mainList6 = mainWrapper(main3,'MEAT KEBAB 80');

gridBox.innerHTML += mainList.outerHTML + mainList2.outerHTML + mainList3.outerHTML + mainList4.outerHTML + mainList5.outerHTML + mainList6.outerHTML;
mainContent.appendChild(gridBox);
menuContent.appendChild(mainItem);

const menuPage = () => {
  container.appendChild(menu);
  menu.appendChild(menuTabs);
  menu.appendChild(menuContent);
}

export default menuPage;
