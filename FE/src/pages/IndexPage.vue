<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md q-gutter-y-md" style="max-width: 400px">

      <q-btn label="Create User" @click="$router.push('/users/create')" />

    </div>
  </q-page>
</template>

<script>

import {defineComponent} from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup() {

  }
})
</script>
