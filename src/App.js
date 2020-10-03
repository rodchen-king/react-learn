import React from 'react';
import DataSource from './DataSource'
import Comment from './Comment'
import Article from './Article'

const dataSourceInit = (() => {
  const comments = [];
  let blogs = [{
    blogId: 1,
    info: '文章'
  }];
  let subScripeFunctionList = [];

  function addChangeListener(componentName, func) {
    subScripeFunctionList.push({
      key: componentName,
      func
    });
  }

  function removeChangeListener(componentName) {
    subScripeFunctionList = subScripeFunctionList.filter(item => item.key !== componentName)
  }

  function getComments() {
    return comments;
  }

  function getBlogPost(blogId) {
    return blogs.filter(item => item.blogId === blogId)[0]
  }

  function addComment(comment) {
    comments.push(comment)
    subScripeFunctionList.forEach(item => {
      item.func()
    })
  }

  function updateBlog(blogId, info) {
    blogs = blogs.map(item => {
      if (item.blogId === blogId) {
        item.info = info
      }

      return item;
    })

    subScripeFunctionList.forEach(item => {
      item.func()
    })
  }


  return {
    addChangeListener,
    removeChangeListener,
    getComments,
    getBlogPost,
    addComment,
    updateBlog
  }
})()

function App() {
  return (
    <div className="App">
      <DataSource DataSource={dataSourceInit} />
      <div className="hoc">
        <Comment DataSource={dataSourceInit} />
        <Article DataSource={dataSourceInit} />
      </div>
    </div>
  );
}

export default App;
