
## What is this?

To calculate distance between two latitudes and longitudes

## Installing

```sh
$ npm install distanceCalLatLong

```
## Building bundled/minified version (for AMD, etc)

First run `npm install` to get all of the dependencies, and then run `make`:

```sh
$ npm install
$ make
```

The bundled and minified files will be in the generated `build` directory.

## Getting Started

var distance = require('distanceCalLatLong');
```
var latLong1 = {
lat: '',
lng: ''
}
var latLong2 = {
lat: '',
lng: ''
}
var calDistance = distance.calculateDistance(latLong1, latLong2)
