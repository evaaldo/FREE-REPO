namespace API.PARTNER.FINDER.Models
{
    public class PartnerPost
    {
        public int Id { get; set; }
        public string? TradingName { get; set; }
        public string? OwnerName { get; set; }
        public string? Document { get; set; }
        public CoverageArea? CoverageArea { get; set; }
        public Address? Address { get; set; }
    }
}
