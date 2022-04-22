export declare const ECDSA_SECP_256K1_RECOVERY_SIGNATURE_2020_URL = "https://raw.githubusercontent.com/bloxmove-com/bloxmove-vocab/master/lds-ecdsa-secp256k1-recovery2020";
declare const ECDSA_SECP_256K1_RECOVERY_SIGNATURE_2020_VOCAB: {
    "https://raw.githubusercontent.com/bloxmove-com/bloxmove-vocab/master/lds-ecdsa-secp256k1-recovery2020": {
        "@context": {
            id: string;
            type: string;
            "@protected": boolean;
            proof: {
                "@id": string;
                "@type": string;
                "@container": string;
            };
            EcdsaSecp256k1RecoveryMethod2020: {
                "@id": string;
                "@context": {
                    "@protected": boolean;
                    id: string;
                    type: string;
                    controller: {
                        "@id": string;
                        "@type": string;
                    };
                    blockchainAccountId: string;
                    publicKeyJwk: {
                        "@id": string;
                        "@type": string;
                    };
                };
            };
            EcdsaSecp256k1RecoverySignature2020: {
                "@id": string;
                "@context": {
                    "@protected": boolean;
                    id: string;
                    type: string;
                    challenge: string;
                    created: {
                        "@id": string;
                        "@type": string;
                    };
                    domain: string;
                    expires: {
                        "@id": string;
                        "@type": string;
                    };
                    jws: string;
                    nonce: string;
                    proofPurpose: {
                        "@id": string;
                        "@type": string;
                        "@context": {
                            "@protected": boolean;
                            id: string;
                            type: string;
                            assertionMethod: {
                                "@id": string;
                                "@type": string;
                                "@container": string;
                            };
                            authentication: {
                                "@id": string;
                                "@type": string;
                                "@container": string;
                            };
                            capabilityInvocation: {
                                "@id": string;
                                "@type": string;
                                "@container": string;
                            };
                            capabilityDelegation: {
                                "@id": string;
                                "@type": string;
                                "@container": string;
                            };
                            keyAgreement: {
                                "@id": string;
                                "@type": string;
                                "@container": string;
                            };
                        };
                    };
                    proofValue: string;
                    verificationMethod: {
                        "@id": string;
                        "@type": string;
                    };
                };
            };
        };
    };
};
export { ECDSA_SECP_256K1_RECOVERY_SIGNATURE_2020_VOCAB };
