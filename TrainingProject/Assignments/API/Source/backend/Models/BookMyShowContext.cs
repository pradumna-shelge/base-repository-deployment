using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class BookMyShowContext : DbContext
{
    public BookMyShowContext()
    {
    }

    public BookMyShowContext(DbContextOptions<BookMyShowContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AirportDatum> AirportData { get; set; }

    public virtual DbSet<LocationDatum> LocationData { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PC0577\\MSSQL2019;Database=BookMyShow;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AirportDatum>(entity =>
        {
            entity.HasKey(e => e.AirportId).HasName("PK__AirportD__E3DBE0EA0FA20C34");

            entity.Property(e => e.AirportId).ValueGeneratedNever();
            entity.Property(e => e.AirportCode).HasMaxLength(50);
            entity.Property(e => e.AirportName).HasMaxLength(50);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Address).WithMany(p => p.AirportData)
                .HasForeignKey(d => d.AddressId)
                .HasConstraintName("FK__AirportDa__Addre__45F365D3");

            entity.HasOne(d => d.Created).WithMany(p => p.AirportDatumCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__AirportDa__Creat__46E78A0C");

            entity.HasOne(d => d.LastModification).WithMany(p => p.AirportDatumLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__AirportDa__LastM__47DBAE45");
        });

        modelBuilder.Entity<LocationDatum>(entity =>
        {
            entity.HasKey(e => e.LocationId).HasName("PK__Location__E7FEA49728F64D0B");

            entity.Property(e => e.LocationId).ValueGeneratedNever();
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.LocationName).HasMaxLength(50);

            entity.HasOne(d => d.Country).WithMany(p => p.InverseCountry)
                .HasForeignKey(d => d.CountryId)
                .HasConstraintName("FK__LocationD__Count__412EB0B6");

            entity.HasOne(d => d.Created).WithMany(p => p.LocationDatumCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__LocationD__Creat__4222D4EF");

            entity.HasOne(d => d.LastModification).WithMany(p => p.LocationDatumLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__LocationD__LastM__4316F928");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PK__Roles__8AFACE1AF1DAE2F3");

            entity.Property(e => e.RoleName).HasMaxLength(50);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__User__1788CC4C11FAA2B1");

            entity.ToTable("User");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.ImageUrl).HasMaxLength(50);
            entity.Property(e => e.LastLoginDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.PhoneNumber).HasMaxLength(20);
            entity.Property(e => e.UserAddress).HasMaxLength(100);
            entity.Property(e => e.UserEmail).HasMaxLength(100);
            entity.Property(e => e.Username).HasMaxLength(50);

            entity.HasOne(d => d.Created).WithMany(p => p.InverseCreated)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__User__CreatedId__3C69FB99");

            entity.HasOne(d => d.LastModification).WithMany(p => p.InverseLastModification)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__User__LastModifi__3D5E1FD2");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK__User__RoleId__3E52440B");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
