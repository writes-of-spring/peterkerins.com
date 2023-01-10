import { services } from "data/services";
import Image from "next/image";
interface Props {}

export const Services = (props: Props) => {
  return (
    <div>
      {services.map((service) => (
        <div
          key={service.title}
          className="flex justify-center even:flex-row-reverse flex-wrap items-center gap-5 mb-10 sm:mb-8"
        >
          <div className="basis-96 grow ">
            <div className="max-w-xl">
              <h3 className="text-3xl text-gray-700 font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-lg text-gray-500 sm:text-xl">
                {service.description}
              </p>
            </div>
          </div>
          <div className="relative basis-96 grow">
            <Image
              className="max-w-md rounded-lg"
              src={service.image}
              alt={service.imageAlt}
              priority
            />
          </div>
        </div>
      ))}
    </div>
  );
};
