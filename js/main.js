var datasets;
var subset;
var subject = null;
var keywords = [];

$(document).ready(() => {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(initialize);
});

function initialize(){
    fetch("js/datasets.json")
    .then(response => response.json())
    .then(json => {console.log("Data is laoded."); subset = datasets = json;})
    .then(() => drawCharts());
}

function drawCharts(){
    drawScatterChart();
    drawBubbleChart();
}


