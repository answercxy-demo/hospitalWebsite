// const SOURCE_URL = 'https://www.xiyubaba.com';

// const USER = 'CXY';

//export const static = {USER, SOURCE_URL};

export class StaticVariable {

    private AUTHOR = 'CXY';

    private SOURCE_DOMAIN = 'https://www.xiyubaba.com';

    private IMG_PATH = this.SOURCE_DOMAIN + '/static/img/';

    private ICON_PATH = this.SOURCE_DOMAIN + '/static/icon/';

    constructor() {
    }

    getAuthor(): string {
        return this.AUTHOR;
    }

    getImgPath(): string {
        return this.IMG_PATH;
    }

    getIconPath(): string {
        return this.ICON_PATH;
    }
}