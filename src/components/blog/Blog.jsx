import React from 'react'
import './blog.css'

import { useEffect, useState } from 'react';
import axios from 'axios';

// Article component
const Article = ({ title, cover_image, url }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={cover_image} alt={title} />
      <a href={url}>Read Article</a>
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
        <Article key={article.id} title={article.title} cover_image={article.cover_image} url={article.url} />
      ))}
    </div>
  );
};

// App component
const Blog = () => {
  return (
    <div>
      <h1>Recent Developer Articles</h1>
      <Articles />
    </div>
  );
};

export default Blog;
