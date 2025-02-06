<template>
  <div>
    <XForm
      v-model="myObject1"
      :fields="myFields1"
    />
    <pre>{{ myObject1 }}</pre>
    <hr>
    <XForm
      v-model="myObject2"
      :fields="myFields2"
    />
    <pre>{{ myObject2 }}</pre>
    <hr>
    <XForm
      v-model="myObject3"
      :fields="myFields3"
    />
    <pre>{{ myObject3 }}</pre>
  </div>
</template>

<script>
import XForm from './components/XForm.vue';

export default {
  components: {
    XForm,
  },
  data: () => {
    return {
      myObject1: {
        name: 'Alex',
        dateOfBirth: '06.01.1989',
        eyeColor: 'blue',
      },
      myFields1: [
        {
          field: 'name',
          component: 'input',
          type: 'text',
          placeholder: 'Name',
        },
        { field: 'dateOfBirth', component: 'input', type: 'datetime' },
        { field: 'eyeColor' },
      ],
      myResult1: `<form>
        <input name="name" placeholder="Name"....>
        <input name="dateOfBirth" type="datetime"....>
        <input name="eyeColor">...
      </form>`,

      myObject2: {
        id: '1',
        created: '28.08.2022',
        updated: '28.08.2022',
        label: 'First Object',
        name: 'TheOne',
      },
      myFields2: [
        { field: 'id', component: 'div' },
        { field: 'created', component: 'input', type: 'datetime' },
        { field: 'updated', component: 'input', type: 'datetime' },
        { field: 'label', component: 'input', type: 'text' },
        { field: 'name', component: 'input', type: 'text' },
      ],
      myResult2: `<form>
        <div name="id"...>
        <input name="created" type="datetime"...>
        <input name="updated" type="datetime"...>
        <input name="label"...>
        <input name="name"...>
      </form>`,

      myObject3: {
        firstname: 'John',
        lastname: 'Doe',
      },
      myFields3: [
        { field: 'firstname', component: 'input', type: 'text' },
        { field: 'lastname', component: 'input', type: 'text' },
      ],
      myResult3: `<form>
        <input name="firstname"...>
        <input name="lastname"...>
      </form>`,
    };
  },
};
</script>
