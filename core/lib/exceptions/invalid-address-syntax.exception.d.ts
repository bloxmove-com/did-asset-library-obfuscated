import { InvalidAddressException } from './invalid-address.exception';
export declare class InvalidAddressSyntaxException extends InvalidAddressException {
    constructor(address: string);
}
