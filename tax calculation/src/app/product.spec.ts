import { ProdService } from './prod.service';
import { Product } from './product';


describe("QuoteService", () => {
  let prodService: ProdService;

  beforeEach(() => {
    prodService = new ProdService();
  });



  it("should add a product in an array", () => {
    prodService.addProduct("HP","40000");
    prodService.addProduct("Dell","40000");

    expect(prodService.prodList.length).toBeGreaterThanOrEqual(1);
  });




});
