import { SwaggerAnnotatedLinkedDataProof } from './annotated-proof.class';
export declare class SwaggerAnnotatedVerifiableCredential {
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
    proof?: SwaggerAnnotatedLinkedDataProof;
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
    }, issuanceDate: string, proof?: SwaggerAnnotatedLinkedDataProof, expirationDate?: string);
}
