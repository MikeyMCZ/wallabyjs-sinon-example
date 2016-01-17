define(function (require) {
    'use strict';

    var EventHandler = require('EventHandler');

    describe('Event Handler', function() {
        var sandbox,
            eventProcessor = {
                process: function() {}
            },
            eventHandler;

        beforeEach(function () {
            sandbox = sinon.sandbox.create();
            sandbox.stub(eventProcessor, 'process');
            eventHandler = new EventHandler(eventProcessor);
        });

        afterEach(function () {
            sandbox.restore();
        });

        describe('#subscribe', function () {
            it('calls processor when event is received', function () {
                eventHandler.subscribe();

                expect(eventProcessor.process).toHaveBeenCalled();
            });
        });
    });
});