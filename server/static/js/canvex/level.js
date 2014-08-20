var Level = function() {
  this.sectors = [];
  this.sprites = [];
};

Level.prototype.load = function(obj) {
  for (var sp in obj.sprites) {
    this.addSprite(obj.sprites[sp]);
  }
  for (var s in obj.sectors) {
    this.addSector(obj.sectors[s]);
  }
};

Level.prototype.addSprite = function(sp) {
  var sprite = new Sprite();
  sprite.load(sp);
  this.sprites.push(sprite);
};

Level.prototype.addSector = function(s) {
  var sector = new Sector();
  sector.load(s);
  this.sectors.push(sector);
};

var Sprite = function() {
  this.a = undefined; // angle
  this.sector = undefined; // the associated sector (TODO is this the best way to link them?)
  this.sprite = undefined; // the sprite name (w/o extension)
  this.x = undefined; // x coordinate
  this.y = undefined; // y coordinate
  this.z = undefined; // z coordinate
};

/*
 * Sprites have a quite simple structure, so their load shouldn't be more than
 * just loading the specified values
 */
Sprite.prototype.load = function(sp) {
  for (var index in sp) {
    if (index in this)
      this[index] = sp[index];
  }
};

var Sector = function() {
  var self = this;
  this.ceiling = [];
  this.ceiling_height = undefined;
  this.edges = [];
  this.floor = [];
  this.floor_height = undefined;
  this.light = undefined;
};

Sector.prototype.addEdge = function(value) {
  var edge = new Edge();
  edge.load(value);
  this.edges.push(edge);
};

Sector.prototype.load = function(sec) {
  var self = this;
  for (var index in sec) {
    if (index === 'edges') {
      for (var e in sec.edges)
        self.addEdge(sec.edges[e]);
    } else
      self[index] = sec[index];
  }
};

var Edge = function() {
  var self = this;
  this.dest = undefined;
  this.tex = undefined;
  this.x0 = undefined;
  this.x1 = undefined;
  this.y0 = undefined;
  this.y1 = undefined;
};


Edge.prototype.load = function(e) {
  var self = this;
  for (var index in e) {
    if (index in self)
      self[index] = e[index];
  }
};

module.exports = Level;
