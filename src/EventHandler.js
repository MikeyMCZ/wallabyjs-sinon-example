define(function (require) {
    'use strict';

    function EventHandler(eventProcessor) {

        this.subscribe = function () {
            eventProcessor.process();
        };

    }

    return EventHandler;
});