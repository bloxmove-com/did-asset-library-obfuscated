import { SwaggerAnnotatedLinkedDataProof } from './annotated-proof.class';
import { SwaggerAnnotatedVerifiableCredential } from './annotated-verifiable-credential.class';
export declare class SwaggerAnnotatedVerifiablePresentation {
    '@context': ['https://www.w3.org/2018/credentials/v1'];
    holder?: string;
    type: string[];
    verifiableCredential: Array<SwaggerAnnotatedVerifiableCredential | string>;
    proof: SwaggerAnnotatedLinkedDataProof;
    expirationDate?: string;
    constructor(type: string[], verifiableCredential: Array<SwaggerAnnotatedVerifiableCredential | string>, proof: SwaggerAnnotatedLinkedDataProof, expirationDate?: string);
}
