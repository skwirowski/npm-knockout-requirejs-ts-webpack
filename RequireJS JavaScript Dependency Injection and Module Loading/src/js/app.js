// ! simplified commonjs wrapper syntax

define('app', function(require, exports, module) {
  const $ = require('jquery');
  const tasks = require('tasks');

  /* register event handlers */

  function _addTask() {
      tasks.add();
  }

  function _clearAllTasks() {
      tasks.clear();
  }

  function _saveChanges() {
      tasks.save();
  }

  function _cancelChanges() {
      tasks.cancel();
  }

  function _removeTask(clickEvent) {
      tasks.remove(clickEvent);
  }

  function _registerEventHandlers() {
      $("#new-task-button").on("click", _addTask);
      $("#delete-all-button").on("click", _clearAllTasks);
      $("#save-button").on("click", _saveChanges);
      $("#cancel-button").on("click", _cancelChanges);
      $("#task-list").on("click", ".delete-button", _removeTask);
  }

  exports.init = function() {
      _registerEventHandlers();
      tasks.render();
  }
});