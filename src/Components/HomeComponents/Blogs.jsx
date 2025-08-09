import { Link } from "react-router";

const Blogs = () => {
  const blogs = [

    {
      id: 1,
      title: "How Food Donation Helps the Community",
      image: "https://i.ibb.co/yFCjZDW4/pexels-rdne-6646953.jpg",
      summary:
        "Sharing food goes beyond just feeding someone. It builds empathy, saves resources, and strengthens our society.",
      date: "June 10, 2025",
    },
    {
      id: 2,
      title: "Food Safety Tips Every Donor Should Know",
      image: "https://i.ibb.co/MHMfQZF/banner1.jpg",
      summary:
        "Safe food handling is key to making sure donations help rather than harm. Learn how to donate responsibly.",
      date: "June 5, 2025",
    },
    {
      id: 3,
      title: "Why Reducing Food Waste Matters in 2025",
      image: "https://i.ibb.co/KxZyNGwq/banner3.jpg",
      summary:
        "Wasting food is a global problem. See how you can take small actions to make a huge environmental difference.",
      date: "May 29, 2025",
    },


  ];


  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="space-y-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-base-100 shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <div className="p-6 flex-1">
              <span className="text-xs text-gray-400">{blog.date}</span>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.summary}</p>
              <button className="btn btn-sm btn-outline btn-info" ><Link to={`/blogs/${blog.id}`}>Read More</Link> </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
