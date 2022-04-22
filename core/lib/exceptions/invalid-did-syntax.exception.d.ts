import { InvalidDIDException } from './invalid-did.exception';
export declare class InvalidDIDSyntaxException extends InvalidDIDException {
    constructor(assetDID: string);
}
