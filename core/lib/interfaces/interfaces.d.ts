export interface IKeyValuePair {
    key: string;
    value: any;
}
export interface IDataProperties {
    [key: string]: any;
}
export declare enum PermissionsEnum {
    CONTROLLER = "CONTROLLER",
    SETDATA = "SETDATA",
    SIGNER = "SIGNER"
}
