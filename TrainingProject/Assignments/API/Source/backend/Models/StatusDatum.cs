using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class StatusDatum
{
    public int Id { get; set; }

    public string? Statusval { get; set; }

    public int? StatusFor { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();

    public virtual ICollection<StatusDatum> InverseStatusForNavigation { get; set; } = new List<StatusDatum>();

    public virtual ICollection<Journey> Journeys { get; set; } = new List<Journey>();

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual ICollection<Seat> Seats { get; set; } = new List<Seat>();

    public virtual StatusDatum? StatusForNavigation { get; set; }
}
