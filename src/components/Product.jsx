const Product = ({post}) => {
  return(
    <div>
      {
      <div>
            <div>
            <p>{post.title}</p>
            </div>
            <div>
              <p>{post.description}</p>
            </div>
            <div>
              <img src={post.image} />
            </div>
            
            <div className="flex flex-row justify-around">
               <p>{post.price}</p>
              <button className="">
                {
                  true ? <div>
                    <p>Delete from Cart</p>
                  </div> :
                  <div>
                    <p>Move to Cart</p>
                  </div>
                }
              </button>
            </div>
      </div>
        

      }
    </div>
  )
};

export default Product;
