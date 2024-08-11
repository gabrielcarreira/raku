# Raku: Framework for AE Scripts

Raku is a framework designed to streamline and assist in the creation of scripts for After Effects.

## Installation

To install this package, download the "raku.jsx" file and include it in your script using the `@include` command or import it as an external file. For an example of how to import and use Raku, refer to the "example.jsx" file.

## Functions

### `Raku()`

This function returns an object containing information about the active composition and selected layers. The object has the following properties:

- `comp`: the active composition
- `layers`: all the layers
- `select`: the selected layers
- `sel`: an array of objects with the transformation properties of the selected layers (position, rotation, scale, opacity, and anchor point).

### `setProp(lays, prop, val)`

This function sets a value for the specified property (`prop`) across all the provided layers (`lays`).

### `setMethod(lays, prop, method, val)`

This function applies a specified method (`method`) to the given property (`prop`) across all the provided layers (`lays`) and passes the provided arguments (`val`) to the method.
