import confetti from 'canvas-confetti';
// At the component you want to use confetti

const refs = {
  studentsLink: document.querySelector('[open-modal]'),
  closeFooterModalBtn: document.querySelector('[close-modal]'),
  backdropOfFooterModal: document.querySelector('[js-backdrop]'),
  card: document.querySelector('.js-menu'),
};

refs.studentsLink.addEventListener('click', onStudentsLinkClick);
refs.closeFooterModalBtn.addEventListener('click', onCloseFooterModalBtnClick);
refs.backdropOfFooterModal.addEventListener(
  'click',
  onBackdropOfFooterModalClick
);

export function onStudentsLinkClick() {
  window.addEventListener('keydown', onEscKey);
  refs.backdropOfFooterModal.classList.toggle('is-hidden2');

  if (!refs.backdropOfFooterModal.classList.contains('is-hidden2')) {
    let end = Date.now() + 1 * 1000;
    const colors = ['#ff6b01', '#ffffff'];
    (function frame() {
      confetti({
        shapes: ['circle', 'circle', 'square'],
        particleCount: 2,
        angle: 30,
        spread: 80,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 150,
        spread: 70,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}

function onCloseFooterModalBtnClick() {
  window.removeEventListener('keydown', onEscKey);
  refs.backdropOfFooterModal.classList.toggle('is-hidden2');
}
function onBackdropOfFooterModalClick(event) {
  if (event.currentTarget === event.target) {
    onCloseFooterModalBtnClick();
    console.log('click');
  }
}

function onEscKey(event) {
  if (event.code === 'Escape') {
    onCloseFooterModalBtnClick();
  }
}

const people = [
  {
    name: 'Константин',
    rank: 'Team lead',
    url: 'https://github.com/KonstantinLigus',
    foto: 'https://avatars.githubusercontent.com/u/92418488?v=4',
  },
  {
    name: 'Станислав',
    rank: 'Scrum master',
    url: 'https://github.com/asst199162',
    foto: 'https://avatars.githubusercontent.com/u/42334307?v=4',
  },
  {
    name: 'Александр',
    rank: 'Developer',
    url: 'https://github.com/AlexDi2019',
    foto: 'https://avatars.githubusercontent.com/u/58602005?v=4',
  },
  {
    name: 'Влaдлен',
    rank: 'Developer',
    url: 'https://github.com/Vlad-Yavizhyn',
    foto: 'https://avatars.githubusercontent.com/u/91382235?v=4',
  },
  {
    name: 'Диана',
    rank: 'Developer',
    url: 'https://github.com/glopchak',
    foto: 'https://avatars.githubusercontent.com/u/92595780?v=4',
  },
  {
    name: 'Станислав',
    rank: 'Developer',
    url: 'https://github.com/Stanislav-PSV',
    foto: 'https://avatars.githubusercontent.com/u/92394363?v=4',
  },
  {
    name: 'Галина',
    rank: 'Developer',
    url: 'https://github.com/HalynaStep',
    foto: 'https://avatars.githubusercontent.com/u/94197972?v=4',
  },
  {
    name: 'Евгения',
    rank: 'Developer',
    url: 'https://github.com/Yevheniia2',
    foto: 'https://avatars.githubusercontent.com/u/93269755?v=4',
  },
  {
    name: 'Станислав',
    rank: 'Developer',
    url: 'https://github.com/mankovskiy',
    foto: 'https://avatars.githubusercontent.com/u/35701366?v=4',
  },
];

function buildProfile() {
  return people
    .map(({ name, rank, foto, url }) => {
      return `
        <div class="profile">
        
        <img src="${foto}" width="140" height="140" alt="User avatar" class="avatar" />
        <h2 class="name">${rank}</h2>
        <p class="bio">${name}</p>
            <a href="${url}" target="_blank" class="social-footer">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ff6b08" stroke="#ff6b08"
                    class="zaliv" viewBox="0 0 32 32">
                    <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                </svg>
            </a>
    </div>
    `;
    })
    .join('');
}
refs.card.innerHTML = buildProfile(people);
