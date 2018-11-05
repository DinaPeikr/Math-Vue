<template>
    <div class="alert alert-dark">
        <h3 class="text-info">Congratulations! You are the smartest!</h3>
        <button class="btn btn-info w-50" @click="$emit('final')">Try again...</button>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .alert {
        text-align: center;
    }

    h3, .btn {
        margin: 30px auto;
    }
</style>