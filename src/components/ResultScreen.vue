<template>
    <div class="alert alert-primary">
        <h3>Success: {{stats.success }}</h3>
        <h3>Error: {{stats.error }}</h3>
        <hr>
        <div class="row">
        <button class="btn btn-primary col"
                @click="$emit('repeat')">
            Repeat
        </button>
        <button class="btn btn-primary col"
                :disabled="!successCtn"
                @click="$emit('nextLevel')">
            Next Level
        </button>
    </div>
    </div>
</template>

<script>
    export default {
        props: ['stats', 'questionMax'],
        computed: {
            successCtn(){
                return this.stats.success === this.questionMax;
            }
        }
    }

</script>

<style scoped>
    .alert {
        text-align: center;
    }
    h2 {
        margin: 30px 0;

    }
    .btn {
        margin: 30px 10px;

    }
</style>