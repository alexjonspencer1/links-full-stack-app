import Component from '../Component.js';

class LinksItem extends Component {
    renderHTML() {
        const golfCourse = this.props.golfCourse;

        return /*html*/`
            <li>
                <img class="golf-card-image" src="${golfCourse.url}" alt="${golfCourse.name}">
                    <div class="card-text-div">
                        <a class="li" href="links-detail.html?id=${golfCourse.id}">
                        <h1>${golfCourse.name}</h1><br>
                        </a>
                            <p>Location: ${golfCourse.location}</p>
                            <p>Region: ${golfCourse.region}</p>
                            <p>Par: ${golfCourse.par}</p>
                            <p>Yards: ${golfCourse.yards}</p>
                            <p>Architect: ${golfCourse.architect}</p>
                            <p>Year Built: ${golfCourse.year}</p>
                    </div>
        </li>
            
        `;
    }
}

export default LinksItem;