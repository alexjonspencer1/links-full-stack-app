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
                regionId: +formData.get('region-id'),
                par: formData.get('par'),
                yards: formData.get('yards'),
                architect: formData.get('architect'),
                year: formData.get('year'),
                url: formData.get('url'),

            };

            addCourse(golfCourse)
                .then((/*saved*/) => {
                    window.location = `links-list.html`;
                })
                .catch(err => {
                    console.log('course not saved', err);
                });
        });

    }

    renderHTML() {
        const regions = this.props.regions;
        const optionsList = regions.map(regions => {
            return /*html*/`
                <option value=${regions.id}">${regions.name}</option>
                `;
        });

        return /*html*/`
            <form>
                <p class="input-font">
                    <label for="name">Name</label>
                    <input id="name" name="name" required placeholder="Golf Course Name">
                </p>
                <p>
                    <label for="location">Location</label>
                    <input id="location" name="location" required placeholder="Location">
                </p>
                <p>
                    <label for="region">Region</label>
                    <select>
                        <option disabled selected>Select A Region</option>
                        ${optionsList.join('')}
                    </select>
                </p>
                <p>
                    <label for="par">Par</label>
                    <span class="horizontally-centered-slider">
                        <input id="par" name="par" type="range" min="65" max="75" value="75">
                        <span id="par-display">72</span>
                    </span>
                </p>
                <p>
                    <label for="yards">Total Yards</label>
                    <input id="yards" name="yards" required placeholder="Yards">
                </p>
                <p>
                    <label for="architect">Architect</label>
                    <input id="architect" name="architect" required placeholder="Architect">
                </p>
                <p>
                    <label for="year">Year Built</label>
                    <input id="year" name="year" required placeholder="Year Built">
                </p>
                <p>
                    <button>Add Course</button>
                </p>
            </form>
            
        `;
    }
}

export default LinksForm;