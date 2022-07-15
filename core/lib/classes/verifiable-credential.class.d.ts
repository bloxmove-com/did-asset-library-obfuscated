import { LinkedDataProof } from './proof.class';
export declare class VerifiableCredential {
    '@context': string[];
    type: string[];
    credentialSubject: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>;
    issuer: string | {
        id: string;
        [key: string]: any;
    };
    issuanceDate: string;
    proof?: LinkedDataProof;
    expirationDate?: string;
    constructor(type: string[], credentialSubject: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>, issuer: string | {
        id: string;
        [key: string]: any;
    }, issuanceDate: string, proof?: LinkedDataProof, expirationDate?: string);
}
