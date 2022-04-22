export declare class OntologyUtilService {
    private readonly restUrl;
    private readonly restClient;
    constructor(ontologyRestUrl: string);
    decodeBase64(base64Value: string): Promise<string>;
    prepareDataToSign(header: any, payload: any): Promise<string>;
    getPublicKeys(ontId: string): Promise<any>;
    private asJsonList;
    private removeApostrophes;
    private decodeHex;
}
