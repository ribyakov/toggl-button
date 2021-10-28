'use strict';
/* global togglbutton, $ */

togglbutton.render(
  '.b-table__body:not(.toggl)',
  { observe: true },
  $container => {
    const descriptionSelector = () => {
      const $descriptionEl = $('.b-table__col_role_key a', $container);
      return $descriptionEl.textContent;
    };

    const link = togglbutton.createTimerLink({
      className: 'yandextracker',
      description: descriptionSelector,
      buttonType: 'minimal'
    });

    const wrapper = document.createElement('span');
    wrapper.style.verticalAlign = 'middle';
    wrapper.style.marginLeft = '1em';
    wrapper.appendChild(link);

    $('.b-table__col_role_key', $container).appendChild(wrapper);
  }
);
