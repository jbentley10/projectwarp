/*
 * Project Warp
 * 
 * glassWallh.js
 * Controls the horizontal glass wall entity.
 * 
 * Developed by Superawesomemegasquad
 */


var glassWallhEntity = me.ObjectEntity.extend({
    // extending the init function is not mandatory
    // unless you need to add some extra initialization
    init: function(x, y, settings) {
        // call the parent constructor
        this.parent(x, y, settings);
        this.collidable = true;
        this.type = "glassWallh";
        this.gravity = 0;
    },
    onCollision: function(res, obj) {
 
        // res.y >0 means touched by something on the bottom
        // which mean at top position for this one

    },
    // this function is called by the engine, when
    // an object is touched by something (here collected)
    update: function() {
        // do something when collected
 
        // make sure it cannot be collected "again"
              // remove it
    this.updateMovement();
    }
 
});
