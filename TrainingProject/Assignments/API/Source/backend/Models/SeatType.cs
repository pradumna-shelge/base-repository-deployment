using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SeatType
{
    public int Id { get; set; }

    public decimal? Price { get; set; }

    public string? SeatTypeName { get; set; }

    public int? PrimaryTypeId { get; set; }

    public virtual ICollection<SeatType> InversePrimaryType { get; set; } = new List<SeatType>();

    public virtual ICollection<Passenger> Passengers { get; set; } = new List<Passenger>();

    public virtual SeatType? PrimaryType { get; set; }

    public virtual ICollection<Seat> Seats { get; set; } = new List<Seat>();
}
