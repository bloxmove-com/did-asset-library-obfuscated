import { VerifiablePresentation } from '..';
import { VerifiableCredential } from '../classes/verifiable-credential.class';
export declare class AssetHelperService {
    private readonly loggerFormat;
    private readonly loggerOptions;
    private readonly logger;
    isVerifiableCredentialValid(verifiableCredential: VerifiableCredential | string, verifySignatureFunction: (signerDID: string, message: string, signature: string) => Promise<boolean>, expectedDidMethod?: string): Promise<boolean>;
    isVerifiablePresentationValid(expectedSignerDid: string, verifiablePresentation: VerifiablePresentation | string, verifySignatureFunction: (signerDID: string, message: string, signature: string) => Promise<boolean>, expectedDidMethod?: string): Promise<boolean>;
    isStringVerifiableCredentialSigned(verifiableCredential: string, verifySignatureFunction: (signerDID: string, message: string, signature: string) => Promise<boolean>, expectedDidMethod?: string): Promise<boolean>;
    isStringVerifiablePresentationValid(expectedSignerDid: string, verifiablePresentation: string, verifySignatureFunction: (signerDID: string, message: string, signature: string) => Promise<boolean>, expectedDidMethod?: string): Promise<boolean>;
    isObjectVerifiableCredentialSigned(verifiableCredential: VerifiableCredential, verifySignatureFunction: (signerDID: string, message: string, signature: string) => Promise<boolean>, expectedDidMethod?: string): Promise<boolean>;
    isObjectVerifiablePresentationValid(expectedSignerDid: string, verifiablePresentation: VerifiablePresentation, verifySignatureFunction: (signerDID: string, message: string, signature: string) => Promise<boolean>, expectedDidMethod?: string): Promise<boolean>;
    extractVerifiableCredentialsFromString(verifiablePresentation: string): string[];
    transformStringToObjectVerifiableCredential(verifiableCredential: string): VerifiableCredential;
    private getDidMethod;
    private decodeBase64;
    private extractJwtParts;
    private extractPayloadFromJwt;
}
