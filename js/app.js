const context = document.getElementById("data-set").getContext("2d");
let line = new Chart(context, {});
//Values from the form
const intialAmount = document.getElementById("initialamount");
const years = document.getElementById("years");
const rates = document.getElementById("rates");
const contribution = document.getElementById("contrib");

//Messge
const message = document.getElementById("message");

//The calculate button
const button = document.querySelector(".input-group button");
//Attach an event listener
button.addEventListener("click", calculateGrowth);

const data = [];
const labels = [];

function calculateGrowth(e) {
    e.preventDefault();
    data.length = 0;
    labels.length = 0;
    let growth = 0;
    try {
        const initial = parseInt(intialAmount.value);
        const period = parseInt(years.value);
        const interest = parseInt(rates.value);
        const contrib = parseInt(contribution.value);
        
        let final_calc = initial;
        for(let i = 1; i <= period; i++) {
            final_calc *= 1 + ((interest / 100));
            final_calc += contrib;
            data.push(toDecimal(final_calc, 2));
            labels.push("Year " + i);
        }

        message.innerText = `You will have this amount ${toDecimal(final_calc, 2)} after ${period} years`;
        drawGraph();
    } catch (error) {
        console.error(error);
    }
}

function drawGraph() {
    line.destroy();
    line = new Chart(context, {
        type: 'line',
        data: {
            labels,
            datasets: [{
                label: "compound",
                data,
                fill: true,
                backgroundColor: "rgba(12, 141, 0, 0.7)",
                borderWidth: 3
            }]
        }
    });
}

function toDecimal(value, decimals) {
    return +value.toFixed(decimals);
}
