<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios'
import { response } from 'express'
    export default {
        name: 'select-role',
        data () {
            return {
                roles: null
            
            }
        },
        methods: {
            async fetchRoles() {
              try {
                const response = await axios.get(`https://test-js.alef.dev/roles`)
                const data = await response.data
                
              } catch (err) {
                  alert('Ошибка')
              }
             return response.data 
          }
        },
          mounted() {
              this.roles = fetchRoles()
          }
    }
</script>

<style scoped>

</style>