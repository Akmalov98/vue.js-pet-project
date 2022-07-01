<template>
   <select class="select" v-model="value"
       :close-on-select="false"
       :internal-search="false"
       :clear-on-select="false"
       :loading="isLoading"
       :hide-selected="true"
       @search-change="changeRoles"
 

   >
        <option v-for="(role, index) in roles"
            :key="role.value"
            :track-by="value"
        >
            {{role}}
        </option>
        <option>
            {{value}}
        </option>
    </select>
    <pre>Выбранные роли {{value}}</pre>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    name: 'my-select',
    data() {
        return {
            
    }
},
    props: {
        value: {},
        roles: {
        type: Array,
        default: () => []
        },
        isLoading: {
            type: Boolean
        }
    },
    components: {Multiselect},
    methods: {
        changeRoles(event) {
        this.$emit('update:value', event.target.value)
        },
    }
}
</script>

<style scoped>
.select {
width: 200px;
height: 30px;
}
</style>