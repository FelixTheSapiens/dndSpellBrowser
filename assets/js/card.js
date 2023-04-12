class Card {
    constructor(cardData) {
        this.spellData = cardData;
    }

    get html() {
        let html = 
        `<div class="card bg-secondary border-white border rounded border-1">
            <div class="card-body">
                <h3 class="spellText bold">${this.spellData.name}<br></h3>
                <p class="spellText text-nowrap d-inline">lvl ${this.spellData.card.level}</p>
                <p class="spellText text-nowrap d-inline">${this.spellData.card.school.name}</p>
                <p class="spellText text-nowrap d-inline">${this.spellData.card.casting_time}</p>
            </div>
        </div>`;
        return html
    }
}
