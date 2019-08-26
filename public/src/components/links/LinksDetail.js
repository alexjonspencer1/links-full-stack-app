import Component from '../Component.js';

class LinksDetail extends Component {
    renderHTML() {
        const golfCourse = this.props.golfCourse;

        return /*html*/`
            <section class="detail-page">
                <img class="detail-page-logo" src="${golfCourse.url}" alt="${golfCourse.name}">
                <div class="detail-div">
                    <h2>${golfCourse.name}</h2>
                        <p>Location: ${golfCourse.location}</p>
                        <p>Region: ${golfCourse.region}</p>
                        <p>Par: ${golfCourse.par}</p>
                        <p>Yards: ${golfCourse.yards}</p>
                        <p>Architect: ${golfCourse.architect}</p>
                        <p>Year Built: ${golfCourse.year}</p>
                </div>
            </section>
        `;
    }
}

export default LinksDetail;