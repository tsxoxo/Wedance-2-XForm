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
