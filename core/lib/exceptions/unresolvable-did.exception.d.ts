import { InvalidDIDException } from './invalid-did.exception';
export declare class UnresolvableDIDException extends InvalidDIDException {
    constructor(assetDID: string);
}
