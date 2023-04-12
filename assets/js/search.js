document.getElementById("searchBar").addEventListener('input', showSpells);

function showSpells() {
    let searchBar = this.value || '';
    let table = new Table(SPELLTABLE);
    let data = table.getByName(searchBar);

    const div = document.getElementById("spellList");
    clearSpells()

    for (let spell of data) {
        appendElement(spell, div);
    }
}

function clearSpells() {
    const div = document.getElementById("spellList");
    div.innerHTML = '';
}

async function appendElement(spell, div) {
    const card = new Card(spell);
    const placeholder = document.createElement("div");
    placeholder.innerHTML = card.html;
    const node = placeholder.firstElementChild;
        
    await new Promise(resolve => div.appendChild(node));
}
  