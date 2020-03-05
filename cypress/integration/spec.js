describe('Sapper template app', () => {

	describe('Home page', () => {
		beforeEach(() => {
			cy.visit('/');
		});
	
		it('has the correct <title>', () => {
			cy.title().should('eq', 'Sapper SEO Trial | Sapper SEO Trial [Settings]');
		});

		it('has the correct <meta description>', () => {
			cy.get('head meta[name="description"]')
				.should("have.attr", "content", "Home page description");
		});

		it('has the correct <h1>', () => {
			cy.contains('h1', 'Sapper SEO Trial');
		});
	});

	describe('About page', () => {
		beforeEach(() => {
			cy.visit('/about');
		});
	
		it('has the correct <title>', () => {
			cy.title().should('eq', 'About | Sapper SEO Trial [Settings]');
		});

		it('has the correct <meta description>', () => {
			cy.get('head meta[name="description"]')
				.should("have.attr", "content", "About page description");
		});

		it('has the correct <h1>', () => {
			cy.contains('h1', 'About');
		});
	});

	describe('Blog page', () => {
		beforeEach(() => {
			cy.visit('/blog');
		});
	
		it('has the correct <title>', () => {
			cy.title().should('eq', 'Blog | Sapper SEO Trial [Settings]');
		});

		it('has the correct <meta description>', () => {
			cy.get('head meta[name="description"]')
				.should("have.attr", "content", "Blog page description");
		});

		it('has the correct <h1>', () => {
			cy.contains('h1', 'Blog');
		});
	});

	describe('Blog Sub page', () => {
		beforeEach(() => {
			cy.visit('/blog/what-is-sapper');
		});
	
		it('has the correct <title>', () => {
			cy.title().should('eq', 'What is Sapper? | Sapper SEO Trial [Settings]');
		});

		it('has the correct <meta description>', () => {
			cy.get('head meta[name="description"]')
				.should("have.attr", "content", "Blog page description");
		});

		it('has the correct <h1>', () => {
			cy.contains('h1', 'What is Sapper?');
		});
	});
});