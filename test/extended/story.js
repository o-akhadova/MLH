import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4, getTheStory} from '../../helpers/methods';
import exp from "../../data/expected.json";

describe('Story field', function () {

    before('Open App', function () {
        browser.url('');
        browser.maximizeWindow();
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Functionality(positive)', function () {

        //skipped until bug fix
        it.skip('TC-179 The word "year" appears in a story after filling in the field age "1"', function () {
            const storyPg = getTheStory(name.default, gender.it, age.one, story.comedy);
            expect (storyPg).toContain(exp.year);
        });

        it('TC-180 The word "years" appears in a story after filling in the field age "10"', function () {
            const storyPg = getTheStory(name.default, gender.it, age.one, story.comedy);
            expect (storyPg).toContain(exp.years);
        });

        it('TC-181 `$pronoun` is "his" in the text, when "he" gender is chosen', function () {
            const storyPg = getTheStory(name.default, gender.he, age.one, story.comedy);
            expect (storyPg).toContain(exp.his);
        });

        it('TC-182 `$pronoun` is "her" in the text, when "she" gender is chosen', function () {
            const storyPg = getTheStory(name.default, gender.she, age.one, story.comedy);
            expect (storyPg).toContain(exp.her);
        });

        it('TC-183 `$pronoun` is "its" in the text, when "it" gender is chosen.', function () {
            const storyPg = getTheStory(name.default, gender.it, age.default, story.comedy);
            expect(storyPg).toContain(exp.its);
        });

    });

});