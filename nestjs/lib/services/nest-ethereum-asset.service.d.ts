import { OnModuleInit } from '@nestjs/common';
import { EthereumAssetService } from '@bloxmove-com/did-asset-library-core-obfuscated';
export declare class NestEthereumAssetService extends EthereumAssetService implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
