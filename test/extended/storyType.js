import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import exp from '../../data/expected.json';
import {inputValues4, clearInput} from '../../helpers/methods';

describe('Story type suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-087 Placeholder = "Type of the story"', function () {
            let placeholder = $(sel.storyTypePlaceholder).getText();
            expect(placeholder).toEqual(exp.storyTypePlaceholder);
        });

    });

    describe('List of the stories is correct', function () {

        it('TC-088 The first type of the story is "Overcoming the monster"', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.overcomingTheMonster];
            storyDropdown.waitForDisplayed({timeout: 3000});
            const storyName = storyDropdown.getText();
            expect(storyName).toEqual(exp.firstStory);
        });

        it('TC-089 The second type of the story is "Rebirth"', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.rebirth];
            storyDropdown.waitForDisplayed({timeout: 3000});
            const storyName = storyDropdown.getText();
            expect(storyName).toEqual(exp.secondStory);
        });

        it('TC-090 The third type of the story is "Quest"', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.quest];
            storyDropdown.waitForDisplayed({timeout: 3000});
            const storyName = storyDropdown.getText();
            expect(storyName).toEqual(exp.thirdStory);
        });

        it('TC-091 The fourth type of the story is "Journey and Return"', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.journeyAndReturn];
            storyDropdown.waitForDisplayed({timeout: 3000});
            const storyName = storyDropdown.getText();
            expect(storyName).toEqual(exp.fourthStory);
        });

        it('TC-092 The fifth type of the story is "Rags and Riches"', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.ragsAndRiches];
            storyDropdown.waitForDisplayed({timeout: 3000});
            const storyName = storyDropdown.getText();
            expect(storyName).toEqual(exp.fifthStory);
        });

        it('TC-093 The sixth type of the story is "Tragedy"', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.tragedy];
            storyDropdown.waitForDisplayed({timeout: 3000});
            const storyName = storyDropdown.getText();
            expect(storyName).toEqual(exp.sixthStory);
        });

        it('TC-094 The seventh type of the story is "Comedy"', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.comedy];
            storyDropdown.waitForDisplayed({timeout: 3000});
            const storyName = storyDropdown.getText();
            expect(storyName).toEqual(exp.seventhStory);
        });

    });

    describe('Field functionality', function () {

        it('TC-095 The chosen value fills the placeholder in', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let text = $(sel.storyType).getText();
            expect(text).toEqual(exp.seventhStory);
        });

        it('TC-096 After the value is chosen the dropdown is collapsed', function () {
            $(sel.storyType).click();
            const storyDropdown = $$(sel.storyList)[story.journeyAndReturn];
            storyDropdown.click();
            let dropdownIsShown = storyDropdown.isFocused();
            expect(dropdownIsShown).toEqual(false);
        });

        it('TC-098 User can change the type of the story', function () {
            $(sel.storyType).click();
            $$(sel.storyList)[story.overcomingTheMonster].click();
            $(sel.storyType).click();
            $$(sel.storyList)[story.comedy].click();
            let text = $(sel.storyType).getText();
            expect(text).toEqual(exp.seventhStory);
        });

    });

    describe('Negative cases', function () {

        it.only('TC-110 Not chosen / Required', function () {
            $(sel.name).setValue(name.default);
            $(sel.radioBtnShe).click();
            $(sel.age).setValue(age.default);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

});
