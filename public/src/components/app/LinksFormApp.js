import Component from '../Component.js';
import Header from './Header.js';

class LinksFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add A Golf Course' });
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here --!>
                <main>
                </main>
            </div>   
        `;
    }
}

export default LinksFormApp;