
//Validation of the Css property of the Blue bite raffele Page
describe("Given : User lands on the Blue bit Raffel page by clicking the Link", () => {
    beforeEach(function () {
        cy.visit("https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca");
    })

    it('Then: The User experience should be as per acceptance creteria', () => {

        // Wait time for the page to load on the browser screen
        cy.wait(2000);

        // Assertion  that the current URL is as expected
        cy.url().should('eq', 'https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca');

        //------------------------------------Assertions to validate the images present on sceen
        // Assertion to check the presence of accepted page on the application
        cy.get('img[src="https://assets-global.website-files.com/5aa16619a722600001c19c3f/5ad4d8b3d3f2b047b6e10cde_cs-hero-adiparley2017.jpg"]').should('be.visible');

        // Assertion to check the extension of the images present
        cy.get('img').should('have.attr', 'src').and('match', /.*\.jpg$/);

        // Assertion for image at bottom
        cy.get('img[src="https://assets-global.website-files.com/5aa16619a722600001c19c3f/5f2b26cac5ffe2ecb2c1d803_blue-bite-Adidas%20Parley-2017-01.jpg"]').should('be.visible');

        // Assertion to check the extension of the images present
        cy.get('img').should('have.attr', 'src').and('match', /.*\.jpg$/);

        //-------------------------------Assetion for title of the page and the component
        // Assertion  the page title colour of the text and size of the text
        cy.wait(300);
        cy.get('.snippet__Body-sc-12bo3rm-0')
            .should('contain.text', 'Enter chance to win!');
        cy.get('.snippet__Body-sc-12bo3rm-0')
            .should('be.visible')
            .and('have.css', 'color', 'rgb(0, 0, 0)')
            .and('have.css', 'font-size', '20px');

        // Assertion to check the name field 
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('.shared__FormLabel-sc-19918pz-0').eq(0)
            .should('be.visible')
            .should('contain.text', 'Name*')
            .and('have.css', 'color', 'rgb(107, 107, 107)')
            .and('have.css', 'font-size', '14px');
        // Assertion of input field present for "name"
        cy.get('input[name="name"]')
            .should('exist')
            .should('have.css', 'border-color', 'rgb(221, 221, 221)')
            .and('have.css', 'font-size', '14px')

        // Assertion to check the email id field
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('.shared__FormLabel-sc-19918pz-0').eq(1)
            .should('be.visible')
            .should('contain.text', 'Email*')
            .and('have.css', 'color', 'rgb(107, 107, 107)')
            .and('have.css', 'font-size', '14px');
        // Assertion of input field present for "email"
        cy.get('input[name="email"]')
            .should('exist')
            .should('have.css', 'border-color', 'rgb(221, 221, 221)')
            .and('have.css', 'font-size', '14px')

        // Assertion to check the age field 
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('.shared__FormLabel-sc-19918pz-0').eq(2)
            .should('be.visible')
            .should('contain.text', 'Age*')
            .and('have.css', 'color', 'rgb(107, 107, 107)')
            .and('have.css', 'font-size', '14px');

        // Assertion of input field present for "age"
        cy.get('input[name="age"]')
            .should('exist')
            .should('have.css', 'border-color', 'rgb(221, 221, 221)')
            .and('have.css', 'font-size', '14px')

        // Assertion to check Reason field
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('.shared__FormLabel-sc-19918pz-0').eq(3)
            .should('be.visible')
            .should('contain.text', 'Reason')
            .and('have.css', 'color', 'rgb(107, 107, 107)')
            .and('have.css', 'font-size', '14px');

        // Assertion of input field present for "Reason"
        cy.get('input[name="reason"]')
            .should('exist')
            .should('have.css', 'border-color', 'rgb(221, 221, 221)')
            .and('have.css', 'font-size', '14px')

        // Assertion to check the submit button
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('button[type="button"]')
            .should('be.visible')
        .and('contain.text', "Submit")
            .and('have.css', 'color', 'rgb(255, 255, 255)') 
            .and('have.css', 'font-size', '14px') // Replace with the expected font size
            .and('have.css', 'position', 'relative');

        // validating if field is getting highlighted if focused
        // This block will fail because it is not as per acceptance
        cy.get('input[name="name"]')
            .focus()
            .should('have.css', 'border-color', 'rgb(0, 0, 255)');
        cy.get('input[name="email"]')
            .focus()
            .should('have.css', 'border-color', 'rgb(0, 0, 255)');
        cy.get('input[name="age"]')
            .focus()
            .should('have.css', 'border-color', 'rgb(0, 0, 255)');
        cy.get('input[name="reason"]')
            .focus()
            .should('have.css', 'border-color', 'rgb(0, 0, 255)');

    });
});
describe("Given : If User dont fill any details in the input field and click on submit button", () => {
    beforeEach(function () {
        cy.visit("https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca");
    })

    it('Then: Should turn the name field border red on validation failure', () => {
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('button[type="button"]').click();

        cy.get('input[name="name"]')
            .should('have.css', 'border-color', 'rgb(255, 0, 0)');
    });

    it('Then: Should turn the email field border red on validation failure', () => {
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('button[type="button"]').click();

        cy.get('input[name="email"]')
            .should('have.css', 'border-color', 'rgb(255, 0, 0)'); 
    });

    it('Then: Should turn the age field border red on validation failure', () => {
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('button[type="button"]').click();

        cy.get('input[name="age"]')
            .should('have.css', 'border-color', 'rgb(255, 0, 0)'); 
    });

    it('Then: Should turn the reason field border red on validation failure', () => {
        cy.get('.form__FormWrapper-sc-vgm4n7-0').find('button[type="button"]').click();

        cy.get('input[name="reason"]')
            .should('have.css', 'border-color', 'rgb(255, 0, 0)'); 
    });
    it('Then: Should display an error message and highlight the name field if "name"is invalid', () => {
        // Block will fail as it is a bug
        // Fill out the form fields
        // Define the array of invalid values for the name field
        const invalidNames = [' ', '12345', '!@#$%'];
        invalidNames.forEach((invalidName) => {
            cy.get('input[name="name"]')
                .clear().type(invalidName);

            cy.get('input[name="age"]')
                .type('24');

            cy.get('input[name="email"]')
                .type('varsha.rani@gmail.com');

            cy.get('input[name="reason"]')
                .type('I like sneakers');

            // Click the submit button
            cy.get('button[type="button"]').click();

            // Check for the error message
            cy.get('.error-message')
                .should('be.visible')
                .and('contain.text', 'Name is required');

            // Check if the name field is highlighted
            cy.get('input[name="name"]')
                .should('have.css', 'border-color', 'rgb(255, 0, 0)');
        });
    });
});
describe('Given: User Enters invalid Email ID', () => {

    beforeEach(function () {
        cy.visit("https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca");
    })

    // Array of invalid email values
    const invalidEmails = [
        ' ',
        'varsha.com',
        'varsha@.com',
        'varsha@@rani.com',
        'varsha rani@gmail.com',
        'varsha!rani@gmail.com',
        'varsha@gamilcom',
        '@rani.com',
        'varsha@.com',
        'varsha@rani..com'
    ];
// Code should fail as the implementation is a bug
    invalidEmails.forEach((invalidEmail) => {
        it(`Then: Backend Should display an error message and highlight the email field if email is "${invalidEmail}"`, () => {
            cy.get('input[name="name"]')
                .clear()
                .type('Varsha');
            cy.get('input[name="age"]')
                .clear()
                .type('24');

            cy.get('input[name="email"]')
                .clear()
                .type(invalidEmail);

            cy.get('input[name="reason"]')
                .clear()
                .type('I like shopping');

            // Click the submit button
            cy.get('button[type="button"]').click();

            // Check for the error message
            cy.get('.error-message')
                .should('be.visible')
                .and('contain.text', 'Invalid email address');
            // Check if the email field is highlighted
            cy.get('input[name="email"]')
                .should('have.css', 'border-color', 'rgb(255, 0, 0)'); 
        });
    });
});
describe('Given: When user enters all the valid entry for the input field and submit', () => {
    beforeEach(function () {
        cy.visit("https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca");
    })
    it('Then: Raffel should get processed and a success message should come on the screen with count', () => {

        // Fill out the form fields
        cy.get('input[name="name"]').type('Varsha Rani');
        cy.get('input[name="age"]').type('34');
        cy.get('input[name="email"]').type('varsha.rani@gmail.com');
        cy.get('input[name="reason"]').type('I like shoes and Sneakers');

        // Click the submit button
        cy.get('button[type="button"]').click();

        cy.wait(800);

        // Validate the message displayed after submission
        cy.get('.snippet__Body-sc-12bo3rm-0').eq(1).contains('Submission Confirmed, Varsha Rani')
            .should('be.visible');
        cy.get('.snippet__Body-sc-12bo3rm-0').eq(2).contains('The winner of the raffle will be managed independently and will be contacted via email.')
            .should('be.visible');
        cy.get('.snippet__Body-sc-12bo3rm-0').eq(2).find('strong')
            .invoke('text')
            .then((strongText) => {
                cy.get('.snippet__Body-sc-12bo3rm-0').eq(2).should('contain.text',`The winner of the raffle will be managed independently and will be contacted via email. You have registed 1 submissions.\n`)
            });
        // Validating post Reload the page is empty 
        cy.reload();

        cy.wait(1000);

        // Validate that the form fields are empty
        cy.get('input[name="name"]').should('have.value', '');
        cy.get('input[name="age"]').should('have.value', '');
        cy.get('input[name="email"]').should('have.value', '');
        cy.get('input[name="reason"]').should('have.value', '');

        // Validate that the submit button is still present
        cy.get('button[type="button"]').should('exist');
    });
});
describe('Given: User enters invalid age into the "age" field', () => {
    beforeEach(function () {
        cy.visit("https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca");
    })
    const invalidAges = [' ', 12, 'sdf', '%^&'];

    invalidAges.forEach((age) => {
        it(`Then: Should display an error message for age: "${age}"`, () => {

            // Fill out the form fields
            cy.get('input[name="name"]').type('Varsha');
            cy.get('input[name="email"]').type('varsha.rani@gmail.com');
            cy.get('input[name="reason"]').type('I Like Shoes');

            // Enter the age value from the array
            cy.get('input[name="age"]').clear().type(`${age}`);

            // Click the submit button
            cy.get('button[type="button"]').click();

            // Validate that the error message is displayed
            cy.get('.snippet__Body-sc-12bo3rm-0').should('contain.text', 'Must be 18 or older to enter.');
        });
    });
});
describe('Given: If user fills the Reason filed or leave it blank ', () => {
    beforeEach(function () {
        cy.visit("https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca");
    })
    const reasons = [' ', 'sneakers yay!!'];

    reasons.forEach((reason) => {
        it(`Then: Should confirm submission for reason field: "${reason}"`, () => {

            // Fill out the form fields
            cy.get('input[name="name"]').type('Varsha Rani');
            cy.get('input[name="age"]').type('24');
            cy.get('input[name="email"]').type('varsha.rani@gmail.com');

            // Enter the reason value from the array
            cy.get('input[name="reason"]').clear().type(`${reason}`);

            // Click the submit button
            cy.get('button[type="button"]').click();
            cy.wait(1000);

            // Validate the submission confirmation message
            cy.get('.snippet__Body-sc-12bo3rm-0').eq(1).should('contain.text', 'Submission Confirmed');
        });
    });
});
