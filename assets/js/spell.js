class Spell {
    constructor(json) {
      this.json = json;
    }
  
    get html() {
      let damageRows = "";
      for (const [level, damage] of Object.entries(this.json.damage.damage_at_character_level)) {
        damageRows += `<tr><td>${level}</td><td>${damage}</td></tr>`;
      }
  
      return `
        <div style="padding: 1rem;">
            <h1 style="text-align: center;">${this.json.name}</h1>
            <hr style="background-color: white;">
            <p><b>Casting Time:</b> ${this.json.casting_time}</p>
            <p><b>Range:</b> ${this.json.range}</p>
            <p><b>Components:</b> ${this.json.components.join(', ')}</p>
            <p><b>Duration:</b> ${this.json.duration}</p>
            <p><b>Concentration:</b> ${this.json.concentration ? 'Yes' : 'No'}</p>
            <div id="more" style = "display: none;">
                <p><b>Ritual:</b> ${this.json.ritual ? 'Yes' : 'No'}</p>
                <p><b>Level:</b> ${this.json.level}</p>
                <p><b>School:</b> ${this.json.school.name}</p>
                <p><b>Attack Type:</b> ${this.json.attack_type}</p>
            </div>
            <button onclick="document.getElementById('more').style.display = 'block'; this.style.display = 'none';">More</button>
            <hr style="background-color: white;">
            <p>${this.json.desc.join(' ')}</p>
            <hr style="background-color: white;">

            <p><b>Classes:</b> ${this.json.classes.map(c => c.name).join(', ')}</p>
            <p><b>Subclasses:</b> ${this.json.subclasses.map(s => s.name).join(', ')}</p>
            <p><b>Damage:</b></p>
            <table style="border: 1px solid white;">
            <thead>
                <tr>
                <th>Level</th>
                <th>Damage</th>
                </tr>
            </thead>
            <tbody>
                ${damageRows}
            </tbody>
            </table>

            <p><b>Damage Type:</b> ${this.json.damage.damage_type.name}</p>
            <p><b>DC:</b> ${this.json.dc.dc_success} (${this.json.dc.dc_type.name})</p>
        </div>
      `;
    }
  }