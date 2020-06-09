import React, { UseState, UseEffect } from "react";
import ReactDOM from "react-dom";

import axios from "axios";

function Reddit() {
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);

          setPosts(newPosts);
      });
  }, []);

  
}