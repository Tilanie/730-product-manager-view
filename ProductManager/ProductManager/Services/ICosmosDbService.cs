using ProductManager.Models;

namespace ProductManager.Services
{
    public interface ICosmosDbService
    {
        Task AddItemAsync(Product item);
        Task DeleteItemAsync(string id);
        Task<Product> GetItemAsync(string id);
        Task<IEnumerable<Product>> GetItemsAsync(string queryString);
        Task UpdateItemAsync(string id, Product item);

    }
}
