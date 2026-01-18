import { FiMoreVertical, FiInfo } from "react-icons/fi";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";

const products = [
  {  img: product1,
    name: "Yonex 65z3 badminton shoes",
    category: "02 Mar 2023",
    brand: "09 Mar 2023",
    price: "$25",
    stock: "$450",
    status: "Active",
  },
  { img: product2,
    name: "Yonex Arcsaber 11 pro",
    category: "08 Mar 2023",
    brand: "12 Mar 2023",
    price: "$24",
    stock: "$245",
    status: "Active",
  },
  { img: product3,
    name: "Analysing Singles international games",
    category: "21 Apr 2023",
    brand: "30 Apr 2023",
    price: "$29",
    stock: "$2999",
    status: "Active",
  },
  { img: product4,
    name: "Doubles Dutch system",
    category: "05 May 2023",
    brand: "05 Jun 2023",
    price: "$50",
    stock: "$5067",
    status: "Archived",
  },
    {  img: product1,
    name: "Yonex 65z3 badminton shoes",
    category: "02 Mar 2023",
    brand: "09 Mar 2023",
    price: "$25",
    stock: "$450",
    status: "Active",
  },
  { img: product2,
    name: "Yonex Arcsaber 11 pro",
    category: "08 Mar 2023",
    brand: "12 Mar 2023",
    price: "$24",
    stock: "$245",
    status: "Active",
  },
  { img: product3,
    name: "Analysing Singles international games",
    category: "21 Apr 2023",
    brand: "30 Apr 2023",
    price: "$29",
    stock: "$2999",
    status: "Active",
  },
  { img: product4,
    name: "Doubles Dutch system",
    category: "05 May 2023",
    brand: "05 Jun 2023",
    price: "$50",
    stock: "$5067",
    status: "Archived",
  },
    {  img: product1,
    name: "Yonex 65z3 badminton shoes",
    category: "02 Mar 2023",
    brand: "09 Mar 2023",
    price: "$25",
    stock: "$450",
    status: "Active",
  },
  { img: product2,
    name: "Yonex Arcsaber 11 pro",
    category: "08 Mar 2023",
    brand: "12 Mar 2023",
    price: "$24",
    stock: "$245",
    status: "Active",
  },
  { img: product3,
    name: "Analysing Singles international games",
    category: "21 Apr 2023",
    brand: "30 Apr 2023",
    price: "$29",
    stock: "$2999",
    status: "Active",
  },
  { img: product4,
    name: "Doubles Dutch system",
    category: "05 May 2023",
    brand: "05 Jun 2023",
    price: "$50",
    stock: "$5067",
    status: "Archived",
  },
];

export default function ProductTable() {
  return (
 

    <div className="bg-white">

   
       <div className="flex items-center justify-between px-4 py-3 border-b">
    <div className="flex items-center gap-2">
      <h3 className="font-semibold text-lg">
        SportERP Products
      </h3>

      <span className="text-sm text-gray-500">
        6,560 results
      </span>
       <FiInfo className="text-gray-400 cursor-pointer" />
    </div>

    
  </div>
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="text-left p-3">COURSE NAME </th>
          
             <th className="text-left p-3">
      <div className="flex items-center gap-1">
        CATEGORY
        <div className="flex flex-col -space-y-1">
  <FiChevronUp className="text-xs" />
  <FiChevronDown className="text-xs" />
</div>

      </div>
    </th>
            <th className="text-left p-3">
              <div className="flex items-center gap-1">BRAND      <div className="flex flex-col -space-y-1">
  <FiChevronUp className="text-xs" />
  <FiChevronDown className="text-xs" />
</div></div>
            </th>
            <th className="text-left p-3">
               <div className="flex items-center gap-1">PRICE  <div className="flex flex-col -space-y-1">
  <FiChevronUp className="text-xs" />
  <FiChevronDown className="text-xs" />
</div></div></th>
            <th className="text-left p-3"><div className="flex items-center gap-1">STOCK  <div className="flex flex-col -space-y-1">
  <FiChevronUp className="text-xs" />
  <FiChevronDown className="text-xs" />
</div></div>  </th>
            <th className="text-left p-3"><div className="flex items-center gap-1">STATUS  <div className="flex flex-col -space-y-1">
  <FiChevronUp className="text-xs" />
  <FiChevronDown className="text-xs" />
</div></div></th>
            <th className="p-3"></th>

          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-3 flex items-center gap-3">
   

  <img
    src={item.img}
    alt={item.name}
    className="w-10 h-10 rounded object-cover"
  />
  <span>{item.name}</span>
</td>

              <td className="p-3">{item.category}</td>
              <td className="p-3">{item.brand}</td>
              <td className="p-3">{item.price}</td>
              <td className="p-3">{item.stock}</td>
              <td className="p-3">
         

                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    item.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3 text-gray-500">
  <FiMoreVertical />
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
