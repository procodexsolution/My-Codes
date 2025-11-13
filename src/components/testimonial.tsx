'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sarah Williams",
    role: "Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    feedback: "Working with this team was an absolute pleasure! Their attention to detail is unmatched, and they delivered a WordPress site that exceeded our expectations in every way.",
    rating: 5,
  },
  {
    name: "John Doe",
    role: "Client",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    feedback: "I cant recommend this team enough! They transformed our outdated website into a modern, user-friendly platform that has significantly improved our conversion rates.",
    rating: 5,
  },
  {
    name: "Alice Johnson",
    role: "Client",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    feedback: "The design and development team delivered exactly what we envisioned and then some! Every element of our WordPress site feels intentional and purposeful.",
    rating: 5,
  },
  {
    name: "Michael Smith",
    role: "Client",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    feedback: "From start to finish, this was a fantastic experience. The team demonstrated remarkable professionalism and technical skill throughout the project.",
    rating: 5,
  },
  {
    name: "Emma Johnson",
    role: "Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    feedback: "This team truly understands what makes a WordPress site successful. They combined beautiful design with technical excellence to create a website that`s both aesthetically pleasing.",
    rating: 5,
  },
  {
    name: "David Brown",
    role: "Client",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    feedback: "I was thoroughly impressed by the level of service and expertise provided by this team. They took the time to understand our business needs and created a WordPress solution.",
    rating: 5,
  },
];

interface ArrowProps {
  onClick?: () => void;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="absolute top-1/2 2xl:-right-10 md:-right-4 -right-2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-500 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10 transition-all duration-300 group"
      onClick={onClick}
    >
      <ChevronRight className="text-black w-5 h-5 transition-transform group-hover:scale-110" />
    </div>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="absolute top-1/2 2xl:-left-10 md:-left-4 -left-2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-500 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10 transition-all duration-300 group"
      onClick={onClick}
    >
      <ChevronLeft className="text-black w-5 h-5 transition-transform group-hover:scale-110" />
    </div>
  );
}


export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ],
  };

  return (
    <section className="bg-[#1E1E1E] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1378px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            What My {' '}<span className="animated-gradient-text">Client Says</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Building high-performance solutions with modern technologies and frameworks, while keeping our clients happy.
          </p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 py-1">
              <div
                className="bg-[#1E1E1E] backdrop-blur-sm border border-gray-700/50 rounded-xl p-5 pr-8 md:pr-9 lg:pr-7.5 xl:pr-9 2xl:pr-8
             h-[250px] md:min-h-[410px] lg:min-h-[300px] xl:h-[250px] flex flex-col 
             transition-all duration-300 relative overflow-hidden group cursor-pointer
             hover:border-yellow-400"
                style={{
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
                }}
              >
                {/* Yellow Glow Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-2 rounded-full bg-yellow-400 opacity-20 blur-xl pointer-events-none"></div>

                {/* Quote Icon */}
                <div className="absolute top-2 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-1.5 rounded-full flex items-center justify-center">
                    <svg className="text-black 2xl:w-6 2xl:h-6 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path d="M544 360C544 426.3 490.3 480 424 480L416 480C398.3 480 384 465.7 384 448C384 430.3 398.3 416 416 416L424 416C454.9 416 480 390.9 480 360L480 352L416 352C380.7 352 352 323.3 352 288L352 224C352 188.7 380.7 160 416 160L480 160C515.3 160 544 188.7 544 224L544 360zM288 360C288 426.3 234.3 480 168 480L160 480C142.3 480 128 465.7 128 448C128 430.3 142.3 416 160 416L168 416C198.9 416 224 390.9 224 360L224 352L160 352C124.7 352 96 323.3 96 288L96 224C96 188.7 124.7 160 160 160L224 160C259.3 160 288 188.7 288 224L288 360z" />
                    </svg>
                  </div>
                </div>

                {/* Feedback Text */}
                <p className="text-gray-300 italic text-sm md:text-base leading-relaxed flex-grow mb-3">
                  `{testimonial.feedback}
                </p>

                {/* Star Rating */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center mt-auto pt-2 border-t border-gray-700/50">
                  <div className="w-15 h-15 rounded-full overflow-hidden border-2 border-yellow-400 mr-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-400 text-3xl md:text-sm">
                      {testimonial.name}
                    </h3>
                    <p className="text-yellow-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
          }
        </Slider >
      </div >
    </section >
  );
}