import React from 'react';
import BlogList from '../components/BlogList';
// import CardBlog from '../components/CardBlog';
import getInitialBlog from '../utils';

class BlogPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      blogs: getInitialBlog(),
      search: ''
    }

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    this.onSearchSubmitEventHandler = this.onSearchSubmitEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value
      }
    })
  }

  onSearchSubmitEventHandler(event) {
    this.setState((prevState) => {
      return {
          ...prevState,
          search: event,
      };
    });
  }

  render(){
    return (
      <div id="blog">
        <div className="header text-center">
          <div className="container pt-32">
            <h1 className="text-4xl text-blue1 font-bold">Tedi Blog</h1>
            <p className="mt-4">Cek artikel terbaru tedi melalui temandisabilitas.com/blog!</p>
          </div>
          <form className="mt-8">
            <input 
              type="text" id="search" 
              className="border border-[#C3C3C3] rounded-full w-10/12 md:w-8/12 lg:w-5/12 px-8 py-4" 
              placeholder="Cari disini.."
              value={this.state.search}
              onChange={this.onSearchChangeEventHandler}
              onKeyUp={() => this.onSearchSubmitEventHandler(this.state.search)}
            ></input>
          </form>
        </div>
        <div className="container px-6 lg:px-16 xl:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <BlogList 
            dataSearch={
              this.state.search
                ? this.state.blogs.filter((note) =>
                    note.title
                        .toLowerCase()
                        .includes(this.state.search.toLowerCase())
                )
                : this.state.blogs
            }
          />
        </div>
      </div>
    )
  }
}

export default BlogPage;