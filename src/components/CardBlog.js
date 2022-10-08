
function CardBlog({title, img, profile, author}){
  return(
    <div className="rounded-2xl shadow-lg p-4">
      <img src={"./images/" + img} alt="blog" className="w-full mb-4" />
      <h2 className="text-xl lg:text-xl font-bold">{title}</h2>
      <div className="flex items-center mt-4">
        <img src={"./images/" + profile} alt="profile" className="" />
        <p className="ml-3">{author}</p>
      </div>
    </div>
  )
}

export default CardBlog;