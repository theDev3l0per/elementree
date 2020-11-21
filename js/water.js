var layoutInfo = {
    startTab: "none",
	showTree: true,

    treeLayout: ["i"]

    
}

addLayer("w", {
  name: "water", // This is optional, only used in a few places, If absent it just uses the layer id.
  symbol: "w", // This appears on the layer's node. Default is the id with the first letter capitalized
  position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
  color: "#4BDC13",
  row: 0, // Row the layer is in on the tree (0 is the first row)
  layerShown(){return true},
  resource: "water",
  tabFormat: [["tree", function() {return (layoutInfo.treeLayout ? layoutInfo.treeLayout : TREE_LAYERS)}]]
})
