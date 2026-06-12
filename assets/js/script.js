// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

// Dico a JS di intercettare e di trattare l'elemento come un modale
const modal = new bootstrap.Modal(document.getElementById('cardModal'));

//
const card = document.querySelectorAll('#servizi .card');
const modalTitle = document.getElementById('cardModalTitle');
const modalBody = document.getElementById('cardModalBody');
const body = document.querySelector('body');
const darkModeToggle = document.getElementById('dark-mode');
const form = document.querySelector('form');
const formOutput = document.getElementById('form-output');


card.forEach(c => {
    c.addEventListener('click', (e) => {
        modalTitle.textContent = c.dataset.title;
        modalBody.textContent = c.dataset.text;
        modal.show();
    })
});

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameValue = document.getElementById('name').value;
    const nameOutput = document.createElement('p');
    nameOutput.textContent = 'Nome: ' + nameValue;

    const emailValue = document.getElementById('email').value;
    const emailOutput = document.createElement('p');
    emailOutput.textContent = 'Email: ' + emailValue;

    const projectValue = document.querySelector('#project-type option:checked').textContent;
    const projectOutput = document.createElement('p');
    projectOutput.textContent = 'Progetto: ' + projectValue;

    const messageValue = document.getElementById('message').value;
    const messageOutput = document.createElement('p');
    messageOutput.textContent = 'Messaggio: ' + messageValue;

    formOutput.classList.remove('d-none');
    formOutput.classList.add('mt-4', 'p-3');
    
    formOutput.appendChild(nameOutput);
    formOutput.appendChild(emailOutput);
    formOutput.appendChild(projectOutput);
    formOutput.appendChild(messageOutput);
});
