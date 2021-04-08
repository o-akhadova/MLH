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
    });

    describe('Positive cases', function () {

        it('TC-174 Reset button is called "Try again!"', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            let tryAgainBtn = $(sel.tryAgain).getText();
            expect(tryAgainBtn).toEqual(exp.tryAgainBtn);
        });

        it('TC-176a The Name field is empty after clicking the Try Again button', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            $(sel.tryAgain).click();
            let nameField = $(sel.name).getText();
            expect(nameField).toEqual(exp.fieldIsEmpty);
        });

        it('TC-176b The He radio button is not selected after clicking the Try Again button', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            $(sel.tryAgain).click();
            let genderBtnHe = $(sel.radioBtnHe).isSelected();
            expect(genderBtnHe).toEqual(false);
        });

        it('TC-176c The She radio button is not selected after clicking the Try Again button', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            $(sel.tryAgain).click();
            let genderBtnShe = $(sel.radioBtnShe).isSelected();
            expect(genderBtnShe).toEqual(false);
        });

        it('TC-176d The It radio button is not selected after clicking the Try Again button', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            $(sel.tryAgain).click();
            let genderBtnIt = $(sel.radioBtnIt).isSelected();
            expect(genderBtnIt).toEqual(false);
        });

        it('TC-176e The Age field is empty after clicking the Try Again button', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            $(sel.tryAgain).click();
            let ageField = $(sel.age).getText();
            expect(ageField).toEqual(exp.fieldIsEmpty);
        });

        it('TC-176f The Story is not selected after clicking the Try Again button', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            $(sel.tryAgain).click();
            let storyField = $(sel.storyType).getText();
            expect(storyField).toEqual(exp.storyTypePlaceholder);
        });

        it('TC-176g The Image is not uploaded after clicking the Try Again button', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            $(sel.submit).click();
            $(sel.tryAgain).click();
            let imagePlaceHolder = $(sel.imageBoxPlaceholder).isEnabled();
            expect(imagePlaceHolder).toEqual(true);
        });

    });

});
