import React from 'react'
import './blog.css'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Article component
const Article = ({ title, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

// Articles component
const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://dev.to/api/articles?username=goke');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <Article key={article.id} title={article.title} content={article.content} />
      ))}
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <h1>Recent Developer Articles</h1>
      <Articles />
    </div>
  );
};

export default App;
