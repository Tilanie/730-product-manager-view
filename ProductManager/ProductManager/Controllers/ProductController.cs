using Microsoft.AspNetCore.Mvc;
using ProductManager.Models;
using ProductManager.Services;

namespace ProductManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {

        private ICosmosDbService _databaseService;
        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger, ICosmosDbService databaseService)
        {
            _logger = logger;
            _databaseService = databaseService;
        }

        [Route("Get/{id}")]
        [HttpGet]
        public async Task<Product> Get(string id)
        {
            return await _databaseService.GetItemAsync(id);
        }

        [Route("Add")]
        [HttpPost]
        public async Task Add([FromBody] Product product)
        {
            await _databaseService.AddItemAsync(product);
        }
    }
}