<template >
<div class="user">
   <h1>Это страница юзера с ID = {{$route.params.id}} </h1>
   <h1>Загрузка данныx пользователя {{user}}</h1>
</div>

<div class="user__btns">
   <my-select
      :roles="roles"
      
    />
</div> 

</template>

<script>
import Multiselect from 'vue-multiselect'
import axios from 'axios'
import MySelect from '../components/UI/MySelect'

export default {
    components: {
        MySelect, Multiselect,
    },
    data() {
        return {
        value: {},
        user: null,
        roles: [
        {value: 'index'},
        {value: 'index'},
        {value: 'index'},
        {value: 'index'}
        ],
        isLoading: false,
    }
},
methods: {
    async fetchUser() {
        try {
        const response = await axios.get(`https://test-js.alef.dev/user/${this.$route.params.id}`)
        this.user = response.data.data.name
        } catch (e) {
        alert('Ошибка')
        }
    },
    async fetchRoles() {
        try {
        const response = await axios.get(`https://test-js.alef.dev/roles/${this.$route.params.roles}`)
        this.roles = response.data.data
        } catch (err) {

        }
    },
    async changeRoles() {
        try {
        this.isLoading = true
        const response = await axios.get(`https://test-js.alef.dev/user/${this.$route.params.roles}`)
        this.roles = response.data.data.name
        this.isLoading = false
        } catch (err) {

        }
    },

},
    mounted() {
        this.fetchUser()
        this.fetchRoles()
    },

}
</script>

<style scoped>
.user {
margin-top: 15px;
}
.user__btns {
margin-top: 15px;
display: flex;
justify-content: space-between;

}
.pre {

}

</style>