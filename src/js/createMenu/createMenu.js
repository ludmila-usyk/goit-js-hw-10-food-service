import foodMenu from '../../menu.json';
import foodTemplate from '../../templates/foodMenu.hbs';

export const createMenu = () => {
    const menuList = document.querySelector('.menu');

    menuList.innerHTML = foodTemplate({menu: foodMenu});
};


