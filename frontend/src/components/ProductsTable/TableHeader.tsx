import { RiDeleteBin6Line } from "react-icons/ri";

export function TableHeader() {
  return (
    <thead>
      <tr>
        <th>
          <RiDeleteBin6Line />
        </th>
        <th>Title</th>
        <th>Stock</th>
        <th>Price</th>
      </tr>
    </thead>
  );
}
