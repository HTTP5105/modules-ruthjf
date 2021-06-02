// import theShire and buckland
// export theSHire and statement

var theShire = new HobbitSettlement('The Shire', 1601, ['Marcho', 'Blanco']);
import { theShire, buckland } from './another-module.js';

export { theShire, statement };

var statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;