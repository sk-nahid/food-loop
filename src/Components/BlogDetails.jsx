import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();

  // Example: you could fetch this from MongoDB or just simulate with a local list
  const blogs = [
    {
      id: 1,
      title: "How Food Donation Helps the Community",
      image: "https://i.ibb.co/yFCjZDW4/pexels-rdne-6646953.jpg",
      description:
        "Food donation connects those who have surplus with those in need, reducing hunger and preventing edible food from ending up in landfills. Beyond the immediate benefit of nourishing people, it encourages compassion, fosters social connections, and strengthens local communities by showing that everyone has a role to play in caring for each other.",
      date: "June 10, 2025",
    },
    {
      id: 2,
      title: "Food Safety Tips Every Donor Should Know",
      image: "https://i.ibb.co/MHMfQZF/banner1.jpg",
      description:
        "Donating food requires careful attention to hygiene and storage. This includes keeping perishable items refrigerated, labeling expiration dates, and avoiding food that’s spoiled or past its safe consumption period. Following these practices ensures donations remain fresh, safe, and truly helpful to recipients.",
      date: "June 5, 2025",
    },
    {
      id: 3,
      title: "Why Reducing Food Waste Matters in 2025",
      image: "https://i.ibb.co/KxZyNGwq/banner3.jpg",
      description:
        "Food waste contributes significantly to greenhouse gas emissions and wastes the resources used in producing, transporting, and storing food. In 2025, taking action—whether through mindful shopping, donating surplus, or repurposing leftovers—can help tackle climate change and build a more sustainable world.",
      date: "May 29, 2025",
    },
  ];

  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <h1 className="text-center py-12">Blog not found</h1>;

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-6" />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-400 mb-4">{blog.date}</p>
      <p className="text-lg text-gray-700">{blog.description}</p>
    </section>
  );
};

export default BlogDetails;
