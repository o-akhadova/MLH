import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';
import exp from "../../data/expected.json";

describe('Reset button suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
    });

    describe('Positive cases', function () {

        it('TC-174 Reset button is called "Try again!"', function () {
            let tryAgainBtn = $(sel.tryAgain).getText();
            expect(tryAgainBtn).toEqual(exp.tryAgainBtn);
        });

        it('TC-176a The Name field is empty after clicking the Try Again button', function () {
            $(sel.tryAgain).click();
            let nameField = $(sel.name).getText();
            expect(nameField).toEqual(exp.fieldIsEmpty);
        });

        it('TC-176b The He radio button is not selected after clicking the Try Again button', function () {
            $(sel.tryAgain).click();
            let genderBtnHe = $(sel.radioBtnHe).isSelected();
            expect(genderBtnHe).toEqual(false);
        });

        it('TC-176c The She radio button is not selected after clicking the Try Again button', function () {
            $(sel.tryAgain).click();
            let genderBtnShe = $(sel.radioBtnShe).isSelected();
            expect(genderBtnShe).toEqual(false);
        });

        it('TC-176d The It radio button is not selected after clicking the Try Again button', function () {
            $(sel.tryAgain).click();
            let genderBtnIt = $(sel.radioBtnIt).isSelected();
            expect(genderBtnIt).toEqual(false);
        });

        it('TC-176e The Age field is empty after clicking the Try Again button', function () {
            $(sel.tryAgain).click();
            let ageField = $(sel.age).getText();
            expect(ageField).toEqual(exp.fieldIsEmpty);
        });

        it('TC-176f The Story is not selected after clicking the Try Again button', function () {
            $(sel.tryAgain).click();
            let storyField = $(sel.storyType).getText();
            expect(storyField).toEqual(exp.storyTypePlaceholder);
        });

        it('TC-176g The Image is not uploaded after clicking the Try Again button', function () {
            $(sel.tryAgain).click();
            let imagePlaceHolder = $(sel.imageBoxPlaceholder).isEnabled();
            expect(imagePlaceHolder).toEqual(true);
        });

        it('TC-177a The main page is shown after user clicking the button "reload this page"', function () {
            browser.refresh();
            let instruction = $(sel.instruction).getText();
            expect(instruction).toEqual(exp.instruction);
        });

        it('TC-177b The Name field is clear after clicking the button "reload this page"', function () {
            browser.refresh();
            let nameField = $(sel.name).getText();
            expect(nameField).toEqual(exp.fieldIsEmpty);
        });

        it('TC-177c The He radio button is not selected after clicking the button "reload this page"', function () {
            browser.refresh();
            let btnHe = $(sel.radioBtnHe).isSelected();
            expect(btnHe).toEqual(false);
        });

        it('TC-177d The She radio button is not selected after clicking the button "reload this page"', function () {
            browser.refresh();
            let btnShe = $(sel.radioBtnShe).isSelected();
            expect(btnShe).toEqual(false);
        });

        it('TC-177e The It radio button is not selected after clicking the button "reload this page"', function () {
            browser.refresh();
            let btnIt = $(sel.radioBtnIt).isSelected();
            expect(btnIt).toEqual(false);
        });

        it('TC-177f The Age field is clear after clicking the the button "reload this page"', function () {
            browser.refresh();
            let ageField = $(sel.age).getText();
            expect(ageField).toEqual(exp.fieldIsEmpty);
        });

        it('TC-177g The Story is not selected after clicking the button "reload this page"', function () {
            browser.refresh();
            let storyField = $(sel.age).getText();
            expect(storyField).toEqual(exp.fieldIsEmpty);
        });

        it('TC-177h The Image is not uploaded after clicking the button "reload this page"', function () {
            browser.refresh();
            let imagePlaceholder = $(sel.imageBoxPlaceholder).isEnabled();
            expect(imagePlaceholder).toEqual(true);
        });

    });

});
