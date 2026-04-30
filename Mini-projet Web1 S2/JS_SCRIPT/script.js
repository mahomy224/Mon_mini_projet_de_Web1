// ===== 1. ANIMATION AU SCROLL =====
const elementsAnimes = document.querySelectorAll('.animer');

const observateur = new IntersectionObserver(function(entrees) {
  entrees.forEach(function(entree) {
    if (entree.isIntersecting) {
      entree.target.classList.add('visible');
      observateur.unobserve(entree.target);
    }
  });
}, { threshold: 0.15 });

elementsAnimes.forEach(function(el) {
  observateur.observe(el);
});


// ===== 2. ANIMATION DES BARRES DE COMPÉTENCES =====
const barres = document.querySelectorAll('.barre-remplissage');

if (barres.length > 0) {
  const observateurBarres = new IntersectionObserver(function(entrees) {
    entrees.forEach(function(entree) {
      if (entree.isIntersecting) {
        const largeur = entree.target.dataset.largeur;
        entree.target.style.width = largeur + '%';
        observateurBarres.unobserve(entree.target);
      }
    });
  }, { threshold: 0.5 });

  barres.forEach(function(barre) {
    observateurBarres.observe(barre);
  });
}


// ===== 3. FORMULAIRE DE CONTACT =====
const btnEnvoyer = document.getElementById('btn-envoyer');

if (btnEnvoyer) {
  btnEnvoyer.addEventListener('click', function() {
    const prenom  = document.getElementById('prenom').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (prenom === '' || email === '' || message === '') {
      alert('Merci de remplir au moins votre prénom, email et message.');
      return;
    }

    const formulaire = document.getElementById('formulaire');
    formulaire.style.display = 'none';

    const succes = document.getElementById('message-succes');
    succes.style.display = 'flex';
  });
}


// ===== 4. MENU HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLiens = document.getElementById('nav-liens');

if (hamburger && navLiens) {
  hamburger.addEventListener('click', function() {
    navLiens.classList.toggle('active');
  });
}