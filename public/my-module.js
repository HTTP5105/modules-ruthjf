// import theShire and buckland
// export theSHire and statement

var theShire = new HobbitSettlement('The Shire', 1601, ['Marcho', 'Blanco']);
import { theShire } from './another-module';
import { buckland } from './another-module';
export { theShire };

var statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;
export { statement };