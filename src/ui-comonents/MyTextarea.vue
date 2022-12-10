<template>
    <textarea 
    class="form-control my-2" 
    :value="modelValue"
    @input="changeHandler"
    ></textarea>
</template>

<script>
export default {
    name: "MyTextarea",
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