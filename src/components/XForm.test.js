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
    expect(wrapper.text()).toContain("bar")
})
