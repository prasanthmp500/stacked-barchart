import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit() {

    const margin = {top: 10, right: 30, bottom: 20, left: 50},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    const svg = d3.select('#my_dataviz')
    .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform',
            'translate(' + margin.left + ',' + margin.top + ')');


            const httpResponse = {
              "histogramDistributionbyCdrStatuses":
              [
                {"dateRange":"2020-02-10","total":56000,"statusDefault":0,"statusEnroute":0,"statusDelivered":56000,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-11","total":500,"statusDefault":0,"statusEnroute":0,"statusDelivered":500,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-12","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-13","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-14","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-15","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-16","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-17","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-18","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-19","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-20","total":0,"statusDefault":0,"statusEnroute":0,"statusDelivered":0,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-21","total":21300,"statusDefault":0,"statusEnroute":0,"statusDelivered":21300,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-22","total":155000,"statusDefault":0,"statusEnroute":0,"statusDelivered":155000,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-23","total":70000,"statusDefault":0,"statusEnroute":0,"statusDelivered":70000,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0},
                {"dateRange":"2020-02-24","total":7000,"statusDefault":0,"statusEnroute":0,"statusDelivered":7000,"statusExpired":0,"statusDeleted":0,"statusUndeliverable":0,"statusAccepted":0,"statusUnknown":0,"statusRejected":0}]};

            const data = httpResponse['histogramDistributionbyCdrStatuses'];
            



  }

}
