using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using AppTrack.Core.Entities;

namespace AppTrackInfrastructure.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext()
        { }
        public AppDBContext(DbContextOptions<AppDBContext> option): base(option)
        { }

        public DbSet<Builder> Builder { get; set; }
        
        public DbSet<Project> Project { get; set; }
        public DbSet<AppTrackUser> AppTrackUser { get; set; }
    }
}
