const container = document.getElementById('content');

const footer = document.createElement('footer');
footer.classList.add('footer');

const wrapper = document.createElement('div');
wrapper.classList.add('footer-wrapper');

wrapper.innerHTML = '&copy; 2021 Uzbek Kitchen Designed by  <a href="https://github.com/Murodjon000"> Murodjon Tursunpulatov</a>';

const myFooter = () => {
  container.appendChild(footer);
  footer.appendChild(wrapper);
};

export default myFooter;