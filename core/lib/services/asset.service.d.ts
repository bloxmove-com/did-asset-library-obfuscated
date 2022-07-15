import { DIDDocument } from 'did-resolver';
import { IDataProperties, PermissionsEnum, VerifiableCredential, VerifiablePresentation } from '..';
export declare abstract class AssetService {
    /**
     * Performs necessary initialization logic for the service implementation.
     *
     * @returns {Promise<void>} Resolves when the initialization is finished.
     */
    abstract init(): Promise<void>;
    /**
     * @param {string}          assetName the name of the asset to create
     * @param {IDataProperties} initialDataProperties the initial dataProperties to set for the asset
     * @param {string}          assetType (optional) the type of the asset to create
     * @param {string}          accountAddress (optional) the address of the asset
     *
     * @returns {Promise<string>} the DID of the asset
     */
    abstract createAsset(assetName: string, initialDataProperties: IDataProperties, assetType?: string, accountAddress?: string): Promise<string>;
    /**
     * @param {string}        assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     * @param {string[]}      involvedPartiesDIDs an array of DIDs from people or things that should get certain permissions for the asset
     * @param {PermissionsEnum[]}  permissions an array of Permissions. SETDATA to set data in SC, SIGNER to add as delegator in the DID Document,
     * CONTROLLER to be added as delegator in the DID Document and allowed to added Services using the contract
     *
     * @returns {Promise<void>}
     */
    abstract addInvolvedParties(assetDID: string, involvedPartiesDIDs: string[], permissions: PermissionsEnum[]): Promise<void>;
    /**
     *
     * @param {string}                  assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     * @param {PermissionsEnum}         permission the permission
     *
     * @returns {Promise<string[]>} an array of DIDs from people or things that are involved in managing the asset
     */
    abstract getInvolvedParties(assetDID: string, permission: PermissionsEnum): Promise<string[]>;
    /**
     * @param {string} assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     *
     * @returns {Promise<string>} the DID of the owner
     */
    abstract getOwner(assetDID: string): Promise<string>;
    /**
     * @param {string}  assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     * @param {string}  key the key of the DataProperty
     * @param {string}  assetType (optional) the type of the asset
     *
     * @returns {Promise<string | null>} the value of the DataProperty of an asset for the given key OR null
     */
    abstract getDataProperty(assetDID: string, key: string, assetType?: string): Promise<string | null>;
    /**
     * @param {string} assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     * @param {string} key the key of the DataProperty to set
     * @param {string} value the value of the DataProperty to set
     * @param {string} assetType the type of the asset
     * @param {boolean} changable if the data is mutable, can be set only for contractAsset type
     *
     * @throws {MissingDataPropertyPermissionException} if the caller has no permission to set the value for the given key
     *
     * @returns {Promise<void>}
     */
    abstract createDataProperty(assetDID: string, key: string, value: string, assetType?: string, changable?: boolean): Promise<void>;
    /**
     * @param {string} assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     * @param {string} key the key of the DataProperty to set
     * @param {string} value the value of the DataProperty to set
     * @param {string}  assetType the type of the asset
     *
     * @throws {MissingDataPropertyPermissionException} if the caller has no permission to set the value for the given key
     *
     * @returns {Promise<void>}
     */
    abstract updateDataProperty(assetDID: string, key: string, value: string, assetType?: string): Promise<void>;
    /**
     * @param {string} assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     * @param {string} topic the topic to get attestations for (e.g. "/company")
     *
     * @returns {Promise<(VerifiableCredential | string)[]>} the verifiable credential of an
     * asset for the given topic (may be empty) as JWT string or JSON-LD Verifiable Credential
     */
    abstract getAttestations(assetDID: string, topic: string): Promise<Array<VerifiableCredential | string>>;
    /**
     * @param {string} assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi)
     * @param {string} topic the topic to set an attestation for the given asset
     * @param {string} vc verifiable credential to be set for the attestation
     *
     * @returns {Promise<void>}
     */
    abstract setAttestation(assetDID: string, topic: string, vc: string | VerifiableCredential): Promise<void>;
    /**
     *
     * @param {string} name the name to resolve
     *
     * @returns {Promise<string | null>} the assetDID OR null (if no name is set)
     */
    abstract resolveName(name: string): Promise<string | null>;
    /**
     * Registers either the root or child+parent name(s) with the ENS Registry.
     * @param {string} name the name that should point to an asset
     * @param {string} assetDID the DID of the asset following the w3c standard (e.g. did:example:123456789abcdefghi),
     * set to ZERO_ADDRESS to revoke an entry.
     *
     * @returns {Promise<void>}
     */
    abstract setName(name: string, assetDID: string): Promise<void>;
    /**
     *
     * If any of the valid signers of a document is signer of the message then the signature is accepted.
     * @param {string} signerDID the DID of the signer
     * @param {string} message the message to verify
     * @param {string} signature the signature of the signed message
     *
     * @returns {Promise<boolean>} true if valid || false if invalid
     */
    abstract verifySignature(signerDID: string, message: string, signature: string): Promise<boolean>;
    /**
     * @param {string} message the message to sign
     *
     * @returns {Promise<string>} the signature
     */
    abstract signMessage(message: string): Promise<string>;
    /**
     * @param {string} assetDID the DID of the asset
     *
     * @returns {Promise<boolean>} true if valid || false if invalid
     */
    abstract isValidDID(assetDID: string): Promise<boolean>;
    /**
     *
     * @param {string} assetDID
     *
     * @returns {Promise<DIDDocument} the DID document of the asset
     */
    abstract getDIDDocument(assetDID: string): Promise<DIDDocument>;
    /**
     *
     * @param {DIDDocument} didDocument  the DID document to set for the asset
     *
     * @returns {Promise<void>}
     */
    abstract setDIDDocument(didDocument: DIDDocument): Promise<void>;
    /**
     *
     * @param {string} type the type of the VerifiableCredential, e.g. "VehicleAccessCredential"
     * @param {any} credentialSubject the type specific presentation of the credentialSubject
     * @param {string} proofPurpose purpose of the proof e.g. authentication
     * @param {string} expirationDate (optional) the expiration date
     *
     * @returns {Promise<VerifiableCredential | string>} the VerifiableCredential (including the signed proof)
     */
    abstract createVerifiableCredential(type: string[], credentialSubject: {
        id: string;
        [key: string]: any;
    } | Array<{
        id: string;
        [key: string]: any;
    }>, proofPurpose?: string, expirationDate?: string | Date): Promise<VerifiableCredential | string>;
    /**
     *
     * @param {VerifiableCredential[] | string[]} verifiableCredentials
     * @param {string} proofPurpose an optional purpose of the proof
     * @param {string} expirationDate an optional expiration date of VP
     *
     * @returns {Promise<VerifiablePresentation | string>} the VerifiablePresentation (including the signed proof) or JWT format as string
     */
    abstract createVerifiablePresentation(verifiableCredentials: Array<VerifiableCredential | string>, proofPurpose?: string, expirationDate?: string): Promise<VerifiablePresentation | string>;
    /**
     *
     * @param {VerifiableCredential | string} verifiableCredential
     *
     * @returns {Promise<VerifiableCredential | string | undefined>} the VerifiableCredential or JWT format as string
     */
    abstract validateVerifiableCredential(verifiableCredential: VerifiableCredential | string): Promise<VerifiableCredential | undefined>;
    /**
     *
     * @param {string} expectedSignerDid
     * @param {VerifiablePresentation | string} verifiablePresentation
     *
     * @returns {Promise<VerifiableCredential[]>} the VerifiableCredential[]
     */
    abstract validateVerifiablePresentation(expectedSignerDid: string, verifiablePresentation: VerifiablePresentation | string): Promise<VerifiableCredential[]>;
}
