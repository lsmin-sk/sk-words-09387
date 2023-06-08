<template>
    <div class="word-cloud" :style="{ width: '90vw', height: '90vh' }">
        <div v-for="(word, index) in words" :key="index" class="word-box" :style="getWordBoxStyle(word)">
            {{ word.text }}
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        pwords: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            words: [
                { text: "Bootstrap", weight: 8 },
                { text: "Firebase", weight: 5 },
                { text: "Vue", weight: 10 },
                { text: "QR", weight: 7 },
                { text: "Github", weight: 6 },
                { text: "Vite", weight: 9 },
            ]
        }
    },
    mounted() {
        this.calculateWordPositions();
    },
    watch: {
        words: {
            handler() {
                this.calculateWordSizes();
            },
            deep: true
        }
    },
    methods: {
        calculateWordPositions() {
            const containerWidth = this.$el.offsetWidth;
            const containerHeight = this.$el.offsetHeight;
            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;

            this.words.forEach((word) => {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * (containerWidth / 2 - word.weight * 10);
                const x = centerX + radius * Math.cos(angle) - word.weight * 10;
                const y = centerY + radius * Math.sin(angle) - word.weight * 10;

                word.x = x;
                word.y = y;
            });
        },
        calculateWordSizes() {
            this.words.forEach((word) => {
                word.weight = Math.max(word.weight, 1);
            });
        },
        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
        getWordBoxStyle(word) {
            return {
                fontSize: word.weight + 'em',
                zIndex: word.weight,
                top: word.y + 'px',
                left: word.x + 'px',
                color: this.getRandomColor()
            };
        }
    }
};
</script>
  
<style scoped>
.word-cloud {
    position: relative;
}

.word-box {
    position: absolute;
    white-space: nowrap;
}
</style>
  