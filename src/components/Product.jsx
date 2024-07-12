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

            </div>
      </div>
        

      }
    </div>
  )
};

export default Product;
