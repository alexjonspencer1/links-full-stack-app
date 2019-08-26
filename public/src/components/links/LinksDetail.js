import Component from '../Component.js';

class LinksDetail extends Component {
    renderHTML() {
        const golfCourse = this.props.golfCourse;

        return /*html*/`
            <section class="detail-page">
                <img class="detail-page-logo" src="${golfCourse.url}" alt="${golfCourse.name}">
                <div class="detail-div">
                    <h2>${golfCourse.name}</h2><br>
                        <p class="detail-list-p">Location: ${golfCourse.location}</p>
                        <p class="detail-list-p">Region: ${golfCourse.region}</p>
                        <p class="detail-list-p">Par: ${golfCourse.par}</p>
                        <p class="detail-list-p">Yards: ${golfCourse.yards}</p>
                        <p class="detail-list-p">Architect: ${golfCourse.architect}</p>
                        <p class="detail-list-p">Year Built: ${golfCourse.year}</p>
                </div>
            </section>
        `;
    }
}

export default LinksDetail;