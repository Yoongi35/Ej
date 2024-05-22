// PRIMER EJERCICIO
const a = [9, 1, 32, 7/4, 0, 2.25 * 8.5, 0.8, Math.sin(Math.PI / 8)];

console.log(a);


// SEGUNDO EJERCICIO - Definir las variables x e y
const x = 3.4;
const y = 5.8;
const e = [Math.sqrt(x), x + y, x ** y, x * y, y ** 2, x];

// Imprimir los elementos del arreglo
console.log(e);






//TERCER EJERCICIO
const xValues = [];
        const yValues = [];
        for (let x = 0; x <= 5; x += 0.1) {
            xValues.push(x);
            yValues.push(x ** 2 - 10 / Math.sqrt(x + 2));
        }

        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    label: 'f(x) = x^2 - 10/sqrt(x + 2)',
                    data: yValues,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'x'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'f(x)'
                        }
                    }
                }
            }
        });
        