import { VerifiableCredential } from '../../../classes/verifiable-credential.class';
export declare class OntologyVp {
    '@context': string[];
    type: string[];
    verifiableCredentials: Array<VerifiableCredential | string>;
    constructor(verifiableCredentials: Array<VerifiableCredential | string>);
}
