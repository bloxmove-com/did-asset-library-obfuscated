import { OnModuleInit } from '@nestjs/common';
import { OntologyAssetService } from '@bloxmove-com/did-asset-library-core-obfuscated';
export declare class NestOntologyAssetService extends OntologyAssetService implements OnModuleInit {
    onModuleInit(): Promise<void>;
}
