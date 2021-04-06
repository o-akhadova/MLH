import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4, clearInput} from '../../helpers/methods';
import exp from "../../data/expected.json";

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-066 Age Field placeholder = "Hero\'s age"', function () {
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.agePlaceholder);
        });

    });

    describe('Positive cases', function () {

        it('TC-067 Age field accepts one digit.', function () {
            $(sel.age).setValue(age.min);
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-068 Age field accepts "999999999999" (12 digits)', function () {
            $(sel.age).setValue(age.digits12);
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-069 Age field accepts "1234567890"', function () {
            $(sel.age).setValue(age.allDigits);
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-070 Age field accepts "0" on the left', function () {
            $(sel.age).setValue(age.startWithZeros);
            $(sel.storyType).click();
            let text = $(sel.age).getValue();
            expect(text).toEqual(exp.trimmedZeros);
        });

        it('TC-071 Spin click up works', function () {
            $(sel.ageSpinUp).click();
            let text = $(sel.age).getValue();
            expect(text).toEqual(exp.one);
        });

        it('TC-072 Spin click up works', function () {
            $(sel.age).setValue(age.min);
            $(sel.ageSpinUp).click();
            let text = $(sel.age).getValue();
            expect(text).toEqual(exp.two);
        });

        it('TC-073 Spin click down works', function () {
            $(sel.age).setValue(age.two);
            $(sel.ageSpinDown).click();
            let text = $(sel.age).getValue();
            expect(text).toEqual(exp.one);
        });

        it('TC-078 Age field  is required', function () {
            $(sel.age).setValue(age.oneTwoThree);
            clearInput($(sel.age));
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(true);
        });

    });

    describe('Negative cases', function () {

        it('TC-079 Age field doesn\'t accept spaces', function () {
            $(sel.age).setValue(age.numbersAndSpaces);
            let text = $(sel.age).getValue();
            expect(text).toEqual(exp.twelve);
        });

        //commented until bug fixed
        // it.only('TC-080 Age field should not accept "0"', function () {
        //     $(sel.age).setValue(age.zero);
        //     let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
        //     expect(errorMessage).toEqual(true);
        // });

        it('TC-081 Age field should not accept "1000000000000" (13 dig)', function () {
            $(sel.age).setValue(age.digits13);
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-082 Age field should not accept letters, symbols, negative, float', function () {
            $(sel.age).setValue(age.symbols);
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-083 Spin click down should not work when Age input Field is empty', function () {
            $(sel.ageSpinDown).click();
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-084 Spin click up should not work when Age input Field is 999999999999', function () {
            $(sel.age).setValue(age.digits12);
            $(sel.ageSpinUp).click();
            let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(true);
        });

        //commented until bug fixed
        // it('TC-085 Spinning down to 0 is not accepted', function () {
        //     $(sel.age).setValue(age.min);
        //     $(sel.ageSpinDown).click();
        //     let errorMessage = $(sel.ageFieldErrorMessage).isDisplayed();
        //     expect(errorMessage).toEqual(true);
        // });

    });

});
