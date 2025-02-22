﻿using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Payment
{
    public int PaymentId { get; set; }

    public int? BookingId { get; set; }

    public DateTime? PaymentDate { get; set; }

    public decimal? Amount { get; set; }

    public string? PaymentMethod { get; set; }

    public int? StatusFor { get; set; }

    public virtual Booking? Booking { get; set; }

    public virtual StatusDatum? StatusForNavigation { get; set; }
}
