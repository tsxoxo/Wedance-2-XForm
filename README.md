# XForm Task

`XForm` is an object editor and a form generator

### Acceptance criteria

1. it accepts object in v-model
2. it accepts array of objects in `fields` property
3. it renders `<form>` with same amount of child elements as length of `fields` array
4. each `field` in fields describes a configuration for a child
5. `field.component` gets the name of the component (or tag) that should be rendered (for example it can be `input`, or `select`, or `div`, etc.). Default: `input`.
6. `field.field` get the name of the key of the v-model object to edit
7. `field.field` value is used as `name` attribute of the child
8. all other properties are binded as html attributes (such as `type`, `placeholder`, etc.)
9. when value of input is changed, it updates v-model
10. examples in `App.vue` work as expected: `XForm` with paramteres `myObjectN` and `myFieldsN` should render into html `myResultN`

### Questions

1. Approaches to testing -- What makes more sense?

    1a. Map each acceptance criteria to a single test -- so that there are exactly 10 tests. Then I ask myself if a criterion like 1 is even strictly testable.

    1b. Synthesize tests from multiple criteria -- e.g. Test 1 covers generic HTML generation (could cover criteria 1, 2, 3), test 2 covers attribute generation (could cover criteria 8), test 3 covers reactivity (could cover criteria 9), and so on. This seems like a more efficient approach on the surface, but synthesizing tests is overhead and trying to keep the criteria apart while covering them all seems like it could get messy fast.

2. Does it make sense to test directly for generated HTML? That seems precise but fragile -- tests start to break on the slightest change to the markup.

3. Is there a more elegant way to get all the children of a DOM element? `wrapper.findAll('form')[0].children` === undefined

4. Does it make sense to test the emits? Seems like in this case, the result is what matters and we test that by checking the HTML.

### Comments

1. This implementation seems to meet the acceptance criteria. However, from a common sense perspective, I felt the need to refine it so that a field with `field.component = 'div'` renders `{{modelValue[field.field]}}` as its text. I didn't do this because last time I got docked points for doing more than asked for. I thought that this merits a comment because not seeing this in the criteria gave me pause for a moment.

2. type='datetime' doesn't seem to meaningfully change an <input>. Should it be 'datetime-local'? Again, kept to the criteria.

3. The challenge specifies to use composition API but the component XForm starts out with the Option API, which suggests otherwise.
