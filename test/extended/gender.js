import sel from '../../data/selectors';
import {name, age, story} from '../../data/testData';

describe('Gender field suit', function () {

    beforeEach('Open App', function () {
        browser.url('');
    });

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    describe('Positive cases', function () {

        it('TC-053 Button "he" is enabled', function () {
            $(sel.radioBtnHe).click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(true);
        });

        it('TC-054 Button "she" is enabled', function () {
            $(sel.radioBtnShe).click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe).toEqual(true);
        });

        it('TC-055 Button "it" is enabled', function () {
            $(sel.radioBtnIt).click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(true);
        });

        it('TC-056 User can choose only one button at a time: "he"', function () {
            $(sel.radioBtnIt).click();
            $(sel.radioBtnShe).click();
            $(sel.radioBtnHe).click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnShe && btnIt).toEqual(false);
        });

        it('TC-057 User can choose only one button at a time: "she"', function () {
            $(sel.radioBtnHe).click();
            $(sel.radioBtnIt).click();
            $(sel.radioBtnShe).click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnHe && btnIt).toEqual(false);
        });

        it('TC-058 User can choose only one button at a time: "it"', function () {
            $(sel.radioBtnHe).click();
            $(sel.radioBtnShe).click();
            $(sel.radioBtnIt).click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnHe && btnShe).toEqual(false);
        });

        it('TC-059 User can switch from a chosen option to another: "he" -> "she"', function () {
            $(sel.radioBtnHe).click();
            $(sel.radioBtnShe).click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe).toEqual(true);
        });

        it('TC-060 User can switch from a chosen option to another: "he" -> "it"', function () {
            $(sel.radioBtnHe).click();
            $(sel.radioBtnIt).click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(true);
        });

        it('TC-061 User can switch from a chosen option to another: "she" -> "he"', function () {
            $(sel.radioBtnShe).click();
            $(sel.radioBtnHe).click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(true);
        });

        it('TC-062 User can switch from a chosen option to another: "she" -> "it"', function () {
            $(sel.radioBtnShe).click();
            $(sel.radioBtnIt).click();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(true);
        });

        it('TC-063 User can switch from a chosen option to another: "it" -> "he"', function () {
            $(sel.radioBtnIt).click();
            $(sel.radioBtnHe).click();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(true);
        });

        it('TC-064 User can switch from a chosen option to another: "it" -> "she"', function () {
            $(sel.radioBtnIt).click();
            $(sel.radioBtnShe).click();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe).toEqual(true);
        });

    });

    describe('Negative cases', function () {

        it('TC-065 No button is selected / Required', function () {
            $(sel.name).setValue(name.default);
            $(sel.age).setValue(age.default);
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

});
