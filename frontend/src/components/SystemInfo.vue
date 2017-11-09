<template>

  <div>

    <b-btn v-b-toggle="id" variant="link">{{title}}</b-btn>
    <b-collapse :id="id" class="mt-2">
      <b-card>
        <p class="card-text" v-for="(value, key) in info" v-if="!(value instanceof Object)"><strong>{{key}}</strong>: {{value}}</p>
        <system-info v-for="(value, key) in info" v-if="value instanceof Object" :info="value" :title="key"></system-info>
      </b-card>
    </b-collapse>

  </div>

</template>

<script>
  import SystemInfo from './SystemInfo.vue'

  export default {
    name: 'system-info',

    components: {SystemInfo},
    props: ['info', 'title'],
    data () {
      return {
        id: this._uid.toString()
      }
    }
  }
</script>
