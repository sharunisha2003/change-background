const colors = ['red', 'blue', 'brown', 'lightgray', 'lightpink'];
        let currentColorIndex = 0;

        document.getElementById('changeColorButton').addEventListener('click', () => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            const newColor = colors[currentColorIndex];
            document.body.style.backgroundColor = newColor;
            document.getElementById('colorName').innerText = newColor.charAt(0).toUpperCase() + newColor.slice(1);
        });