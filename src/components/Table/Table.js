import React, { Component } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import './Table.css'
import { sortByCases, sortByRecoveries, sortByDeaths } from '../../util.js'

export default class Table extends Component {
    state = {
        sortOption: "cases"
    }
    changeSortOption = (option) => {
        this.setState({
            sortOption: option
        })
    }

    render() {
        console.log(this.state.sortOption)
        if (this.state.sortOption === "cases")
            return (

                <div className="table" style={{width:"339px"}}>
                    <div style={{ display: "flex" }}>
                        <h4 style={this.props.dark ? { color: "#fff" } : { color: "#000" }}>Data by country:</h4>
                        <FormControl>
                            <NativeSelect onChange={(e) => this.changeSortOption(e.target.value)} style={this.props.dark ? { color: "#fff" } : { color: "#000" }} className={this.props.dark ? "darkDrop" : "lightDrop"}>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Sort by</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Number of Infections</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="recovered">Number of recoveries</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="deaths">Number of deaths</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Infections</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortByCases(this.props.countryData).map((country, i) => (
                                    <tr key={i}>
                                        <td style={{fontWeight:"bold"}}><img style={{ height: "20px", width: "30px" }} alt="" src={country.countryInfo.flag} /> {country.country} </td>
                                        <td style={{fontWeight:"bold"}}>{country.cases}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        else if (this.state.sortOption === "recovered")
            return (

                <div className="table" style={{width:"339px"}}>
                    <div style={{ display: "flex" }}>
                        <h4 style={this.props.dark ? { color: "#fff" } : { color: "#000" }}>Data by country:</h4>
                        <FormControl>
                            <NativeSelect onChange={(e) => this.changeSortOption(e.target.value)} style={this.props.dark ? { color: "#fff" } : { color: "#000" }} className={this.props.dark ? "darkDrop" : "lightDrop"}>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Sort by</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Number of Infections</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="recovered">Number of recoveries</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="deaths">Number of deaths</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Recoveries</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortByRecoveries(this.props.countryData).map((country, i) => (
                                    <tr key={i}>
                                        <td style={{fontWeight:"bold"}}><img style={{ height: "20px", width: "30px" }} alt="" src={country.countryInfo.flag} /> {country.country} </td>
                                        <td style={{fontWeight:"bold"}}>{country.recovered}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            )
        else
            return (

                <div className="table" style={{width:"339px"}}>
                    <div style={{ display: "flex" }}>
                        <h4 style={this.props.dark ? { color: "#fff" } : { color: "#000" }}>Data by country:</h4>
                        <FormControl>
                            <NativeSelect onChange={(e) => this.changeSortOption(e.target.value)} style={this.props.dark ? { color: "#fff" } : { color: "#000" }} className={this.props.dark ? "darkDrop" : "lightDrop"}>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Sorty by</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="cases">Number of Infections</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="recovered">Number of recoveries</option>
                                <option style={this.props.dark ? { backgroundColor: "rgb(26, 26, 26)" } : { backgroundColor: "#fff" }} value="deaths">Number of deaths</option>
                            </NativeSelect>
                        </FormControl>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Country</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortByDeaths(this.props.countryData).map((country, i) => (
                                    <tr key={i}>
                                        <td style={{fontWeight:"bold"}}><img style={{ height: "20px", width: "30px" }} alt="" src={country.countryInfo.flag} /> {country.country} </td>
                                        <td style={{fontWeight:"bold"}}>{country.deaths}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
    }
}
