module.exports = function () {
    return {
        files: [
            { pattern: 'lib/require.js', instrument: false },
            { pattern: 'lib/sinon.js', instrument: false },
            { pattern: 'lib/*.js', instrument: false, load: false },
            { pattern: 'src/*.js', load: false },
            { pattern: 'tests/test-main.js', instrument: false }
        ],

        tests: [
            { pattern: 'tests/*-spec.js', load: false }
        ]
    };
};