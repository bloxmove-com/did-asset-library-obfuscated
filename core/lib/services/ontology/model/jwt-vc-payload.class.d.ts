import { OntologyVc } from './ontology-vc.class';
export declare class JwtVcPayload {
    iss: string;
    sub: string;
    exp?: number;
    nbf: number;
    iat: number;
    jti: string;
    vc: OntologyVc;
    constructor(issuerOntId: string, credentialSubject: any, issuanceDate: number, type: string[], verifiableCredentialId: string, expirationDate?: string);
}
