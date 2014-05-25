game.explosionManager = Object.extend({           
    init: function(x, y) {
        // create a new emitter
        this.emitter = new me.ParticleEmitter(x, y);
        this.emitter.z = 10;

        // start the emitter with pre-defined params
	this.start(x, y);
        
        // add the emitter to game
	me.game.world.addChild(this.emitter);
        me.game.world.addChild(this.emitter.container);
    },

    start: function(x, y) {
        // set the emitter params
        this.emitter.image = me.loader.getImage("droplet");
	this.emitter.totalParticles = 20;
        this.emitter.minLife = 2000;
        this.emitter.maxLife = 5000;
        this.emitter.speed = 10;
        this.emitter.speedVariation = 3;
        this.emitter.angle = Number.prototype.degToRad(90);
        this.emitter.angleVariation = Number.prototype.degToRad(20);
        this.emitter.minStartScale = 0.6;
        this.emitter.maxStartScale = 1.0;
        this.emitter.gravity = 0.3;

        // move the emitter
        this.emitter.pos.set(x, y);
    },

    launch: function(x, y) {		
        // move the emitter
        this.emitter.pos.set(x, y);
	
	// launch the emitter particles!
	this.emitter.burstParticles();
    },

    remove: function() {
	// remove the emitters from game		
        me.game.world.removeChild(this.emitter.container);
        me.game.world.removeChild(this.emitter);
    }
});

