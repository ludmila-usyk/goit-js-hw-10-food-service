export const switchTheme = () =>  {
    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
      };

    const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
    const body = document.querySelector('body');
    const savedTheme = localStorage.getItem('current-theme');


    if (savedTheme === null) {
        body.classList.add(Theme.LIGHT);
      } else {
        body.classList.add(savedTheme);
      }
    
      if (savedTheme === Theme.DARK) {
        themeSwitchToggle.setAttribute('checked', 'checked');
      }
    
      const onChangeTheme = event => {
        if (event.currentTarget.checked) {
          body.classList.replace(Theme.LIGHT, Theme.DARK);
          localStorage.setItem('current-theme', Theme.DARK);
        } else {
          body.classList.replace(Theme.DARK, Theme.LIGHT);
          localStorage.setItem('current-theme', Theme.LIGHT);
        }
      };

      themeSwitchToggle.addEventListener('change', onChangeTheme);
};