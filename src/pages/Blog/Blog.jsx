import React from "react";
import SectionTitle from "../../components/SectionTitle";

const blogData = [
  {
    id: 1,
    title: "Blog Title 1",
    image: "https://trueconf.com/images/video-lecture/videolecture-en.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "#",
  },
  {
    id: 2,
    title: "Blog Title 2",
    image:
      "https://www.callcentrehelper.com/images/stories/2020/12/video-conference-host-760.jpg",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    id: 3,
    title: "Blog Title 3",
    image:
      "https://www.zdnet.com/a/img/resize/97ed44b0d507857624e89fd6cb4ecb23300599e5/2023/03/27/5a915584-f9f7-4734-863d-bae9dcee34f3/gettyimages-1369568052.jpg?auto=webp&width=1280",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto my-20">
      <SectionTitle
        bigTitle="Welcome to Our Blog"
        subTitle="Explore the Latest Posts"
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-20">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3"
          >
            <img
              src={blog.image}
              alt="Blog Image"
              className="w-full h-32 md:h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600">{blog.content}</p>
              <a href={blog.link} className="text-blue-500 mt-2 inline-block">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
