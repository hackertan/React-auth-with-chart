import React, { Component } from 'react'
import auth from '../../auth/auth'
import './home.css'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
export default class Home extends Component {

    constructor() {
        super()
        console.log(auth.isAuthenticated())
        this.state=
            {
                part:[{country : "abc",
                litres : 33}, {country : "abc",
                litres : 67}]
            
            }
        
    
        
    }
    componentDidMount() {

        let chart = am4core.create("chartdiv", am4charts.PieChart);

        // Add data
        chart.data = 
            this.state.part
        
        ;

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        this.chart = chart;
    }
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }
    render(props) {

        return (
            <div>
                <h1 align="center">Home</h1>
                <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                <button className="logoutBtn btn" onClick={() => {
                    auth.logout(() => {
                        this.props.history.push("/");
                    }
                    )
                }
                }>Logout</button>
            </div>
        )
    }
}
