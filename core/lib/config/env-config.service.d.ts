import { ConfigService } from './config.service';
export declare class EnvConfigService extends ConfigService {
    private readonly envConfig;
    constructor(filePath: string);
    get(key: string): string | undefined;
}
