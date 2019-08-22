import Component from '../Component.js';
import LinksItem from './LinksItem.js';

class LinksList extends Component {

    onRender(dom) {
        const golfCourse = this.props.golfCourse;

        golfCourse.forEach(golfCourse => {
            const props = { golfCourse: golfCourse };
            const linksItem = new LinksItem(props);
            const linksItemDOM = linksItem.renderDOM();
            dom.appendChild(linksItemDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <ul class="card-list"></ul>
        `;
    }
}

export default LinksList;