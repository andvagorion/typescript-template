require('./../css/main.scss')
require('./../html/index.html')

class App {

    container: HTMLElement

    constructor() {
        const root = document.querySelector<HTMLElement>('.app')
        if (!root) {
            throw new ReferenceError("Could not find app container element.");
        }
        this.container = root
    }

    init() {
        this.container.insertAdjacentHTML('beforeend', 'Hello, World.')
    }

}

document.addEventListener('DOMContentLoaded', () => new App().init())