import { Meteor } from 'meteor/meteor';
import Votaciones from '../collections/Votaciones.js';

Meteor.publish('votaciones', function () {
  return Votaciones.find();
});
