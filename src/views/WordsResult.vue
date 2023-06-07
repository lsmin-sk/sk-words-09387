<template>
    <div id="word-cloud" style="width: 90vw;height: 90vh; position: relative;"></div>
</template>

<script>
const wordBoxes = [];
export default {
    mounted() {
        this.draw();
    },
    methods: {
        draw() {
            const words = [
                { text: "Bootstrap", weight: 8 },
                { text: "Firebase", weight: 5 },
                { text: "Vue", weight: 10 },
                { text: "QR", weight: 7 },
                { text: "Github", weight: 6 },
                { text: "Vite", weight: 9 },
            ];

            const container = document.getElementById("word-cloud");
            const cloudWidth = container.offsetWidth;
            const cloudHeight = container.offsetHeight;

            words.forEach(word => {
                const wordBox = document.createElement("div");
                wordBox.className = "word-box";
                wordBox.textContent = word.text;
                wordBox.style.fontSize = word.weight * 10 + "px";
                wordBox.style.zIndex = word.weight;

                // Create a temporary word box to calculate the actual size of the text
                const tempBox = document.createElement("div");
                tempBox.style.display = "inline-block";
                tempBox.style.visibility = "hidden";
                tempBox.textContent = word.text;
                tempBox.style.fontSize = word.weight * 10 + "px";
                document.body.appendChild(tempBox);

                const textWidth = tempBox.offsetWidth;
                const textHeight = tempBox.offsetHeight;

                document.body.removeChild(tempBox);

                let x, y;
                let attempts = 0;
                const maxAttempts = 100;

                do {
                    x = Math.random() * (cloudWidth - textWidth);
                    y = Math.random() * (cloudHeight - textHeight);
                    attempts++;
                } while (this.collidesWithOtherBoxes(wordBox, x, y, textWidth, textHeight) && attempts < maxAttempts);

                if (attempts === maxAttempts) {
                    console.log(`Failed to position word: ${word.text}`);
                    return; // Skip this word if it couldn't be positioned properly
                }

                wordBox.style.left = x + "px";
                wordBox.style.top = y + "px";

                // Randomly change text color
                const randomColor = this.getRandomColor();
                wordBox.style.color = randomColor;

                container.appendChild(wordBox);
                wordBoxes.push({
                    element: wordBox,
                    x,
                    y,
                    width: textWidth,
                    height: textHeight
                });
            });
        },
        collidesWithOtherBoxes(currentBox, x, y, width, height) {
            const currentBoxRect = {
                left: x,
                top: y,
                right: x + width,
                bottom: y + height
            };

            for (const box of wordBoxes) {
                const otherBoxRect = {
                    left: box.x,
                    top: box.y,
                    right: box.x + box.width,
                    bottom: box.y + box.height
                };

                if (this.rectanglesOverlap(currentBoxRect, otherBoxRect)) {
                    return true;
                }
            }

            return false;
        },
        rectanglesOverlap(rect1, rect2) {
            return (
                rect1.left < rect2.right &&
                rect1.right > rect2.left &&
                rect1.top < rect2.bottom &&
                rect1.bottom > rect2.top
            );
        },
        getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    }
}
</script>

<style>
.word-box {
    position: absolute;
    background-color: transparent;
    border-radius: 4px;
    padding: 5px;
    white-space: nowrap;
}
</style>