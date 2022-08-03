const cardWrapperEl = document.querySelector('.card-wrapper');

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    const name = teamMember.name;
    const role = teamMember.role;
    const image = teamMember.image;

    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = createCard(name, role, image);
    cardWrapperEl.append(div);
}

function createCard(name, role, image) {
    return `<div class="card">
        <img src="./img/${image}" alt="foto di ${name}">
        <h2>${name}</h2>
        <p>${role}</p>
    </div>`;
}