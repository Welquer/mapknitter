/**
 * Represents a node. It can either be standalone or part of a way. By default,
 * it is not draw. To force it to be draw, manually add it to the geohash index.
 * @class
 * @augments Feature
 */
var Node = Class.create(Feature, 
/**
 * @lends Node#
 */
{
	/**
	 * Sets the default radius and invokes Feature#initialize
	 * @constructs
	 */
	initialize: function($super) {
		/**
		 * The radius, in pixels, of this node.
		 * @type Number
		 */
		this.radius = 6
		$super()
	},
	/**
	 * Increments Cartagen.node_count and invokes Feature#draw
	 */
	draw: function($super) {
		Cartagen.node_count++
		$super()
	},
	/**
	 * Draws this node
	 */
	shape: function() {
		$C.begin_path()
		$C.translate(this.x, this.y-this.radius)
		$C.arc(0, this.radius, this.radius, 0, Math.PI*2, true)
		$C.fill()
		$C.stroke()
	}
})