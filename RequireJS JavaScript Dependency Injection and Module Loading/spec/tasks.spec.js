const require = require('../src/js/require');

describe('Task module', function() {

  describe('add function', function() {

    it('calls taskRenderer.renderNew', function(done) {
      define('view/taskRenderer', [], function() {
        return {
          renderNew() {}
        }
      });

      require(['tasks', 'view/taskRenderer'],
        function(tasks, taskRenderer) {
          spyOn(taskRenderer, 'renderNew');
          tasks.add();
          expect(taskRenderer.renderNew).toHaveBeenCalled();
          done();
        },
        function(error) {
          done.error(error);
        }
      );
    });

  });

});
