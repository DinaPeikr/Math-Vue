<template>
    <div class="container training">
        <div class="row">
            <div class="col">
                <h1 class="text-center text-muted">Math training<span v-show="state !== 'final'">. Level {{level + 1}}</span></h1>
                <hr>
                <div class="progress mb-2">
                    <div class="progress-bar progress-bar-striped"
                         :style="progressStyles"></div>
                </div>
                <div class="box">
                    <transition name="page" mode="out-in" appear>
                        <app-start-screen v-if="state === 'start'"
                                          @onStart="onStart">
                        </app-start-screen>
                        <app-question v-else-if="state === 'question'"
                                      @success="onQuestionSuccess"
                                      @error="onQuestionError"
                                      :settings="levels[level]">
                        </app-question>
                        <app-message v-else-if="state === 'message'"
                                     :type="message.type"
                                     :text="message.text"
                                     @onNext="onNext">
                        </app-message>
                        <app-result-screen v-else-if="state === 'result'"
                                           :stats="stats"
                                           :questionMax="questionMax"
                                           @repeat="onStart"
                                           @nextLevel="onNextLevel">
                        </app-result-screen>
                        <app-finally-screen v-else-if="state === 'final'"
                                            @final="onTraining">
                        </app-finally-screen>
                        <div v-else>Unknown state</div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                state: 'start',
                stats: {
                    success: 0,
                    error: 0
                },
                message: {
                    type: '',
                    text: ''
                },
                questionMax: 5,
                level: 0,
                levels: [
                    {
                        from: 1,
                        to: 100,
                        range: 5,
                        variants: 2
                    },
                    {
                        from: 100,
                        to: 200,
                        range: 20,
                        variants: 3
                    },
                    {
                        from: 100,
                        to: 500,
                        range: 20,
                        variants: 4
                    },
                    {
                        from: 100,
                        to: 1000,
                        range: 40,
                        variants: 5
                    },
                    {
                        from: 100,
                        to: 1200,
                        range: 40,
                        variants: 6
                    }

                ]

            }
        },
        computed: {
            questionDone() {
                return this.stats.success + this.stats.error;
            },
            progressStyles() {
                return {
                    width: (this.questionDone / this.questionMax * 100) + '%'
                };
            }
        },
        methods: {
            onStart() {
                this.state = 'question';
                this.stats.success = 0;
                this.stats.error = 0;
            },
            onQuestionSuccess() {
                this.state = 'message';
                this.message.text = 'That\'s it!';
                this.message.type = 'success';
                this.stats.success++;
            },
            onQuestionError(msg) {
                this.state = 'message';
                this.message.text = msg;
                this.message.type = 'warning';
                this.stats.error++;
            },
            onNext() {
                if (this.questionDone < this.questionMax) {
                    this.state = 'question';
                } else {
                    this.state = 'result';
                }

            },
            onNextLevel() {

                if (this.level === this.levels.length - 1) {
                     this.level = 0;
                    this.onFinal();
                } else if (this.level < this.levels.length - 1) {
                    this.level ++;
                    this.onStart();
                }
            },
            onFinal() {
                this.state = 'final';
            },
            onTraining() {
                this.state = 'start';
            },

        }
    }
</script>

<style scoped>
    .training {
        margin: 50px auto;
    }

    .progress-bar {
        transition: width 1s;
    }

    .page-enter-active {
        animation: pageIn 0.5s linear;
    }

    .page-leave-active {
        animation: pageOut 0.5s linear;
    }

    @keyframes pageIn {
        from {
            transform: rotateY(90deg)
        }
        to {
            transform: rotateY(0deg)
        }
    }

    @keyframes pageOut {
        from {
            transform: rotateY(0deg)
        }
        to {
            transform: rotateY(-90deg)
        }
    }

</style>
