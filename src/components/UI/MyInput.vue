<template>
    <div>
        <input 
          :value="modelValue"
          @input="updateInput"
          class="input" type="text"
        >
    </div>
</template>

<script>
    export default {
        name: 'my-input',
        props: {
          modelValue: [String, Number],
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
.input {
    width: 100%;
    height: 1px solid teal;
    padding: 10px 15px;
     margin-top: 0px;
}
</style>