/* 
- Creazione di Array Oggetti in cui verranno contenuti le info del team 
    a. Nome Cognome
    b. Ruolo
    c. Foto
- Stampare per ogni membro la sua card e anche dei membri nuovi.
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

console.log('Membri nuovi:', allTeams);

// Richiamo il mio elemento del DOM a cui dovro' inserire tutte le card del team
const allTeamGrid = document.querySelector('.team-container');
// Richiamo il mio elemento del DOM BTN ADD
const addBtn = document.getElementById('addMemberButton');


// STAMPARE PER OGNI MEMBRO LA SUA CARD
// Invoco la mia funzione per scorrere l'array  e popolare il DOM con le card del team
allTeamCard(allTeams);


// PRENDERE I DATI DEI NUOVI UTENTI AL CLICK DEL BTN ADD
addBtn.addEventListener('click', addNewMember);
const finalNewMemeberInfo = addNewMember();


 // Inserirli nell'array allTeams
 allTeams.push(finalNewMemeberInfo);

 console.log('Membri nuovi:', allTeams);
 // Automatizzare il popolamente di questi ultimi nel DOM






// ---------------------------------------
//              FUNCTIONS
// ---------------------------------------

 
// FUNZIONE STAMPARE PER OGNI MEMBRO LA SUA CARD
// Scorro tutta l'array per avere gli object al suo interno
function allTeamCard(teamsInfo) {
    for(let i = 0; i < teamsInfo.length; i++) {
        const singleCard = teamsInfo[i]; 

        // Invoco la mia funzione per tirare fuori tutti i valori di ogni object
        singleObjectInfo(singleCard)
    }
}

// Tiro fuori i valori dai singoli elementi dell'object e li inserisco nel nuovo DIV da inserire a team-container
function singleObjectInfo(arrayTeamElement) {
    const newDiv = `
    <div class="team-card">
        <div class="card-image">
        <img src="img/${arrayTeamElement.image}" alt="Wayne Barnett"/>
        </div>
        <div class="card-text">
        <h3>${arrayTeamElement.name}</h3>
        <p>${arrayTeamElement.role}</p>
        </div>`
    // Inserisco newDiv alla classe team-container del DOM per creare le effettive CARD di ogni membro
    allTeamGrid.innerHTML += newDiv;
}

// // AGGIUNGERE NUOVI UTENTI ALL'INTERFACCIA TEAM AL CLICK DEL BTN ADD
function addNewMember() {
    // Leggere i valori inseriti dall'utente
    const newName = document.getElementById('name').value;
    const newRole = document.getElementById('role').value;
    const newImage = document.getElementById('image').value;

    // Creare un nuovo object per ogni utente nuovo
    const addNewMemberTeam = {
        name: newName,
        role: newRole,
        const: newImage,
    };
    console.log('nuovi membri', addNewMemberTeam);

    return addNewMemberTeam;
} 