import React, { useState } from "react";
import { database } from "../firebase";
import {
  ref,
  push,
  child,
  update,
  query,
  onValue,
  getDatabase,
} from "firebase/database";

function ListItem(props) {
  return <li>{props.post}</li>;
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      posts: [],
    };
  }

  /* TODO: finish this method */
  getPosts = () => {
    const db = getDatabase();
    const recentPostsRef = query(
      ref(db, "posts")
    ); /* TODO: use the query() method */
    onValue(
      recentPostsRef,
      (snapshot) => {
        let newPosts = [];
        snapshot.forEach((childSnapshot) => {
          // console.log(childSnapshot);
          const childKey = childSnapshot.key;
          const childData = childSnapshot.child("post").val();
          newPosts.push((childKey, childData));
          /* TODO: parse the childSnapshot and use newPosts.push() to store the key and the post pair. You can use console.log() first to see what childSnapshot looks like. */
        });

        // Save the newPosts to the state var.
        this.setState({ posts: newPosts });
      },
      {
        // We only need to fetch once
        onlyOnce: true,
      }
    );
  };

  componentDidMount() {
    /* TODO: call the method to get posts */
    this.getPosts();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "post") {
      this.state.post = value;
    }
  };

  handleSubmit = (e) => {
    let obj = {
      post: this.state.post,
    };
    // Create a unique key for new posts
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/posts/" + newPostKey] = obj;
    update(ref(database), updates);

    /* TODO: call the method to get the posts */
    var posts = this.getPosts();
    this.render();
    e.preventDefault();
  };

  render() {
    const listPosts = this.state.posts.map((post) => <li>{post}</li>);
    /* TODO: convert this.state.posts into a list of <ListItem>. Remember to set the key and the post props */

    return (
      <div>
        <ul>{listPosts}</ul>
        <h2>Submit your post!</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            New post:
            <input name="post" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Post!" />
        </form>
      </div>
    );
  }
}

export default Post;
