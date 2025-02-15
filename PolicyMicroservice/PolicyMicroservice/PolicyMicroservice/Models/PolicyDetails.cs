﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PolicyMicroservice.Models
{
    public class PolicyDetails
    {
        public int ConsumerId { get; set; }
        public int PolicyId { get; set; }
        public int BusinessId { get; set; }
        public string ConsumerName { get; set; }
        public int AgentId { get; set; }
        public string AgentName { get; set; }
        public string AcceptedQuotes { get; set; }
        public string PolicyStatus { get; set; }
        public string PaymentDetails { get; set; }
        public string AcceptanceStatus { get; set; }
        public DateTime EffectiveDate { get; set; }
    }
}
