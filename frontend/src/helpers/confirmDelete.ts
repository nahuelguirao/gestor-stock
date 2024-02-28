import Swal from "sweetalert2";

export async function confirmDelete() {
  //Dynamic alert to confirm deleting
  const confirmResult = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "green",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it",
    cancelButtonText: "Cancel",
    background: "#202020",
    color: "#eee",
  });

  return confirmResult;
}
