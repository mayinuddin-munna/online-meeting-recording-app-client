import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  return <div>BlogDetails</div>;
}
