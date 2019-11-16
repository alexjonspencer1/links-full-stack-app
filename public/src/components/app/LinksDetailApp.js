import Component from '../Component.js';
import Header from './Header.js';
import LinksDetail from '../links/LinksDetail.js';
import QUERY from '../../services/QUERY.js';
import { getCourse } from '../../services/links-api.js';

class CatDetailApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');

        const params = QUERY.parse(window.location.search);
        const id = params.id;

        if(!id) {
            window.location = 'links-list.html';
            return;
        }

        getCourse(id)
            .then(golfCourse => {
                const courseDetail = new LinksDetail ({ golfCourse });
                main.appendChild(courseDetail.renderDOM());
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

export default CatDetailApp;