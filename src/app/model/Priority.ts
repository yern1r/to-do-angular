export class Priority {
    id?: number | null;
    title?: string | null;
    color?: string | null;

    constructor(id?: number | null, title?: string | null, color?: string | null) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}
