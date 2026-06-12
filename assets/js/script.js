// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

// Dico a JS di intercettare e di trattare l'elemento come un modale
const modal = new bootstrap.Modal(document.getElementById('cardModal'));
const card = document.querySelectorAll('#servizi .card');
const modalTitle = document.getElementById('cardModalTitle');
const modalBody = document.getElementById('cardModalBody')

card.forEach(c => {
    c.addEventListener('click', (e) => {
    modalTitle.textContent = c.dataset.title;
    modalBody.textContent = c.dataset.text;
    modal.show();
    })
});
