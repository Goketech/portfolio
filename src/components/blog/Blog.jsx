import React from 'react'
import './blog.css'

import { useEffect, useState } from 'react';
import axios from 'axios';

// Article component
const Article = ({ title, cover_image, url }) => {
  return (
    <div>
        <article className='article__item'>
            <h3>{title}</h3>
            <div>
                <img className='article__item-image' src={cover_image} alt={title} />
            </div>
            <div className='article__item-cta'>
                <a target='_blank' href={url}>Read Article</a>
            </div>
        </article>
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
    <div className='container article__container'>
        {articles.map((article) => (
        <Article key={article.id} title={article.title} cover_image={article.cover_image} url={article.url} />
      ))}
    </div>
  );
};

// App component
const Blog = () => {
  return (
    <section id='blog'>
        <h5>Blog</h5>
        <h2>Recent Articles</h2>
      <Articles />
    </section>
  );
};

export default Blog;
