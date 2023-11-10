<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-y-md" style="max-width: 400px">
      <q-input outlined v-model="name" label="Name" />
      <q-input outlined type="email" v-model="email" label="Email" />
      <q-input outlined v-model="password" type="password" label="Password" />
      <q-btn @click="createUser" unelevated color="red" label="Create" />
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
// import { defineComponent } from 'vue'
import { api } from 'src/boot/axios';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar'
export default {
  name: 'CreateUser',
  setup() {
    const q = useQuasar()
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter()
    function createUser() {
      api.post('api/users', {
        name: name.value,
        email: email.value,
        password: password.value
      }).then(res => {
        console.log(res);
        q.notify({
          color: 'blue',
          position: 'top',
          message: 'user created'
        })
        router.push('/')
      }).catch(err => {
        console.log(err.data.message);
        q.notify({
          color: 'red',
          message: err.data.message
        })
      })
    }

    return { name, email, password , createUser }
  }
}
</script>
