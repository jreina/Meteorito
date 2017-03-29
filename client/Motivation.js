"use strict";
 
var motivation = require("motivation");
Template.Motivation.helpers({ 'quote': () => motivation.get() }); // returns a random quote 
