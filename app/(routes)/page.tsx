import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import Billboard from "@/components/billboard";
import ExploreProductCard from "@/components/cards/explore-product-card";
import { ImageSlider } from "@/components/imageSlider/image-slider";
import ProductList from "@/components/product-list";
import Accordion from "@/components/ui/accordian";
import Container from "@/components/ui/container";
import car1 from "@/imgs/car-1.jpg";
import car2 from "@/imgs/car-2.jpg";
import car3 from "@/imgs/car-3.jpg";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({
    isFeatured: true,
  });

  const billboard = await getBillboard();
  const IMAGES: any = [
    { url: car1, alt: "Car One" },
    { url: car2, alt: "Car Two" },
    { url: car3, alt: "Car Three" },
  ];

  // const accordionItems = [
  //   {
  //     title: "Section 1",
  //     content: "Content for section 1.",
  //   },
  //   {
  //     title: "Section 2",
  //     content: "Content for section 2.",
  //   },
  //   {
  //     title: "Section 3",
  //     content: "Content for section 3.",
  //   },
  // ];

  return (
    <>
      <ImageSlider images={IMAGES} />
      <Container>
        <div className="">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex my-20 gap-x-6 md:flex-row flex-col md:gap-y-0 gap-y-6">
          <ExploreProductCard bgColor="bg-blue-50" />
          <ExploreProductCard bgColor="bg-red-50" />
          <ExploreProductCard bgColor="bg-green-50" />
        </div>
      </Container>
      <Container>
        <div className="">
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="What's trending now" items={products} />
          </div>
        </div>
      </Container>
      <div className="w-full max-w-7xl sm:h-[55%] h-[50%] mx-auto my-20 relative">
        <Banner />
      </div>
    </>
  );
};

export default HomePage;
