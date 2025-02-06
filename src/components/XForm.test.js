import { expect, test } from "vitest"
import { mount } from "@vue/test-utils"
import XForm from "./XForm.vue"
import App from "../App.vue"

test("Test v-model binding", async () => {
    const wrapper = mount(App)
    await wrapper.get('input[(type = "text")').setValue("foobarunique")
    expect(wrapper.get("pre").text()).toContain("foobarunique")
})

test("Test number of elements and attribute binding", async () => {
    const wrapper = mount(App)
    const allForms = wrapper.findAll("form")
    const generatedComponentsObj1 = allForms[0].findAll("*")
    const generatedComponentsObj2 = allForms[1].findAll("*")
    const generatedComponentsObj3 = allForms[2].findAll("*")

    // Criterion 3: form has same amount of children as there are elements in fields
    expect(generatedComponentsObj1).toHaveLength(3)
    expect(generatedComponentsObj2).toHaveLength(5)
    expect(generatedComponentsObj3).toHaveLength(2)

    // Test attribute binding
    expect(generatedComponentsObj1[0].attributes("name")).toBe("name")
    expect(generatedComponentsObj1[0].attributes("placeholder")).toBe("Name")
    expect(generatedComponentsObj1[1].attributes("name")).toBe("dateOfBirth")
    expect(generatedComponentsObj1[1].attributes("type")).toBe("datetime")
    expect(generatedComponentsObj1[2].attributes("name")).toBe("eyeColor")
})

test("Test attribute bindings (Crit. 8)", async () => {
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
            modelValue: myObject1,
            fields: myFields1,
        },
    })
    const generatedInputs = wrapper.findAll("input")
    // Criterion 3: form has same amount of children as there are elements in fields
    expect(generatedInputs).toHaveLength(3)

    // Test attribute binding
    expect(generatedInputs[0].attributes("name")).toBe("name")
    expect(generatedInputs[0].attributes("placeholder")).toBe("Name")
    expect(generatedInputs[1].attributes("name")).toBe("dateOfBirth")
    expect(generatedInputs[1].attributes("type")).toBe("datetime")
    expect(generatedInputs[2].attributes("name")).toBe("eyeColor")

    // Test binding modelValue => input
    // Does this add value to the test?
    await wrapper.setProps({ modelValue: { ...myObject1, name: "foo" } })
    expect(generatedInputs[0].element.value).toBe("foo")
})
