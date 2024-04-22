import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Review from "@/components/review/review";
import { StarIcon } from "@/components/star-icon";
import Accordion from "@/components/ui/accordian";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  const accordionItems = [
    {
      title: "Product Overview",
      content: (
        <div>
          <p>
            This product is a high-quality, multi-purpose tool designed for
            various tasks.
          </p>
          <p>Features:</p>
          <ul>
            <li>Advanced technology for superior performance</li>
            <li>Durable and long-lasting materials</li>
            <li>Ergonomic design for comfort</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Specifications",
      content: (
        <div>
          <p>Technical specifications for this product:</p>
          <ul>
            <li>Model: XYZ-123</li>
            <li>Dimensions: 10" x 5" x 3"</li>
            <li>Weight: 2.5 lbs</li>
            <li>Power: 110-240V, 50-60Hz</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Customer Reviews",
      content: (
        <div>
          <p>See what our customers are saying about this product:</p>
          <div className="border border-gray-200 p-4 rounded-lg">
            <div className="flex items-center">
              <img
                src="/user-avatar.jpg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p>Rated 5 stars</p>
              </div>
            </div>
            <p className="mt-2">
              "I'm extremely satisfied with this product. It exceeded my
              expectations."
            </p>
          </div>
          <div className="border border-gray-200 p-4 mt-4 rounded-lg">
            <div className="flex items-center">
              <img
                src="/user-avatar2.jpg"
                alt="User Avatar"
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p>Rated 4 stars</p>
              </div>
            </div>
            <p className="mt-2">
              "Good product overall, but it could use some improvements."
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Shipping and Returns",
      content: (
        <div>
          <p>Shipping information and return policy:</p>
          <p>
            <strong>Shipping:</strong> Free standard shipping on all orders.
          </p>
          <p>
            <strong>Returns:</strong> 30-day return policy. If you're not
            satisfied, contact us for a return label.
          </p>
        </div>
      ),
    },
  ];

  function createMarkup() {
    return {
      __html: `<p>
          <p className="mb-4 text-neutral-600">
            The patented eighteen-inch hardwood Arrowhead deck --- finely
            mortised in, makes this the strongest and most rigid canoe ever
            built. You cannot buy a canoe that will afford greater satisfaction.
          </p>
          <p className="mb-4">
            The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
            1922. Wickett had previously worked for the Old Town Canoe Co from
            1900 to 1914. Manufacturing of the classic wooden canoes in Valley
            Park, Missouri ceased in 1978.
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>Regular fit, mid-weight t-shirt</li>
            <li>Natural color, 100% premium combed organic cotton</li>
            <li>
              Quality cotton grown without the use of herbicides or pesticides -
              GOTS certified
            </li>
            <li>Soft touch water-based printed in the USA</li>
          </ul>
        </p>`,
    };
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 space-y-6">
              <Info data={product} />
              <hr className="my-6" />
              <Accordion items={accordionItems} />
            </div>
          </div>
          <div className="container mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4">Product Details</h1>
            <div
              className="mb-4 text-neutral-600"
              dangerouslySetInnerHTML={createMarkup()}
            ></div>
          </div>
          <hr className="my-10" />
          <h2 className="text-2xl font-semibold flex items-center">
            <StarIcon />
            <span className="ml-1.5"> 4,87 · 142 Reviews</span>
          </h2>
          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
            <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 dark:bg-slate-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 mt-10 border border-slate-300 dark:border-slate-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
              Show me all 142 reviews
            </button>
          </div>

          <hr className="my-10" />
          <ProductList
            title="Related Items"
            items={suggestedProducts.filter(
              (prod) => prod.id !== params.productId
            )}
          />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
