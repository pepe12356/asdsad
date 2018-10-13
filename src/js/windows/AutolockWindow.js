/*
Created by Freshek on 28.10.2017
*/

class AutolockWindow {
  createWindow() {
    this.autolockWindow = WindowFactory.createWindow({width: 300, text: "Jelölő"});

    let options = [
      {
        name: 'lockNpc',
        labelText: 'Npc jelölés (gomb: x)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockNpc = this.checked;
        }
      },
      {
        name: 'lockPlayers',
        labelText: 'Player jelölés (gomb: z)',
        appendTo: this.autolockWindow,
        event: function () {
          window.settings.lockPlayers = this.checked;
        }
      },
    ];

    options.forEach((option)=>{
      this[option.name] = ControlFactory.checkbox(option);
    });

  }
}
