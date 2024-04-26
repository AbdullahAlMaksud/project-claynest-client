

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      image: e.target.image.value,
      itemName: e.target.itemName.value,
      subcategoryName: e.target.subcategoryName.value,
      shortDescription: e.target.shortDescription.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
      customization: e.target.customization.value,
      processingTime: e.target.processingTime.value,
      stockStatus: e.target.stockStatus.value,
      userEmail: e.target.userEmail.value,
      userName: e.target.userName.value,
    };
    console.log(formData);
    e.target.reset();

    fetch('https://b9a10-clay-nest-server.vercel.app/craftItems',{
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

  };

  return (
    <div className="bg-ceramic-bg">
      <>
        <h1 className='btn btn-primary bg-red-950 text-white'>ClayNest</h1>
        <div>
          <h1>Add Craft Item</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Image URL:</label>
              <input type="text" name="image" />
            </div>
            <div>
              <label>Item Name:</label>
              <input type="text" name="itemName" />
            </div>
            <div>
              <label>Subcategory Name:</label>
              <input type="text" name="subcategoryName" />
            </div>
            <div>
              <label>Short Description:</label>
              <input type="text" name="shortDescription" />
            </div>
            <div>
              <label>Price:</label>
              <input type="text" name="price" />
            </div>
            <div>
              <label>Rating:</label>
              <input type="text" name="rating" />
            </div>
            <div>
              <label>Customization (Yes/No):</label>
              <select name="customization">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label>Processing Time:</label>
              <input type="text" name="processingTime" />
            </div>
            <div>
              <label>Stock Status:</label>
              <select name="stockStatus">
                <option value="In Stock">In Stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>
            <div>
              <label>User Email:</label>
              <input type="email" name="userEmail" />
            </div>
            <div>
              <label>User Name:</label>
              <input type="text" name="userName" />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>

      </>
    </div>
  )
}

export default App
