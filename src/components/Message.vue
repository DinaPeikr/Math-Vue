<template>
    <div class="alert" :class="'alert-' + type">
        <h2>{{text}}</h2>
        <hr>
        <button class="btn w-50"
                :class="'btn-' + type"
                @click="$emit('onNext')"
        >
            Continue
        </button>
    </div>
</template>

<script>
    export default {
        props: ['type', 'text']
    }

</script>

<style scoped>
    .alert {
        text-align: center;
    }

    h2 {
        margin: 30px auto;
    }
    .btn {
        margin: 30px auto;
    }
</style>