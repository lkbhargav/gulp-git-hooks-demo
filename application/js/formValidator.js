    /**
    * todo
    */
var formValidator = (function() {

    /**
    * This function validates if a field is empty.
    * @param {string} field - The value of the field.
    * @return {boolean} - It's true when the validation passes and false when it fails.
    */
    var fieldIsNotEmpty = function(field) {
        if (field === '') {
            return false;
        }
        return true;
    };

    /**
    * This function validates if a field is number.
    * @param {number} field - The value of the field.
    * @return {boolean} - It's true when the validation passes and false when it fails.
    */
    var fieldIsNumber = function(number) {
        if (isNaN(number)) {
            return false;
        }
        return true;
    };

    /**
    * This function validates if a field is a valid email.
    * @param {string} field - The value of the field.
    * @return {boolean} - It's true when the validation passes and false when it fails.
    */
    var fieldIsValidEmail = function(email) {
        var emailRegEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRegEx.test(email)) {
            return true;
        }
        return false;
    };

    /**
    * This function validates if a field is long enough.
    * @param {string} field - The value of the field.
    * @param {number} limit - The limit of the field's length.
    * @return {boolean} - It's true when the validation passes and false when it fails.
    */
    var fieldHasMinLen = function(field, limit) {
        if (!isNaN(field)) {
            field = field.toString();
        }
        if (field.length >= limit) {
            return true;
        }
        return false;
    };

    /**
    * This function validates if a field is not too long.
    * @param {string} field - The value of the field.
    * @param {number} limit - The limit of the field's length.
    * @return {boolean} - It's true when the validation passes and false when it fails.
    */
    var fieldHasMaxLen = function(field, limit) {
        if (!isNaN(field)) {
            field = field.toString();
        }

        if (field.length <= limit) {
            return true;
        }
        return false;
    };

    var showError = function(field, value, validator, limit) {
        if (limit > 0) {
            validation = validatorMapping[validator](value, limit);
        }
        else
            validation = validatorMapping[validator](value);

        if (validation) {
            return '';
        }
        return field.charAt(0).toUpperCase() + field.slice(1) + errorMsgMapping[validator];
    };

    var validatorMapping = {
        fieldIsNotEmpty: fieldIsNotEmpty,
        fieldIsNumber: fieldIsNumber,
        fieldIsValidEmail: fieldIsValidEmail,
        fieldHasMinLen: fieldHasMinLen,
        fieldHasMaxLen: fieldHasMaxLen
    };

    var errorMsgMapping = {
        fieldIsNotEmpty: ' is empty.',
        fieldIsNumber: ' is not a number.',
        fieldIsValidEmail: ' is not a valid.',
        fieldHasMinLen: ' is too small.',
        fieldHasMaxLen: ' is too big.'
    };

    return {
        fieldIsNotEmpty: fieldIsNotEmpty,
        fieldIsNumber: fieldIsNumber,
        fieldIsValidEmail: fieldIsValidEmail,
        fieldHasMinLen: fieldHasMinLen,
        fieldHasMaxLen: fieldHasMaxLen,
        showError: showError
    };

}());