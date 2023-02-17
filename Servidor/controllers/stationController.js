const {request: req, response: res} = require('express');
const {pool} = require("../database/config");

const stationInformation = async (req, res) => {
    const {id} = (req.params);

    // Getting all the fields related to the information ID
    const stationInfQuery = ("select sc.distance, s.name, p.product,p.value, b.name as brandName from stations_competitors sc " +
        " inner join stations s on sc.cre_id = s.cre_id inner join prices p on sc.cre_id = p.cre_id  inner join stations_brands sb on sc.cre_id = sb.cre_id inner join brands b on sb.id = b.id " +
        " where sc.id = ?")
    
    // Getting the price from the competitor
    const competitorInfQuery = ("select p.value from stations_competitors sc inner join stations s on sc.cre_id_competitor = s.cre_id inner join prices p on" +
        " sc.cre_id_competitor =" +
        " p.cre_id " +
        " where" +
        "  sc.id = ?")

    const myStation = await pool.query(stationInfQuery,id)
    const competitorStation = await pool.query(competitorInfQuery,id)


    // Getting the difference between prices 
    myStation.forEach((station,index) => {
        station["differenceValue"] = station.value - competitorStation[index].value

    })


    res.status(200).json({results : myStation})
}

module.exports = {stationInformation}