import Component from '../Component.js';
import Header from './Header.js';
import LinksForm from '../../components/links/LinksForm.js';
import { getRegions } from '../../services/links-api.js';

class LinksFormApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Add A Golf Course' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        getRegions()
            .then(regions => {
                const regionForm = new LinksForm ({ regions });
                main.appendChild(regionForm.renderDOM());
            });
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