import Component from '../Component.js';
import Header from './Header.js';
import LinksList from '../links/LinksList.js';
import { getGolfCourse } from '../../services/links-api.js';


class LinksListApp extends Component {

    onRender(dom) {
        const header = new Header({ title: 'Golf Courses' });
        dom.prepend(header.renderDOM());

        const list = new LinksList({ golfCourse: [] });
        const main = dom.querySelector('main');
        main.appendChild(list.renderDOM());

        golfCourse().then(golfCourse => {
            list.update({ golfCourse });
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

export default LinksListApp;