﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ETDS.Models
{
    public class Paket
    {
        [Key]
        public int Id { get; set; }
        public string Aciklama { get; set; }
    }
}