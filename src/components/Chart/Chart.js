import React from 'react'
import Axios from 'axios'
import { Line, Bar } from 'react-chartjs-2'
import './Chart.css'

export default class Chart extends React.Component {
    state = {
        dailyData: {}
    }

    componentDidMount = async () => {
        const { data } = await Axios.get("https://covid19.mathdro.id/api/daily")
        this.setState({
            dailyData: data
        })
    }
    render() {
        const lineChart = (
            this.state.dailyData.length ? (
            <Line data={{
                labels: this.state.dailyData.map(({ reportDate }) => reportDate),
                datasets: [{
                    data: this.state.dailyData.map(({ confirmed: { total } }) => total),
                    label: 'Infections',
                    borderColor: 'rgba(253, 255, 122, 0.87)',
                    backgroundColor: "rgba(253, 255, 122,0.5)",
                    fill: true
                },
                {
                    data: this.state.dailyData.map(({ deaths: { total } }) => total),
                    label: 'Deaths',
                    borderColor: 'rgba(255, 122, 122, 0.87)',
                    backgroundColor: "rgba(255, 122, 122,0.5)",
                    fill: true
                }]

            }}
                options={{
                    legend: {
                        labels: {
                            fontColor: "#fff"
                        }
                    },
                    title: { fontColor: "#fff" },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "white"
                            },
                            gridLines: {
                                color: "#FFFFFF"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "white"
                            },
                            gridLines: {
                                color: "#FFFFFF"
                            },
                        }]
                    }
                }} />) : null
        )

        const darkLineChart = (
            this.state.dailyData.length ? (<Line data={{
                labels: this.state.dailyData.map(({ reportDate }) => reportDate),
                datasets: [{
                    data: this.state.dailyData.map(({ confirmed: { total } }) => total),
                    label: 'Infections',
                    borderColor: 'rgba(253, 255, 122, 0.87)',
                    backgroundColor: "rgba(253, 255, 122, 0.5)",
                    fill: true
                },
                {
                    data: this.state.dailyData.map(({ deaths: { total } }) => total),
                    label: 'Deaths',
                    borderColor: 'rgba(255, 122, 122, 0.87)',
                    backgroundColor: "rgba(255, 122, 122, 0.5)",
                    fill: true
                }]

            }}
                options={{
                    legend: {
                        labels: {
                            fontColor: "#000"
                        }
                    },
                    title: { fontColor: "#000" },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }]
                    }
                }} />) : null
        )

        const barChart = (

            this.props.totalData.cases? (<Bar data={{
                labels: ['recoveries', 'deaths', 'infections'],
                datasets: [{
                    label: 'people',
                    backgroundColor:
                        ['rgba(122, 255, 178, 0.87)',
                            'rgba(255, 122, 122, 0.87)',
                            'rgba(253, 255, 122, 0.87)',],
                    data: [this.props.totalData.recovered, this.props.totalData.deaths, this.props.totalData.cases]
                }]
            }}
                options={{
                    legend: { display: false },
                    title: { fontColor: "#fff", display: true, text: `current state in ${this.props.country}` },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "white"
                            },
                            gridLines: {
                                color: "#FFFFFF"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "white"
                            },
                            gridLines: {
                                color: "#FFFFFF"
                            },
                        }]
                    }
                }}
            />) : null
        )

        const darkBarChart = (

            this.props.totalData.cases ? (<Bar data={{
                labels: ['recoveries', 'deaths', 'infections'],
                datasets: [{
                    label: 'people',
                    backgroundColor:
                        ['rgba(122, 255, 178, 0.87)',
                            'rgba(255, 122, 122, 0.87)',
                            'rgba(253, 255, 122, 0.87)',],
                    data: [this.props.totalData.recovered, this.props.totalData.deaths, this.props.totalData.cases]
                }]
            }}
                options={{
                    legend: { display: false },
                    title: { fontColor: "#000", display: true, text: `current state in ${this.props.country}` },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "black"
                            },
                            gridLines: {
                                color: "#000"
                            },
                        }]
                    }
                }}
            />) : null
        )

        return (
            <div className="chart">
                {this.props.dark ? (this.props.country ? barChart : lineChart) : (this.props.country ? darkBarChart : darkLineChart)}
            </div>
        )
    }
}