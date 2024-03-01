document.addEventListener("DOMContentLoaded", function () {
    const submit = document.getElementById('submit');

    var algorithmSteps = document.querySelectorAll('#algorithm div');
    var currentStepIndex = 0;

    function changeBackgroundColorAlgorithm() {
        if (currentStepIndex < algorithmSteps.length) {
            if (currentStepIndex > 0) {
                algorithmSteps[currentStepIndex - 1].style.backgroundColor = "";
            }

            algorithmSteps[currentStepIndex].style.backgroundColor = "#2c515e";

            setTimeout(function () {
                algorithmSteps[currentStepIndex].style.backgroundColor = "";
                currentStepIndex++;
                changeBackgroundColorAlgorithm();
            }, 3000);
        }
    }

    submit.addEventListener("click", function (event) {
        event.preventDefault();
        currentStepIndex = 0;
        setTimeout(function () {
            changeBackgroundColorAlgorithm();
        }, 3000);
    });

    submit.addEventListener("click", function () {
        const result = document.getElementById('result');
        const time = document.getElementById('result1');
        let count = 0;
        const numbers = document.getElementById('numbers').value.split(",").map(parseFloat);
        let sum = numbers.reduce((acc, curr) => acc + curr, 0);

        const algorithm = [
            "STEP 1: READ NUMBERS: <b>" + numbers.join(", ") + "</b>",
            "STEP 2: CALCULATE SUM: <b>" + numbers.join(" + ") + "</b>",
            "STEP 3: DISPLAY RESULT: <b>" + sum + "</b>",
        ];

        const interval = setInterval(function () {
            if (count < 3) {
                console.log(count);

                // Algorithm div
                let newDiv = document.createElement('div');
                newDiv.className = 'newDiv';
                newDiv.innerHTML = algorithm[count];
                result.appendChild(newDiv);

                anime({
                    targets: newDiv,
                    translateX: [250, 0],
                });

                // Time complexity div
                setTimeout(() => {
                    let timeDiv = document.createElement('div');
                    timeDiv.className = 'timeDiv';
                    timeDiv.innerHTML = "<b>O(n)</b>";
                    time.appendChild(timeDiv);

                    anime({
                        targets: timeDiv,
                        translateX: [250, 0],
                    });

                }, 1000);

                count++;
            } else {
                totalTimeDiv.style.backgroundColor = "#17252A";
                anime({
                    targets: '#totalTimeDiv',
                    translateX: [-(totalTimeDiv.offsetWidth), 0],
                    easing: 'spring(1, 80, 10, 0)',
                    duration: 500,
                    complete: function () {
                        totalTimeDiv.innerHTML = "Total Time complexity: o(n) + O(n) + O(n) = <b>O(n)</b>";
                    }
                });

                clearInterval(interval);
            }
        }, 3000);
    });
});
