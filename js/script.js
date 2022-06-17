/* 
- Creazione di Array Oggetti in cui verranno contenuti le info del team 
    a. Nome Cognome
    b. Ruolo
    c. Foto
- Stampare per ogni membro la sua card.
*/

// Creare un array contentente tutti i dati del team fisso
const allTeams = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    }
];


// Richiamo il mio elemento del DOM a cui dovro' inserire tutte le card del team
const allTeamGrid = document.querySelector('.team-container');

// STAMPARE PER OGNI MEMBRO LA SUA CARD
// Scorro tutta l'array per avere gli object al suo interno
for(let i = 0; i < allTeams.length; i++) {
    const singleCard = allTeams[i];

    console.log('singleCard', singleCard);
    // Tiro fuori i valori dai singoli elementi dell'object e li inserisco nel nuovo DIV da inserire a team-container
    const newDiv = `
    <div class="team-card">
        <div class="card-image">
        <img src="img/${singleCard.image}" alt="Wayne Barnett"/>
        </div>
        <div class="card-text">
        <h3>${singleCard.name}</h3>
        <p>${singleCard.role}</p>
        </div>`
    // Inserisco newDiv alla classe team-container del DOM per creare le effettive CARD di ogni membro
    allTeamGrid.innerHTML += newDiv;
}

