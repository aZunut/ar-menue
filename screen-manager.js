AFRAME.registerComponent('event-mnage', {init: function () {
    this.bindMethods();

    this.id1GeometryEl = document.querySelector('#1');
    this.id2GeometryEl = document.querySelector('#2');
    this.id3GeometryEl = document.querySelector('#3');
    this.id4GeometryEl = document.querySelector('#4');

    this.id1ButtonEl = document.querySelector('#menue-1');
    this.id2ButtonEl = document.querySelector('#menue-2');
    this.id3ButtonEl = document.querySelector('#menue-3');
    this.id4ButtonEl = document.querySelector('#menue-4');
    this.darkModeButtonEl = document.querySelector('#darkModeButton');

    this.buttonToGeometry = {
      'menue-1': this.id1GeometryEl,
      'menue-2': this.id2GeometryEl,
      'menue-3': this.id3GeometryEl,
      'menue-4': this.id4GeometryEl
    };

    this.id1ButtonEl.addEventListener('click', this.onClick);
    this.id2ButtonEl.addEventListener('click', this.onClick);
    this.id3ButtonEl.addEventListener('click', this.onClick);
    this.id4ButtonEl.addEventListener('click', this.onClick);
    this.darkModeButtonEl.addEventListener('click', this.onClick);
    // this.boxButtonEl.addState('pressed');
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (evt) {
    var targetEl = evt.target;
    if (targetEl === this.boxButtonEl ||
        targetEl === this.sphereButtonEl ||
        targetEl === this.torusButtonEl) {
      this.boxButtonEl.removeState('pressed');
      this.sphereButtonEl.removeState('pressed');
      this.torusButtonEl.removeState('pressed');
      this.boxGeometryEl.object3D.visible = false;
      this.sphereGeometryEl.object3D.visible = false;
      this.torusGeometryEl.object3D.visible = false;
      this.buttonToGeometry[targetEl.id].object3D.visible = true;
    }

    if (targetEl === this.darkModeButtonEl) {
      if (this.el.sceneEl.is('starry')) {
        targetEl.setAttribute('button', 'label', 'Dark Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'default'});
        this.el.sceneEl.removeState('starry');
      } else {
        targetEl.setAttribute('button', 'label', 'Light Mode');
        this.el.sceneEl.setAttribute('environment', {preset: 'starry'});
        this.el.sceneEl.addState('starry');
      }
    } else {
      targetEl.addState('pressed');
    }
  }
});
