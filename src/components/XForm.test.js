import { expect, test } from "vitest"
import { mount } from "@vue/test-utils"
import { XForm } from "./XForm.vue"

test("1. it accepts object in v-model", () => {
    const wrapper = mount(XForm, {
        props: {},
    })
    // How to test for that?
    expect(wrapper.text()).toContain("bar")
})

test('2. XForm accepts array of objects in "fields" property', () => {
    const testArray = []

    const wrapper = mount(XForm, {
        props: {
            fields: testArray,
        },
    })
    // Again: How to test for that?
    expect(wrapper.text()).toContain("bar")
})

test("3. XForm renders `<form>` with the same amount of child elements as length of `fields` array", () => {
    const testArray = []

    const wrapper = mount(XForm, {
        props: {
            fields: testArray,
        },
    })
    // Count children of <form> element
    //  expect(wrapper.findAll('???')).toHaveLength(xxx)
})

test("3. XForm renders given myObject1, myFields1 into myResult1", () => {
    const myObject1 = {
        name: "Alex",
        dateOfBirth: "06.01.1989",
        eyeColor: "blue",
    }
    const myFields1 = [
        {
            field: "name",
            component: "input",
            type: "text",
            placeholder: "Name",
        },
        { field: "dateOfBirth", component: "input", type: "datetime" },
        { field: "eyeColor" },
    ]
    const myResult1 = `<form>
        <input name="name" placeholder="Name"....>
        <input name="dateOfBirth" type="datetime"....>
        <input name="eyeColor">...
      </form>`

    const wrapper = mount(XForm, {
        props: {
            "v-model": myObject1,
            fields: myFields1,
        },
    })
    const generatedInputs = wrapper.findAll("input")
    // Criterion 3: form has same amount of children as there are elements in fields
    expect(generatedInputs).toHaveLength(3)
    // Test attribute binding
    expect(generatedInputs[0]).attributes("name").toBe("name")
    expect(generatedInputs[0]).attributes("placeholder").toBe("Name")
    expect(generatedInputs[1]).attributes("name").toBe("dateOfBirth")
    expect(generatedInputs[1]).attributes("type").toBe("datetime")
    expect(generatedInputs[2]).attributes("name").toBe("eyeColor")
    // Test binding change to input[property] => change to myObject[property]
    // HOw to do that?
})
