import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        const title = this.props.title || 'Famous Golf Courses';

        return /*html*/`
            <header>
                <img class="header-logo" src="/assets//page-logo.png" alt="golf-site-logo">
                <h1>${title}</h1>
                <nav>
                    <a href="./">Home |</a>
                    <a href="./links-list.html">Golf Courses |</a>
                    <a href="./links-form.html">Add A Golf Course</a>
                </nav>
            </header>
        `;
    }
}

export default Header;