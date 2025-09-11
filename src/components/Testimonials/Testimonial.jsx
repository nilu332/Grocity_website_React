import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
        }} 
        loop={true}
        breakpoints={{
            640: {slidesPerView: 1,  spaceBetween: 20 },
            768: {slidesPerView: 2,  spaceBetween: 20 },
            1024: {slidesPerView: 3, spaceBetween: 20 },
            

        }}

        modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.Image} className="w-full h-full"/>
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                        {Array.from({length: item.rating}, (_, index)=>(
                            <FaStar />
                        ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">
                    {item.parag}
                  </p>
                </div>
              </SwiperSlide>                                                                                                                                                                                                   
            );
          })}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonial;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 4,
    parag:
      "As a chef, quality ingrediants are everything. FreshBasket consistently delivers the best vegetables.",
    Image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 5,
    parag:
      "Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groc.",
    Image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 4,
    parag:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum a ipsam itaque illo vitae, dolore, amet dignissimos excepturi commodi deleniti possimus.",
    Image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Firness Coach",
    rating: 3,
    parag:
      "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    Image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 3,
    parag:
      "FreshBasket offers high-qaulity groceries at reasonable prices. Their organic section is impressive",
    Image: Customer5,
  },
];
