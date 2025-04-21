namespace API.PARTNER.FINDER.Models
{
    public class CoverageArea
    {
        public string? Type { get; set; }
        public List<List<List<List<double>>>>? Coordinates { get; set; }
    }
}
