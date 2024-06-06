

const UnpublishSurvey = ({ selectedItem, closeModal }) => {
    // const axiosPublic = useAxiosPublic();
    // const {_id} = item
    console.log(selectedItem._id);

    // const handleUnPublish = async (e) => {
    //     e.preventDefault()
    //     const updateData = {
    //         status: "unpublish",
    //     };

    //     const res = await axiosPublic.patch(
    //         `/survey/status/${selectedItem._id}`,
    //         updateData
    //     );
    //     if (res.data.modifiedCount > 0) {
    //         Swal.fire({
    //             position: "center",
    //             icon: "success",
    //             title: `Your vote is added.`,
    //             showConfirmButton: false,
    //             timer: 1500,
    //         });
    //     }
    //     console.log(res.data);
    //     // console.log(item);
    // };
    return (
        <div>
   {/* <div className="modal">
      <div className="modal-content" >
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{selectedItem.name}</h2>
        <p>{selectedItem.description}</p>
      </div>
    </div> */}
            



<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{selectedItem.name}</h3>
    <p className="py-4">{selectedItem.description}</p>
    <div className="modal-action">
      <form method="dialog">

        <button className="btn" onClick={closeModal}>Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

export default UnpublishSurvey;
