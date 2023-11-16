const overviewButtons = document.querySelectorAll('.overview__button');
const components = document.querySelectorAll('.component');

// for each overview button
overviewButtons.forEach(button => {
	// when I click on a button, run displayComponent
	button.addEventListener('click', displayComponent)
});

// iterate through all components and display the one that
// matches with the "data-component" value.
// then, iterate through all overview buttons and set the
// active class based on the same value.
function displayComponent(event) {
	// event.currentTarget always refers to the element used
	// in (element).addEventListener, in this case, it refers
	// to the button that was clicked
	const button = event.currentTarget;

	// extract the "data-component" value, e.g. "accordion",
	// "breadcrumbs", "button", etc.
	const componentToDisplay = button.dataset.component;

	// for each component element...
	components.forEach(component => {
		// remove the "visible" class
		component.classList.remove('component--visible');

		// but if the "data-name" value equals the value
		// from the button we just clicked, add the class
		if (component.dataset.name === componentToDisplay) {
			component.classList.add('component--visible');
		}
	});

	overviewButtons.forEach(button => {
		// remove the "active" class
		button.classList.remove('overview__button--active');

		// but if this button has a "data-component" value that
		// equals to the one we just clicked (meaning it's the
		// same button), add the active class
		if (button.dataset.component === componentToDisplay) {
			button.classList.add('overview__button--active');
		}
	});
}

// Back to the top - button

const topButton = document.querySelector('.button-top');
topButton.addEventListener('click', () =>{
	window.scroll({
		top: 0, 
		left: 0, 
		behavior: 'smooth'
	 });
});