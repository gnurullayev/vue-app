<template>
    <input 
    class="form-control my-2" 
    :value="modelValue"
    @input="changeHandler"
    >
</template>

<script>
export default {
    name: "MyInput",
    props: {
        modelValue: String,
    },
    emits:["update:modelValue"],
    methods: {
        changeHandler (e) {
            this.$emit("update:modelValue", e.target.value)
        }
    },
}
</script>

<style>

</style>