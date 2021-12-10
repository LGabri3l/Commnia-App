using AppTrack.Core.Entities;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace AppTrack.Core.Interfaces
{
    public interface IBuildRepository
    {
        Task<IEnumerable<Builder>> GetBuilders();
        Task<Builder> GetBuilder(int id);
        Task InsertBuilder(Builder builder);
        Task UpdateBuilder(Builder builder);
        Task<IEnumerable> GetAllBuilders();
    }
}
