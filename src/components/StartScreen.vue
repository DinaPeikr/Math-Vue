<template>
    <div class="alert alert-dark">
        <h3 class="text-info">Are you ready?</h3>
        <button class="btn btn-success w-50" @click="$emit('onStart')">Start</button>
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