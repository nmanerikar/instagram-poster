export declare class InstagramPoster {
    private ig;
    constructor();
    login(username: string, password: string): Promise<void>;
    getLocation(place?: string): Promise<any>;
    post(images: string[], caption: string, place?: string): Promise<string>;
}
