using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AlphaCode.Models
{
	public class BlogPost
    {
        [Key]
        public Guid PostId { get; set; }

        [Required]
        public string Creator { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Body { get; set; }

        [Required]
        public DateTime Dt { get; set; }
    }
}
