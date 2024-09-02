import { IgApiClient } from 'instagram-private-api';
import fs from 'fs';
export class InstagramPoster {
    constructor() {
        this.ig = new IgApiClient();
    }
    async login(username, password) {
        this.ig.state.generateDevice(process.env.INSTAGRAM_USERNAME);
        try {
            const auth = await this.ig.account.login(username, password);
        }
        catch (error) {
            console.log('Authentication error!');
            console.log(JSON.stringify(error));
            throw error;
        }
    }
    async post(images, caption, location) {
        let res;
        if (images.length === 1) {
            res = await this.ig.publish.photo({
                file: await fs.promises.readFile(images[0]),
                caption,
            });
        }
        else {
            res = await this.ig.publish.album({
                items: await Promise.all(images.map(async (imagePath) => ({
                    file: await fs.promises.readFile(imagePath),
                }))),
                caption,
            });
        }
        return `https://instagram.com/p/${res === null || res === void 0 ? void 0 : res.media.code}`;
    }
}
//# sourceMappingURL=index.js.map