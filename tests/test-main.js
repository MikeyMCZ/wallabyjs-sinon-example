wallaby.delayStart();

requirejs.config({
    baseUrl: '/src',

    deps: wallaby.tests,

    callback: wallaby.start
});