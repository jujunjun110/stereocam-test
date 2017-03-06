require('aframe')
const stereoComponent = require('aframe-stereo-component').stereo_component;
const stereocamComponent = require('aframe-stereo-component').stereocam_component;

AFRAME.registerComponent('stereo', stereoComponent);
AFRAME.registerComponent('stereocam', stereocamComponent);
