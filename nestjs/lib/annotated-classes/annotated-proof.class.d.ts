export declare class SwaggerAnnotatedLinkedDataProof {
    type: string;
    proofPurpose: string;
    verificationMethod: string;
    created: string;
    domain?: string;
    challenge?: string;
    proofValue?: string;
    jws?: string;
    constructor(type: string, proofPurpose: string, verificationMethod: string, created: string, proofValue?: string, jws?: string, domain?: string);
}
