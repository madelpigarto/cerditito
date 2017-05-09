var app = {
  inicio: function() {
    DIAMETRO_BOLA = 30;
    dificultad = 0;
    velocidadX = 0;
    velocidadY = 0;
    puntuacion = 0;
    color = (97, 246, 117);
    r = 97;
    g = 246;
    b = 117;
    textoPrueba='Bola';

    alto = document.documentElement.clientHeight;
    ancho = document.documentElement.clientWidth;

    app.vigilaSensores();
    app.iniciaJuego();
  },

  iniciaJuego: function() {

    function preload() {
      game.physics.startSystem(Phaser.Physics.ARCADE);

      game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
      game.load.image('bola', 'assets/esfera.png');
      game.load.image('masCinco', 'assets/estrella5.png');
      game.load.image('masUno', 'assets/estrella.png');
      game.load.image('masDiez', 'assets/estrella10.png');
      game.load.image('deudas', 'assets/deudas.png');
      game.load.image('deudas2', 'assets/deudas2.png');
      game.load.image('deudas3', 'assets/deudas3.png');
      game.load.image('deudas4', 'assets/deudas4.png');
    }

    function create() {
      scoreText = game.add.text(16, 16, puntuacion, { fontSize: '30px', fill: '#000000' });

      masUno = game.add.sprite(app.inicioX(), app.inicioY(), 'masUno');
      masCinco = game.add.sprite(app.inicioX(), app.inicioY(), 'masCinco');
      masDiez = game.add.sprite(app.inicioX(), app.inicioY(), 'masDiez');
      bola = game.add.sprite(app.inicioX(), app.inicioY(), 'bola');
      deudas = game.add.sprite(app.inicioX(), app.inicioY(), 'deudas');
      deudas2 = game.add.sprite(app.inicioX(), app.inicioY(), 'deudas2');
      deudas3 = game.add.sprite(app.inicioX(), app.inicioY(), 'deudas3');
      deudas4 = game.add.sprite(app.inicioX(), app.inicioY(), 'deudas4');

      game.physics.arcade.enable(bola);
      game.physics.arcade.enable(masUno);
      game.physics.arcade.enable(masCinco);
      game.physics.arcade.enable(masDiez);
      game.physics.arcade.enable(deudas);
      game.physics.arcade.enable(deudas2);
      game.physics.arcade.enable(deudas3);
      game.physics.arcade.enable(deudas4);
    }

    function update() {
      var factorDificultad = (200 + (dificultad * 50));
      bola.body.velocity.y = (velocidadY * factorDificultad);
      bola.body.velocity.x = (velocidadX * (-1 * factorDificultad));

      game.physics.arcade.overlap(bola, masUno, app.incrementaPuntuacion1, null, this);
      game.physics.arcade.overlap(bola, masCinco, app.incrementaPuntuacion5, null, this);
      game.physics.arcade.overlap(bola, masDiez, app.incrementaPuntuacion10, null, this);
      game.physics.arcade.overlap(bola, deudas, app.decrementaPuntuacion50, null, this);
      game.physics.arcade.overlap(bola, deudas2, app.decrementaPuntuacion40, null, this);
      game.physics.arcade.overlap(bola, deudas3, app.decrementaPuntuacion45, null, this);
      game.physics.arcade.overlap(bola, deudas4, app.decrementaPuntuacion55, null, this);

      if ( bola.body.checkWorldBounds() === true ) {
        game.stage.backgroundColor='61F675';
      } else {
        game.stage.backgroundColor='rgb(' + r + ',' + g + ',' + b + ')';
      }
    }

    var estados = { preload: preload, create: create, update: update };
    var game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'phaser', estados);
  },

  decrementaPuntuacion: function() {

    puntuacion = puntuacion - 1;
    scoreText.text = puntuacion;
    if (puntuacion < 0) {
      dificultad = 0;
      if (r > 0) {r -= 0};
      if (g > 0) {g -= 0};
      if (b > 0) {b -= 0};
    }
  },

  incrementaPuntuacion1: function() {
    puntuacion = puntuacion + 1;
    scoreText.text = puntuacion;

    masUno.body.x = app.inicioX();
    masUno.body.y = app.inicioY();

    if (puntuacion > 0) {
      dificultad = dificultad + 1;
      if (r < 1) {r += 0};
      if (g < 1) {g += 0};
      if (b < 1) {b += 0};
      this.game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  },

  incrementaPuntuacion5: function() {
    puntuacion = puntuacion + 5;
    scoreText.text = puntuacion;

    masCinco.body.x = app.inicioX();
    masCinco.body.y = app.inicioY();

    if (puntuacion > 0) {
      dificultad = dificultad + 0;
      if (r < 1) {r += 0};
      if (g < 1) {g += 0};
      if (b < 1) {b += 0};
      this.game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  },

  incrementaPuntuacion10: function() {
    puntuacion = puntuacion + 10;
    scoreText.text = puntuacion;

    masDiez.body.x = app.inicioX();
    masDiez.body.y = app.inicioY();

    if (puntuacion > 0) {
      dificultad = dificultad +0;
      r = 97;
      g = 246;
      b = 117;
      this.game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  },

decrementaPuntuacion50: function() {
    puntuacion = puntuacion - 50;
    scoreText.text = puntuacion;

    deudas.body.x = app.inicioX();
    deudas.body.y = app.inicioY();

    if (puntuacion > 0) {
      dificultad = dificultad +0;
      r = 97;
      g = 246;
      b = 117;
      this.game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  },

decrementaPuntuacion40: function() {
    puntuacion = puntuacion - 40;
    scoreText.text = puntuacion;

    deudas2.body.x = app.inicioX();
    deudas2.body.y = app.inicioY();

    if (puntuacion > 0) {
      dificultad = dificultad +0;
      r = 97;
      g = 246;
      b = 117;
      this.game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  },

decrementaPuntuacion45: function() {
    puntuacion = puntuacion - 45;
    scoreText.text = puntuacion;

    deudas3.body.x = app.inicioX();
    deudas3.body.y = app.inicioY();

    if (puntuacion > 0) {
      dificultad = dificultad +0;
      r = 97;
      g = 246;
      b = 117;
      this.game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  },

decrementaPuntuacion55: function() {
    puntuacion = puntuacion - 55;
    scoreText.text = puntuacion;

    deudas4.body.x = app.inicioX();
    deudas4.body.y = app.inicioY();

    if (puntuacion > 0) {
      dificultad = dificultad +0;
      r = 97;
      g = 246;
      b = 117;
      this.game.stage.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  },

  inicioX: function() {
    return app.numeroAleatorioHasta(ancho - DIAMETRO_BOLA);
  },

  inicioY: function() {
    return app.numeroAleatorioHasta(alto - DIAMETRO_BOLA);
  },

  numeroAleatorioHasta: function(limite) {
    return Math.floor(Math.random() * limite);
  },

  vigilaSensores: function() {

    function onError() {
      console.log('onError!');
    }

    function onSuccess(datosAceleracion) {
      app.detectaAgitacion(datosAceleracion);
      app.registraDireccion(datosAceleracion);
    }

    navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency: 10 });
  },

  detectaAgitacion: function(datosAceleracion) {
    agitacionX = datosAceleracion.x > 10;
    agitacionY = datosAceleracion.y > 10;

    if (agitacionX || agitacionY) {
      setTimeout(app.recomienza, 1000);
    }
  },

  recomienza: function() {
    document.location.reload(true);
  },

  registraDireccion: function(datosAceleracion) {
    velocidadX = datosAceleracion.x;
    velocidadY = datosAceleracion.y;
  }
};

if ('addEventListener'in document) {
  document.addEventListener('deviceready', function() {
    app.inicio();
  }, false);
}
