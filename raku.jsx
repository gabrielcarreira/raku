/**
 * Raku
 *
 * @returns {Object} An object containing the active composition, the selected layers, and an array of objects for each selected layer, with properties for the layer's position, rotation, scale, opacity and anchor point.
 */
function Raku() {
  var comp = app.project.activeItem;
  var select = comp.selectedLayers;
  var allLayers = comp.layers;

  var sel = [];
  for (var i = 0; i < select.length; i++) {
    sel.push({
      pos: select[i].transform.position,
      rot: select[i].transform.rotation,
      sca: select[i].transform.scale,
      opa: select[i].transform.opacity,
      anc: select[i].transform.anchorPoint,
    });
  }

  var layers = [];
  for (var i = 1; i <= allLayers.length; i++) {
    layers.push(allLayers[i]);
  }

  const obj = {
    comp: comp,
    layers: layers,
    select: select,
    sel: sel,
  };

  return obj;
}

/**
 * setProperty function
 *
 * @param {Array} layers - An array of layers to apply the property value
 * @param {String} propertyPath - The property path to access the property, for example "transform.position"
 * @param {Any} value - The value to be set to the property
 */
function setProperty(layers, propertyPath, value) {
  if (layers.constructor !== Array) {
    throw new Error("Expected first parameter to be an array of layers");
  }
  if (typeof propertyPath !== "string") {
    throw new Error(
      "Expected second parameter to be a string representing the property path"
    );
  }
  const properties = propertyPath.split(".");
  for (var i = 0; i < layers.length; i++) {
    var obj = layers[i];
    for (var j = 0; j < properties.length - 1; j++) {
      obj = obj[properties[j]];
    }
    obj[properties[properties.length - 1]] = value;
  }
}

/**
 * setMethod function
 *
 * @param {Array} layers - An array of layers to apply the method
 * @param {String} propertyPath - The property path to access the property containing the method, for example "transform.scale"
 * @param {String} methodName - The method name to be called, for example "setValueAtTime"
 * @param {Array} args - An array of arguments to be passed to the method
 */
function setMethod(layers, propertyPath, methodName, args) {
  if (layers.constructor !== Array) {
    throw new Error("Expected first parameter to be an array of layers");
  }
  if (typeof propertyPath !== "string") {
    throw new Error(
      "Expected second parameter to be a string representing the property path"
    );
  }
  if (typeof methodName !== "string") {
    throw new Error(
      "Expected third parameter to be a string representing the method name"
    );
  }
  if (args.constructor !== Array) {
    throw new Error("Expected fourth parameter to be an array of arguments");
  }
  const properties = propertyPath.split(".");
  for (var i = 0; i < layers.length; i++) {
    var obj = layers[i];
    for (var j = 0; j < properties.length; j++) {
      obj = obj[properties[j]];
    }
    obj[methodName].apply(obj, args);
  }
}
