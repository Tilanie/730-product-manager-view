namespace ProductManager.Services
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using ProductManager.Models;
    using Microsoft.Azure.Cosmos;
    using Microsoft.Azure.Cosmos.Fluent;
    using Microsoft.Extensions.Configuration;

    public class CosmosDbService : ICosmosDbService
    {
        private Container _container;

        public CosmosDbService(
            CosmosClient dbClient,
            string databaseName,
            string containerName)
        {
            this._container = dbClient.GetContainer(databaseName, containerName);
        }

        public async Task AddItemAsync(Product item)
        {
            try
            {
                var response = await this._container.CreateItemAsync<Product>(item, new PartitionKey(item.id));
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return;
        }

        public async Task DeleteItemAsync(string id)
        {
            await this._container.DeleteItemAsync<Product>(id, new PartitionKey(id));
        }

        public async Task<Product> GetItemAsync(string id)
        {
            try
            {
                ItemResponse<Product> response = await this._container.ReadItemAsync<Product>(id, new PartitionKey(id));
                return response.Resource;
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                return null;
            }

        }

        public async Task<IEnumerable<Product>> GetItemsAsync(string queryString)
        {
            var query = this._container.GetItemQueryIterator<Product>(new QueryDefinition(queryString));
            List<Product> results = new List<Product>();
            while (query.HasMoreResults)
            {
                var response = await query.ReadNextAsync();

                results.AddRange(response.ToList());
            }

            return results;
        }

        public async Task UpdateItemAsync(string id, Product item)
        {
            await this._container.UpsertItemAsync<Product>(item, new PartitionKey(id));
        }
    }
}
