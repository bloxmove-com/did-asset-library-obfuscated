import { MissingPermissionException } from './missing-permission.exception';
export declare class MissingDataPropertyPermissionException extends MissingPermissionException {
    constructor(assetDID: string, key: string);
}
