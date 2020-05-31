var hrstart = process.hrtime();
console.log('condenseDeep');
require('./condenseDeep.test.js');
console.log('eachChild');
require('./eachChild.test.js');
console.log('eachDeep');
require('./eachDeep.test.js');
console.log('exists');
require('./exists.test.js');
console.log('filterDeep');
require('./filterDeep.test.js');
console.log('filterTree');
require('./filterTree.test.js');
console.log('findDeep');
require('./findDeep.test.js');
console.log('findPathDeep');
require('./findPathDeep.test.js');
console.log('findTree');
require('./findTree.test.js');
console.log('findValueDeep');
require('./findValueDeep.test.js');
console.log('index');
require('./index.test.js');
console.log('issues');
require('./issues.test.js');
console.log('mapDeep');
require('./mapDeep.test.js');
console.log('noroom');
require('./noroom.test.js');
console.log('omitDeep');
require('./omitDeep.test.js');
console.log('parents');
require('./parents.test.js');
console.log('pathMatches');
require('./pathMatches.test.js');
console.log('pathToString');
require('./pathToString.test.js');
console.log('paths');
require('./paths.test.js');
console.log('pickDeep');
require('./pickDeep.test.js');
console.log('readme');
require('./readme.test.js');
console.log('reduceDeep');
require('./reduceDeep.test.js');
console.log('someDeep');
require('./someDeep.test.js');
console.log('stackoverflow');
require('./stackoverflow.test.js');
console.log('stringPath');
require('./stringPath.test.js');

const hrend = process.hrtime(hrstart);
console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
console.log(global.perf);
