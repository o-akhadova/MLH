import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';

describe('Submit button field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Functionality (negative)', function () {

        it('TC-160 The button is disabled until all required fields are filled with valid information', function () {
            $$(sel.radioButtons)[gender.he].click();
            $(sel.age).setValue(age.default);
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-161 The button is disabled until all required fields are filled with valid information', function () {
            $$(sel.radioButtons)[gender.she].click();
            $(sel.age).setValue(age.default);
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-162 The button is disabled until all required fields are filled with valid information', function () {
            $$(sel.radioButtons)[gender.it].click();
            $(sel.age).setValue(age.default);
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-164 The button is disabled until all required fields are filled with valid information', function () {
            $(sel.name).setValue(name.default);
            $$(sel.radioButtons)[gender.he].click();
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

    describe('Functionality positive', function () {

        it('TC-173 User can control Submit button by Enter / Return key on keyboard', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            browser.keys(['Enter']);
            let tryAgainBtn = $(sel.tryAgain).isDisplayed();
            expect(tryAgainBtn).toEqual(true);
        });

    });

});
