import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Votaciones from '../collections/Votaciones.js';

Meteor.methods({
  'nuevoVoto'(opcion) {    
    return Votaciones.update(
        {"id" : opcion},
        { $inc: { "votos": 1 } });
  }
});
