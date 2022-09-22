class TicketDTO {
    #text;

    constructor(text) {
        this.#text = text;
    }

    toString() {
        return JSON.stringify({title: "", text: this.#text});
    }

    toJSON() {
        return {title: "", text: this.#text};
    }
}

export default TicketDTO;