let av_sales_var = Highcharts.chart('sales_average', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '74.5%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 72,
        tickPosition: 'inside',
        tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '14px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 0,
            to: 20,
            color: '#55BF3B', // green
            thickness: 20
        }, {
            from: 20,
            to: 60,
            color: '#DDDF0D', // yellow
            thickness: 20
        }, {
            from: 60,
            to: 100,
            color: '#DF5353', // red
            thickness: 20
        }]
    },
    credits:{enabled:false},
    exporting:{
        enabled:false
    },
    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ' km/h'
        },
        dataLabels: {
            format: '{y} %',
            borderWidth: 0,
            color: (
                Highcharts.defaultOptions.title &&
                Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color
            ) || '#333333',
            style: {
                fontSize: '16px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]

});

document.getElementsByClassName("av_sales_fullscreen")[0].addEventListener("click", ()=>{
    av_sales_var.fullscreen.open();
});

document.getElementsByClassName("av_sales_download")[0].addEventListener("click", ()=>{
    av_sales_var.exportChart();
});