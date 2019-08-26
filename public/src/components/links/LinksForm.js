import Component from '../Component.js';
import { addCourse } from '../../services/links-api.js';

class LinksForm extends Component {

    onRender(form) {
        const parRange = form.querySelector('#par');
        const parDisplay = form.querySelector('#par-display');
        const syncPar = () => parDisplay.textContent = parRange.value;
        parRange.addEventListener('input', syncPar);
        syncPar();

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const golfCourse = {
                name: formData.get('name'),
                location: formData.get('location'),
                regionId: formData.get('region-id'),
                par: +formData.get('par'),
                yards: +formData.get('yards'),
                architect: formData.get('architect'),
                year: +formData.get('year'),
                url: formData.get('url'),

            };

            addCourse(golfCourse)
                .then((/*saved*/) => {
                    window.location = `links-list.html`;
                    console.log(golfCourse);
                })
                .catch(err => {
                    console.log('course not saved', err);
                });
        });

    }

    renderHTML() {
        const regions = this.props.regions;
        console.log(regions);
        const optionsList = regions.map(region => {
            return /*html*/`
            <option value="${region.id}">${region.region}</option>
            `;
        });
        console.log(optionsList);

        return /*html*/`
            <form>
                <p class="input-font">
                    <label for="name">Name</label> <br>
                    <input id="name" name="name" required placeholder="Golf Course Name">
                </p>
                <p>
                    <label for="location">Location</label> <br>
                    <input id="location" name="location" required placeholder="Location">
                </p>
                <p>
                    <label for="region">Region</label> <br>
                    <select id="region" name="region-id" required>
                        <option disabled selected>Select A Region</option>
                        ${optionsList.join('')}
                    </select>
                </p>
                <p>
                    <label for="par">Par</label> <br>
                    <span class="horizontally-centered-slider">
                        <input id="par" name="par" type="range" min="65" max="75" value="75">
                        <span id="par-display">72</span>
                    </span>
                </p>
                <p>
                    <label for="yards">Total Yards</label><br>
                    <input id="yards" name="yards" required placeholder="Yards">
                </p>
                <p>
                    <label for="architect">Architect</label><br>
                    <input id="architect" name="architect" required placeholder="Architect">
                </p>
                <p>
                    <label for="year">Year Built</label> <br>
                    <input id="year" name="year" required placeholder="Year Built">
                </p>
                <p>
                    <label for="url">Image URL</label> <br>
                    <input id="url" name="url" required placeholder="Insert Image URL">
                </p>
                <p>
                    <button>Add Course</button>
                </p>
            </form>
            
        `;
    }
}

export default LinksForm;