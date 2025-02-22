﻿using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class UserDatum
{
    public int UserId { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public string? Address { get; set; }

    public string? PhoneNumber { get; set; }

    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}
