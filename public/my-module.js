// import theShire and buckland
// export theSHire and statement

import { theShire, buckland } from './another-module.js';

export { theShire, statement };

var statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;