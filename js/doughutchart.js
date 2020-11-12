/*==== doughutChart =====*/
var ctx = document.getElementById( "doughnut-chart" );
Chart.defaults.global.defaultFontFamily = 'Noto Sans JP';
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.defaultFontStyle = '500';
Chart.defaults.global.defaultFontColor = '#2e3d62';
var chart = new Chart( ctx, {
    type: 'doughnut',
    data: {
        datasets: [ {
            data: [ 40, 32, 15 ],
            backgroundColor: ["#2A2731", "#2A2731", "#1da1f2"],
            hoverBackgroundColor: ["#2A2731", "#faae8a", "#0B9BF2"],
            hoverBorderWidth: 5,
            hoverBorderColor: "#eee",
            borderWidth: 3

        } ],
        labels: [
            "Applied Jobs",
            "Posted Jobs",
            "Active Bids"
        ]
    },
    options: {
        responsive: true,
        tooltips: {
            xPadding: 15,
            yPadding: 15,
            backgroundColor: '#2e3d62'
        },
        legend: {
            display: false
        }
    }
} );