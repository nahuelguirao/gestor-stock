import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

export function TableHeader() {
  return (
    <thead>
      <tr>
        <th>
          <BsPencilSquare />
        </th>
        <th>Title</th>
        <th>Stock</th>
        <th className="productPrice">Price</th>
        <th>
          <RiDeleteBin6Line />
        </th>
      </tr>
    </thead>
  );
}
