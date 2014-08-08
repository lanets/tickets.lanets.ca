define([
  'backbone',
  'entities/event'
],

function(Backbone, EventModel) {
  return Events = Backbone.Collection.extend({
    model: EventModel,
    url: 'json/events.json'
  });
});
