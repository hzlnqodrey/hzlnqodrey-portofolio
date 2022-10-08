
import CardBlog from '../components/CardBlog';

function BlogList({dataSearch}){

  if(dataSearch.length === 0){
    return (
      <div className='text-center my-24'>
        <h1 className='text-3xl font-bold'>Blog Tidak Ada!</h1>
      </div>
    )
  }
  else{
    return (
      dataSearch.map(blog => (
        <CardBlog 
          key={blog.id}
          title={blog.title}
          img={blog.img}
          profile={blog.profile}
          author={blog.author}
        />
      ))
    )
  }

}

export default BlogList;
