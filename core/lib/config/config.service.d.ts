export declare abstract class ConfigService {
    abstract get(key: string): string | undefined;
    getOrThrow(key: string): string;
    getOrDefault(key: string, defaultValue: string): string;
}
