import { ConfigService } from './config.service';
export declare class ObjectConfigService extends ConfigService {
    private readonly envConfig;
    constructor(jsonObject: any);
    get(key: string): string | undefined;
}
