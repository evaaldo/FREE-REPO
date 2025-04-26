using API.PARTNER.FINDER.Models;
using Dapper;
using Microsoft.AspNetCore.Mvc;
using NetTopologySuite.Geometries;
using NetTopologySuite.IO;
using Newtonsoft.Json;
using System.Data;
using System.Data.Common;
using System.Text.Json;

namespace API.PARTNER.FINDER.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PartnerController : ControllerBase
    {
        private readonly ILogger<PartnerController> _logger;
        private readonly IDbConnection _connection;

        public PartnerController(ILogger<PartnerController> logger, IDbConnection connection)
        {
            _logger = logger;
            _connection = connection;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> LoadPartner(int id)
        {
            try
            {
                const string sql = @"
                    SELECT 
                        id,
                        trading_name AS TradingName,
                        owner_name AS OwnerName,
                        document,
                        ST_AsGeoJSON(coverage_area) AS CoverageArea,
                        ST_AsGeoJSON(address) AS Address
                    FROM partner
                    WHERE id = @id;";
                var parameters = new { id };

                _logger.LogInformation("Buscando o parceiro...");

                var partner = await _connection.QueryAsync<PartnerGet>(sql, parameters);

                if (!partner.Any())
                {
                    _logger.LogInformation("Parceiro não encontrado.");
                    return NotFound("Não foi encontrado nenhum parceiro com esse ID.");
                }

                return Ok(partner);
            }
            catch (Exception ex)
            {
                _logger.LogError("Erro ao carregar o parceiro: " + ex.Message);
                return BadRequest("Erro ao carregar o parceiro: " + ex.Message);
            }
        }

        [HttpGet("{long}/{lat}")]
        public async Task<IActionResult> SearchPartner(double clientLong, double clientLat)
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError("Erro ao carregar o parceiro: " + ex.Message);
                return BadRequest("Erro ao carregar o parceiro: " + ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreatePartner([FromBody] PartnerPost partner)
        {
            try
            {
                var sql = "INSERT INTO partner (trading_name, owner_name, document, coverage_area, address)" +
                          "VALUES (@TradingName, @OwnerName, @Document, @CoverageAreaJson, @AddressJson);";

                var parameters = new
                {
                    partner.TradingName,
                    partner.OwnerName,
                    partner.Document,
                    CoverageAreaJson = System.Text.Json.JsonSerializer.Serialize(partner.CoverageArea),
                    AddressJson = System.Text.Json.JsonSerializer.Serialize(partner.Address)
                };

                _logger.LogInformation("Cadastrando Parceiro...");

                await _connection.ExecuteAsync(sql, parameters);

                _logger.LogInformation("Parceiro cadastrado com sucesso.");

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError("Erro ao cadastrar parceiro: " + ex.Message);
                return BadRequest("Erro ao cadastrar parceiro: " + ex.Message);
            }
        }

        private Geometry DeserializeGeoJson(string geoJson)
        {
            var reader = new GeoJsonReader();
            var geometry = reader.Read<Geometry>(geoJson);
            return geometry;
        }
    }
}
