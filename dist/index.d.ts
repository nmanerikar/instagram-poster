export declare class InstagramPoster {
    private ig;
    constructor();
    login(username: string, password: string): Promise<void>;
    post(images: string[], caption: string, location?: string): Promise<string>;
}
