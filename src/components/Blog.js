import React from 'react';

import axios from 'axios';

class Blog extends React.Component{
  constructor(){
    super();
    this.state={
      data: []
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/newming/myblog/master/blogs/blogs.json')
      .then( res => this.setState({data: res.data}) )
  }
  render(){
    return(
      <div style={{width: '100%'}}>
        {this.state.data.length==0 ? '请稍后' :
          this.state.data.map( (item,i) => (
            <div key={i} className='blog-card'>
              <div className='blog-index'>{i+1}</div>
              <div className='blog-desc'>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.url}>阅读更多</a>
                <span>{item.date}</span>
              </div>
            </div>
          ) )
        }
      </div>
    )
  }
}

export default Blog;
