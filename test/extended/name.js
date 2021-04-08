import sel from '../../data/selectors';
import {name} from '../../data/testData';
import exp from '../../data/expected.json';
import {clearName} from '../../helpers/methods';

describe('Name field suit', function () {

    beforeEach('Open App', function () {
        browser.url('');
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    describe('Placeholder', function () {

        it('TC-029 Name field placeholder = "Hero\'s name"', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePlaceholder);
        });

    });

    describe('Positive cases', function () {

        it('TC-035 The Name field accepts any digits', function () {
            $(sel.name).setValue(name.allDigits);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-036 The Name field accepts any uppercase  letters', function () {
            $(sel.name).setValue(name.uppercaseLetters);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-037 The Name field accepts any lowercase letters', function () {
            $(sel.name).setValue(name.lowercaseLetters);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-038 The Name field accepts any letters', function () {
            $(sel.name).setValue(name.anyLetters);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-039 The Name field accepts any special symbols', function () {
            $(sel.name).setValue(name.symbols);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-040 The Name field accepts spaces', function () {
            $(sel.name).setValue(name.space);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-041 The Name field accepts 69 symbols', function () {
            $(sel.name).setValue(name.sixtyNineSymbols);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-042 The Name field accepts 70 symbols', function () {
            $(sel.name).setValue(name.seventySymbols);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-043 The Name field accepts  1 letter', function () {
            $(sel.name).setValue(name.oneLetter);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-044 The Name field accepts  1 special symbol', function () {
            $(sel.name).setValue(name.oneSymbol);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

        it('TC-045 The Name field accepts  1 digit', function () {
            $(sel.name).setValue(name.oneDigit);
            let errorMessage = $(sel.nameFieldErrorMessage).isDisplayed();
            expect(errorMessage).toEqual(false);
        });

    });

    describe('Negative cases', function () {

        it('TC-047 The Name field required', function () {
            $(sel.name).setValue(name.my);
            clearName($(sel.name));
            let nameError = $(sel.nameFieldErrorMessage);
            nameError.waitForDisplayed({ timeout: 3000 });
            let errorMessage = nameError.getText();
            expect(errorMessage).toEqual(exp.requiredMessage);
        });

        it.only('TC-049 The Name field doesn\'t accept 71 symbols', function () {
            $(sel.name).setValue(name.seventyOneSymbols);
            let nameError = $(sel.nameFieldErrorMessage);
            nameError.waitForDisplayed({ timeout: 3000 });
            let errorMessage = nameError.getText();
            expect(errorMessage).toEqual(exp.nameField70SymbolsError);
        });

    });

});
