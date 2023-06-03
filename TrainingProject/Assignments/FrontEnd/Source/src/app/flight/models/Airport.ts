export interface AirportModel{
    
    airportId :number,
    airportCode:string,
    city:string,
    airportName :string,
    country:string
}



export interface searchData{
    from : AirportModel,
    to : AirportModel,
    departure : string|null,
    return : string|null,
    passengers:{
        adults: number,
        child : number,
        infants:number
    },
    type : number,
    seatTypes:string,
}


