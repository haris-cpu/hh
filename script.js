let currentPage = 1;
const totalPages = 5;

function nextPage() {
  const current = document.getElementById(`page${currentPage}`);
  current.classList.remove('active');
  current.classList.add('hidden');

  currentPage++;

  if (currentPage <= totalPages) {
    const next = document.getElementById(`page${currentPage}`);
    next.classList.remove('hidden');
    next.classList.add('active');

    if (currentPage === 5) {
      launchHearts(); // 🎉 Final effect
    }
  } else {
    currentPage = totalPages;
  }
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function launchHearts() {
  const container = document.createElement('div');
  container.className = 'hearts';
  document.body.appendChild(container);

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(heart);
  }
}
