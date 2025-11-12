import Image from "next/image";
import React from "react";
import BergPneus from "../public/clients/berg-pneus.png";
import AcoShopping from "../public/clients/aco-shopping.png";
import CatarinaLeal from "../public/clients/catarina-leal.png";
import Gllad from "../public/clients/gllad.png";
import Unidental from "../public/clients/unidental.png";

const clients = [
  { name: "Berg Pneus", image: BergPneus },
  { name: "Aço Shopping", image: AcoShopping },
  { name: "Catarina Leal", image: CatarinaLeal },
  { name: "GLLAD", image: Gllad },
  { name: "Unidental", image: Unidental },
];

type ClientCardProps = {
  name: string;
  image: any;
};

const ClientCard = ({ name, image }: ClientCardProps) => (
  <div className="flex-shrink-0 w-[400px] h-[450px] py-4 mx-4 bg-slate-800 border border-slate-700 rounded-lg shadow-lg flex flex-col items-center justify-center">
    <div className="relative w-[350px] h-[350px] rounded-md mb-4 overflow-hidden">
      <Image
        src={image}
        alt={`Print do Instagram de ${name}`}
        layout="fill"
        objectFit="cover" 
      />
    </div>

    <h3 className="text-white text-xl font-semibold text-center">{name}</h3>
  </div>
);

function CompaniesSection() {
  return (
    <section className="py-16 sm:py-24 bg-transparent text-white" id="showcase">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
          Empresas automatizadas e alavancadas pela SALES LAND
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-scroll-infinite">
          {[...clients, ...clients].map((client, index) => (
            <ClientCard key={`${client.name}-${index}`} name={client.name} image={client.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompaniesSection;