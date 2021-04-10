exports.config = {
    runner: 'local',

    specs: [
        // './test/smoke/smokeFunctional.js',
        './test/extended/story.js'
    ],
    exclude: [
        // './test/extended/image.js'
    ],
    maxInstances: 10,

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--window-size=1280,720']
        },
    }],

    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://qa-apps.netlify.app/hero/fix',

    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec','dot'],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    },
}
