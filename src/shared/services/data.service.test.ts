import { DataService } from "./data.service";

describe("DataService", () => {
  describe("getProductDetailsById", () => {
    it("should return product details for a valid id", async () => {
      const productId = 1;
      const product = await DataService.getProductDetailsById(productId);

      expect(product).toBeDefined();
      expect(product?.id).toBe(productId);
      expect(product?.make).toBe("Toyota");
    });

    it("should return null for an invalid id", async () => {
      const invalidProductId = 999;
      const product = await DataService.getProductDetailsById(invalidProductId);

      expect(product).toBeNull();
    });
  });

  describe("getData", () => {
    it("should return correct data with filters and pagination", async () => {
      const filters = {
        make: "Toyota",
        model: "Corolla",
        minBid: 0,
        maxBid: 20000,
        favourite: false,
      };
      const sortBy = "startingBid";
      const sortOrder = "asc";
      const itemsPerPage = 2;
      const pageNumber = 1;

      const dataResponse = await DataService.getData(
        filters,
        sortBy,
        sortOrder,
        itemsPerPage,
        pageNumber
      );

      expect(dataResponse).toBeDefined();
      expect(dataResponse.products.length).toBe(itemsPerPage);
      expect(dataResponse.totalItems).toBeGreaterThan(0);
      expect(dataResponse.filters.make).toContain("Toyota");
      expect(dataResponse.filters.model.get("Toyota")).toContain("Corolla");
    });
  });

  describe("setFavouriteById", () => {
    it("should toggle the favourite status of a product by id", async () => {
      const productId = 1;
      const initialProduct = await DataService.getProductDetailsById(productId);

      const initialFavouriteStatus = initialProduct?.favourite;

      DataService.setFavouriteById(productId);

      const updatedProduct = await DataService.getProductDetailsById(productId);
      expect(updatedProduct?.favourite).toBe(!initialFavouriteStatus);
    });
  });
});
