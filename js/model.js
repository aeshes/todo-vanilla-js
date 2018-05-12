(function (window) {
    'use strict';

    function Model() {
        this.storage = [];
    }

    Model.prototype.addTodo = function(task) {
        task = task || '';

        var item = {
            text: task.trim(),
            completed: false
        };

        this.storage.push(item);
    }

    Model.prototype.findFirst = function() {
        var empty = {text: 'empty', completed: false};
        return this.storage.length > 0 ? this.storage[0] : empty;
    }

    window.app = window.app || {};
    window.app.Model = new Model;

    window.app.Model.addTodo('Play with cat');
}(window));