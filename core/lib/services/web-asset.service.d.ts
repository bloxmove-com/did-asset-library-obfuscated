import { AssetService } from './asset.service';
import { ConfigService } from '../config/config.service';
import { DIDDocument } from 'did-resolver';
import { VerifiableCredential } from '../classes/verifiable-credential.class';
import { VerifiablePresentation } from '../classes/verifiable-presentation.class';
import { IDataProperties, PermissionsEnum } from '../interfaces/interfaces';
export declare class WebAssetService implements AssetService {
    private readonly config;
    private readonly loggerFormat;
    private readonly loggerOptions;
    private readonly logger;
    private readonly assetHelperService;
    constructor(config: ConfigService);
    createAsset(assetName: string, initialDataProperties: IDataProperties, assetType?: string, accountAddress?: string): Promise<string>;
    setAttestation(assetDID: string, topic: string, vc: string | VerifiableCredential): Promise<void>;
    verifySignature(signerDID: string, message: string, signature: string): Promise<boolean>;
    init(): Promise<void>;
    addInvolvedParties(assetDID: string, involvedPartiesDIDs: string[], permissions: PermissionsEnum[]): Promise<void>;
    getInvolvedParties(assetDID: string, permission: PermissionsEnum): Promise<string[]>;
    getOwner(assetDID: string): Promise<string>;
    getDataProperty(assetDID: string, key: string, assetType?: string): Promise<string | null>;
    createDataProperty(assetDID: string, key: string, value: string, assetType?: string, changable?: boolean): Promise<void>;
    updateDataProperty(assetDID: string, key: string, value: string, assetType?: string): Promise<void>;
    getAttestations(assetDID: string, topic: string): Promise<Array<string | VerifiableCredential>>;
    resolveName(name: string): Promise<string | null>;
    setName(name: string, assetDID: string): Promise<void>;
    signMessage(message: string): Promise<string>;
    isValidDID(assetDID: string): Promise<boolean>;
    setDIDDocument(didDocument: DIDDocument): Promise<void>;
    createVerifiableCredential(type: string[], credentialSubject: {
        [key: string]: any;
        id: string;
    } | Array<{
        [key: string]: any;
        id: string;
    }>, proofPurpose: string, verificationMethod: string, expirationDate?: string | Date): Promise<string | VerifiableCredential>;
    createVerifiablePresentation(verifiableCredentials: Array<string | VerifiableCredential>, proofPurpose: string, verificationMethod: string, expirationDate?: string): Promise<string | VerifiablePresentation>;
    setExternalAttestation(assetDID: string, topic: string, externalVC: string | VerifiableCredential): Promise<void>;
    getPublicKeys(signerDID: string): Promise<any[]>;
    getDIDDocument(userDID: string): Promise<DIDDocument>;
    validateVerifiableCredential(verifiableCredential: VerifiableCredential | string): Promise<VerifiableCredential | undefined>;
    validateVerifiablePresentation(expectedSignerDid: string, verifiablePresentation: VerifiablePresentation | string): Promise<VerifiableCredential[]>;
}
