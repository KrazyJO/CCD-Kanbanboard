class TicketDTO {
    #text;
    #id;

    constructor(id, text) {
        this.#text = text;
    }

    toString() {
        return JSON.stringify({title: "", text: this.#text});
    }

    toJSON() {
        const transform = {title: "", text: this.#text};
        if (this.#id)
        {
            transform.id = this.#id;
        }
        return transform;
    }
}

export default TicketDTO;