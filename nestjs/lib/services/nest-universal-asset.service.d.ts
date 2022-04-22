import { OnModuleInit } from '@nestjs/common';
import { UniversalAssetService } from '@bloxmove-com/did-asset-library-core-obfuscated';
export declare class NestUniversalAssetService extends UniversalAssetService implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
