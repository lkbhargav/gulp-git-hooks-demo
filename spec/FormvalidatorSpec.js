/*global describe, it, formValidator, expect */

// Form
describe ('Formvalidator contains', function() {
    // Not empty
    describe ('Required field', function() {
        it ('should be false when the field is empty', function() {
            var r = formValidator.fieldIsNotEmpty('');
            expect(r).toBe(false);
        });
        it ('should be true when the field is not empty', function() {
            var r = formValidator.fieldIsNotEmpty('field');
            expect(r).toBe(true);
        });
    });

    // Number
    describe ('Numerical field', function() {
        it ('should be false when the field is not a number', function() {
            var r = formValidator.fieldIsNumber('number');
            expect(r).toBe(false);

        });
        it ('should be true when the field is a number', function() {
            var r = formValidator.fieldIsNumber(7);
            expect(r).toBe(true);
        });
    });

    // Email signs
    describe ('Validation of email', function() {
        it ('should return false when the email is not valid', function() {
            var r = formValidator.fieldIsValidEmail('');
            expect(r).toBe(false);

        });
        it ('should return true when the email is valid', function() {
            var r = formValidator.fieldIsValidEmail('email@email.com');
            expect(r).toBe(true);
        });
    });

    // Minimum number of letters
    describe ('Validation of fields with minimum number of letters limit', function() {
        it ('should be false when there are not enough letters', function() {
            var r = formValidator.fieldHasMinLen('a', 2);
            expect(r).toBe(false);
        });
        it ('should be true when there are enough letters', function() {
            var r = formValidator.fieldHasMinLen('abc', 2);
            expect(r).toBe(true);
        });
        it ('should be true when there are enough numbers', function() {
            var r = formValidator.fieldHasMinLen(12345678, 8);
            expect(r).toBe(true);
        });
    });

    // Maximum number of letters
    describe ('Validation of fields with maximum number of letters limit', function() {
        it ('should be false when there are too much letters', function() {
            var r = formValidator.fieldHasMaxLen('asdfghjkloiuytresazxcvbnmkl', 25);
            expect(r).toBe(false);
        });
        it ('should be true when there are not more letters than the limit', function() {
            var r = formValidator.fieldHasMaxLen('abcdf', 25);
            expect(r).toBe(true);
        });
        it ('should be true when there are not more numbers than the limit', function() {
            var r = formValidator.fieldHasMaxLen(123456, 25);
            expect(r).toBe(true);
        });
    });

    //Show errors
    describe ('Show error', function() {
        it ('should be empty when there are not errors', function() {
            var r = formValidator.showError('name', '', 'fieldIsNotEmpty');
            expect(r).toBe('name is empty');
        });
        it ('should be name is empty when the field name is empty', function() {
            var r = formValidator.showError('name', 'value', 'fieldIsNotEmpty');
            expect(r).toBe('');
        });
    });

    //Live validation
    xdescribe ('Do the live validation', function() {
        it ('should be true when the keys are pressed', function() {
            var r = formValidator.liveValidation('field', 'keyPress');
            expect(r).toBe(true);
        });
        it ('should be false when the keys are not pressed', function() {
            var r = formValidator.liveValidation('field', !'keyPress');
            expect(r).toBe(false);
        });
    });
});