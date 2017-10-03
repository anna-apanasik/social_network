// requires all tests in `project/test/src/index.js`
const tests = require.context('./src/', true, /\.js$/);

tests.keys().forEach(tests);

// requires all components in `project/src/components/**/testReducerSignIn.js`
//const components = require.context('../src/', true, /index\.js$/);

//components.keys().forEach(components);