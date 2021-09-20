const payGraphs = document.querySelectorAll('._donat-graph');
if (payGraphs.length > 0) {
	payGraphs.forEach(payGraph => {
		const payGraphItem = payGraph.querySelector('._donat-graph__item');
		const payGraphLegends = payGraph.querySelector('._donat-graph__legends');
		am4core.ready(function () {

			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end

			// Create chart instance
			var chart = am4core.create(payGraphItem, am4charts.PieChart);
			// Radius
			chart.radius = am4core.percent(100);

			// Add data
			const data = payGraph.dataset.data;
			chart.dataSource.url = data;

			// Add and configure Series
			var pieSeries = chart.series.push(new am4charts.PieSeries());
			pieSeries.dataFields.value = "value";
			pieSeries.dataFields.category = "type";
			pieSeries.slices.template.propertyFields.fill = "color";
			pieSeries.innerRadius = am4core.percent(40);
			pieSeries.ticks.template.disabled = true;
			pieSeries.labels.template.disabled = true;

			var hs = pieSeries.slices.template.states.getKey("hover");
			hs.properties.scale = 1;

			var as = pieSeries.slices.template.states.getKey("active");
			as.properties.shiftRadius = 0;

			var rgm = new am4core.RadialGradientModifier();
			rgm.brightnesses.push(-0.5, -0.5, -0.2, -0.2, - 0.3);
			pieSeries.slices.template.fillModifier = rgm;
			pieSeries.slices.template.strokeModifier = rgm;
			pieSeries.slices.template.strokeOpacity = 0.1;
			pieSeries.slices.template.strokeWidth = 0;

			// Add Legends
			if (payGraphLegends) {
				chart.dataSource.events.on("done", function (ev) {
					ev.data.forEach((dataItem, index) => {
						payGraphLegends.insertAdjacentHTML('beforeend', `<div data-index="${index}" class="_donat-graph__legend"><span style="background-color: ${dataItem.color};"></span>${dataItem.type}</div>`);
					});
				});

				/*
				payGraphLegends.querySelectorAll('._donat-graph__legend').forEach((legend, index) => {
					legend.addEventListener("mouseenter", function (e) {
						pieSeries.slices.getIndex(index).setState("hover");
						console.log('00');
					});
					legend.addEventListener("mouseleave", function (e) {
						pieSeries.slices.getIndex(index).setState("default");
						console.log('11');
					});
				});
				*/
			}

			/*
			chart.legend = new am4charts.Legend();
			chart.legend.position = "right";
			chart.legend.valign = "middle";
			chart.legend.maxWidth = 90;
			chart.legend.labels.template.text = "{name}";
			chart.legend.labels.template.fill = am4core.color("#6c89a9");
			//chart.legend.valueLabels = false;

			var marker = chart.legend.markers.template.children.getIndex(0);
			marker.cornerRadius(12, 12, 12, 12);
			marker.strokeWidth = 0;
			marker.strokeOpacity = 0;

			var markerTemplate = chart.legend.markers.template;
			markerTemplate.width = 8;
			markerTemplate.height = 8;
			*/

		});
	});
}
//========================================================================================================================================================
const lineGraphs = document.querySelectorAll('._line-graph');
if (lineGraphs.length > 0) {
	lineGraphs.forEach(lineGraph => {
		const lineGraphItem = lineGraph.querySelector('._line-graph__item');
		const lineGraphLegends = lineGraph.querySelector('._line-graph__legends');
		am4core.ready(function () {

			// Themes begin
			am4core.useTheme(am4themes_animated);
			// Themes end

			// Create chart instance
			var chart = am4core.create(lineGraphItem, am4charts.XYChart);

			// Add data
			chart.data = [
				{ num: 1, value: -10 },
				{ num: 2, value: 15 },
				{ num: 3, value: 30 },
				{ num: 4, value: 15 },
				{ num: 5, value: 18 },
				{ num: 6, value: 32 },
				{ num: 7, value: 20 },
				{ num: 8, value: 50 },
				{ num: 9, value: 53 },
				{ num: 10, value: 56 },
				{ num: 11, value: 52 },
				{ num: 12, value: 16 },
				{ num: 13, value: 11 },
				{ num: 14, value: 22 },
				{ num: 15, value: 50 },
				{ num: 16, value: 53 },
				{ num: 17, value: 56 },
				{ num: 18, value: 35 },
				{ num: 19, value: 18 },
				{ num: 20, value: 47 },
				{ num: 21, value: 59 },
				{ num: 22, value: 50 },
				{ num: 23, value: 53 },
				{ num: 24, value: 56 },
				{ num: 25, value: 52 },
				{ num: 26, value: 48 },
				{ num: 27, value: 47 },
				{ num: 28, value: 59 },
			]

			// Create axes
			var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
			xAxis.dataFields.category = "num";
			xAxis.renderer.minGridDistance = 15;
			xAxis.renderer.grid.template.strokeOpacity = 0;
			xAxis.renderer.labels.template.fill = am4core.color("#6c89a9");
			xAxis.renderer.labels.template.fontSize = 10;
			xAxis.renderer.baseGrid.disabled = true;
			//dateAxis.renderer.minGridDistance = 5;


			var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
			yAxis.renderer.grid.template.strokeOpacity = 0.25;
			yAxis.renderer.grid.template.stroke = am4core.color("#6c89a9");
			yAxis.renderer.grid.template.strokeWidth = 1;
			yAxis.renderer.labels.template.fill = am4core.color("#6c89a9");
			yAxis.renderer.labels.template.fontSize = 10;
			yAxis.renderer.minGridDistance = 30;
			yAxis.renderer.baseGrid.disabled = true;

			// Create series
			var series = chart.series.push(new am4charts.LineSeries());
			series.dataFields.valueY = "value";
			series.dataFields.categoryX = "num";
			series.strokeWidth = 2;
			series.minBulletDistance = 10;

			series.tooltipHTML = "<span class='_line-graph__tip _icon-52'>{value}</span>";
			series.tooltip.pointerOrientation = "vertical";
			series.tooltip.getFillFromObject = false;
			series.tooltip.background.fill = am4core.color("#3b5c7b");
			series.tooltip.label.fontSize = 14;
			series.tooltip.background.stroke = am4core.color("#3b5c7b");


			var gradient = new am4core.LinearGradient();
			gradient.addColor(am4core.color("#00a938"));
			gradient.addColor(am4core.color("#007bff"));
			gradient.rotation = 90;
			series.stroke = gradient;
			series.strokeWidth = 2;

			var bullet = series.bullets.push(new am4charts.CircleBullet());
			bullet.properties.scale = 0;
			var bulletHover = bullet.states.create("hover");
			bulletHover.properties.scale = 0.5;

			/*
			// Create series
			var series2 = chart.series.push(new am4charts.LineSeries());
			series2.dataFields.valueY = "value2";
			series2.dataFields.dateX = "num";
			series2.strokeWidth = 2;
			series2.strokeDasharray = "3,4";
			series2.stroke = series.stroke;
			*/

			// Add cursor
			chart.cursor = new am4charts.XYCursor();
			chart.cursor.xAxis = xAxis;
			chart.cursor.lineY.disabled = true;
			chart.cursor.lineX.disabled = true;
			xAxis.cursorTooltipEnabled = false;
			yAxis.cursorTooltipEnabled = false;

		}); // end am4core.ready()
	});
}