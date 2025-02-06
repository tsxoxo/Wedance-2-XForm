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

    // Test attribute binding on obj1
    expect(generatedComponentsObj1[0].attributes("name")).toBe("name")
    expect(generatedComponentsObj1[0].attributes("placeholder")).toBe("Name")
    expect(generatedComponentsObj1[1].attributes("name")).toBe("dateOfBirth")
    expect(generatedComponentsObj1[1].attributes("type")).toBe("datetime")
    expect(generatedComponentsObj1[2].attributes("name")).toBe("eyeColor")
})
