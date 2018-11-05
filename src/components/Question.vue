<template>
    <div class="alert alert-dark text-center text-primary">
        <h2>{{ x }} + {{ y }} = ?</h2>
        <hr>
        <div class="buttons">
            <button class="btn btn-primary col"
                    v-for="number in answers"
                    @click="onAnswer(number)"
            >
                {{ number }}
            </button>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['settings'],
        data(){
            return {
                x: mtRand(this.settings.from, this.settings.to),
                y: mtRand(this.settings.from, this.settings.to)
            }
        },
        computed: {
            good(){
                return this.x + this.y;
            },
            answers(){
                let res = [this.good];

                while (res.length < this.settings.variants) {
                    let num = mtRand(this.good - this.settings.range, this.good + this.settings.range);
                    if (res.indexOf(num) === -1) {
                        res.push(num);
                    }
                }
                return res.sort(() => Math.random() > 0.5 ? 1 : -1);
            }
        },
        methods: {
            onAnswer(num){
                if (num === this.good) {
                    this.$emit('success');

                } else {
                    this.$emit('error', `Error! ${this.x} + ${this.y} = ${this.good}`);
                }


            }
        }
    }
    function mtRand(min, max) {
        let diff = max - min;
        return Math.floor(Math.random() * (diff + 1) + min);
    }
</script>

<style scoped>
    .alert {
        text-align: center;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }

    h2 {
        margin: 30px 0;

    }
   .btn {
        margin: 30px 10px;

    }

</style>