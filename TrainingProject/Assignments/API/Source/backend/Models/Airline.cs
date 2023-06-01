using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Airline
{
    public int AirlineId { get; set; }

    public string? AirlineName { get; set; }

    public virtual ICollection<Flight> Flights { get; set; } = new List<Flight>();
}
