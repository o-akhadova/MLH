import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4, clearInput} from '../../helpers/methods';
import exp from "../../data/expected.json";

const path = require('path');

describe('Image field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-112 Image upload button placeholder = "Click or drag and drop"', function () {
            let placeholder = $(sel.imageBoxPlaceholder).getText();
            expect(placeholder).toEqual(exp.imagePlaceholder);
        });

    });

    describe('Image upload, positive', function () {

        it('TC-113 Verify that image upload is optional', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-114 Verify that user can upload a JPEG file by clicking the Image upload area(2Mb)', function () {
            const fileUpload = $(sel.imageHiddenInput);
            const imgAlt = $(sel.imgAlt);

            const filePath = path.join(__dirname, '../../data/testImages/Positive/2.07Mb_JPEG.jpg');
            const remoteFilePath = browser.uploadFile(filePath);

            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            expect(imgAlt).toBeExisting();
        });

    });

});
