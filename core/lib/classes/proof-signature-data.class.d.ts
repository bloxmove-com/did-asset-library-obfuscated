export declare class LinkedDataProofSignatureData {
    credentialSubject: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>;
    proofPurpose?: string;
    expirationDate?: string;
    constructor(credentialSubject: any, proofPurpose?: string, expirationDate?: string);
}
