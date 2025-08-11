import ProductLayout from "./ProductLayout";
import PhoneDevice from "./PhoneDevice";
import { Svg } from "../../components/icons";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  // const Product = ({ params: { product } }: ProductProps) => {
  const { product } = useParams<{ product: string }>();

  return (
    <ProductLayout>
      <div className="section-container">
        <div className="flex flex-col w-full h-full">
          <div className="flex md:flex-row flex-col items-center md:items-start md:justify-between justify-center md:gap-y-0 gap-y-4 h-full">
            <div className="product-description order-2 md:order-1 flex flex-col md:gap-y-[8rem] gap-y-8 justify-between h-full">
              <h2 className="md:text-7xl text-4xl text-center md:text-start text-slate-800 font-extrabold capitalize">
                {product}
              </h2>
              <p className="text-gray-600 md:px-[0px] px-[20px] md:text-[20px] text-[16px] max-w-[800px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                voluptas voluptate earum quo debitis qui id ipsum rerum eos.
                Consequatur quibusdam quos ut? Dicta officia impedit beatae
                reiciendis laudantium odit dolores ex enim at, animi voluptates
                tempora eveniet error asperiores architecto dolorum nihil
                tenetur earum veniam velit libero excepturi neque aut cumque?
                Consequuntur ratione repellendus, dignissimos impedit quis
                ipsam, dolore facilis ipsa corporis error deserunt delectus
                inventore nihil voluptas voluptate iste earum iure, cupiditate
                cumque vero eaque aut fuga sint? Quo, voluptatum ipsum quia
                voluptatem sapiente deleniti, non qui maiores corrupti
                assumenda, culpa harum ab quae. Reiciendis earum non animi?
              </p>
              <div className="download-links flex justify-center">
                <div className="flex flex-col md:flex-row items-center md:gap-x-8 gap-y-8">
                  <Link to={"#"} className="">
                    {Svg.googlePlay}
                  </Link>
                  <Link to={"#"} className="">
                    {Svg.appleStore}
                  </Link>
                </div>
              </div>
            </div>
            <div className="device-image order-1 md:order-2">
              <PhoneDevice appName={product} />
            </div>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Product;
