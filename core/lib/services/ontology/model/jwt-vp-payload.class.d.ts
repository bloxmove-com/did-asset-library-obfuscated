import { VerifiableCredential } from '../../../classes/verifiable-credential.class';
import { OntologyVp } from './ontology-vp.class';
export declare class JwtVpPayload {
    iss: string;
    jti: string;
    nbf: number;
    iat: number;
    exp?: number;
    vp: OntologyVp;
    constructor(issuerOntId: string, uniqueIdentifier: string, issuanceDate: number, verifiableCredentials: Array<VerifiableCredential | string>, expirationDate?: string);
}
