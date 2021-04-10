import sel from "../data/selectors";

function inputValues4 (name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function clearInput(element) {
    const value = element.getValue();
    for (let i = 0; i < value.length; i++) {
        element.keys(['Backspace']);
    }
}

function getTheStory(name, gender, age, story) {
    inputValues4(name, gender, age, story);
    $(sel.submit).click();
    return $$(sel.story)[0].getText();
}

module.exports = {inputValues4, clearInput, getTheStory};
