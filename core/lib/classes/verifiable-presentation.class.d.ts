import { LinkedDataProof } from './proof.class';
import { VerifiableCredential } from './verifiable-credential.class';
export declare class VerifiablePresentation {
    '@context': ['https://www.w3.org/2018/credentials/v1'];
    type: string[];
    verifiableCredential: Array<VerifiableCredential | string>;
    proof: LinkedDataProof;
    expirationDate?: string;
    holder?: string;
    constructor(type: string[], verifiableCredential: Array<VerifiableCredential | string>, proof: LinkedDataProof, expirationDate?: string, holder?: string);
}
