export class Category {
    id?: number | null;
    title?: string | null;

    constructor(id?: number | null, title?: string | null) {
        this.id = id;
        this.title = title;
    }
}
