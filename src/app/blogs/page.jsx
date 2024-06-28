import Link from "next/link";

const page = () => {
    return (
        <div className="p-24">
            {
                blgos.map(blog => <div className="border-2 border-black p-12">
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                    <button className="bg-black btn text-white p-2"><Link href={`/blogs/${blog.slug}`}>view details</Link></button>
                </div> )
            }
        </div>
    );
};

const blgos = [
    {
      "slug": "tech-trends-2024",
      "title": "Top Tech Trends to Watch in 2024",
      "description": "Explore the most anticipated technology trends of 2024, including advancements in AI, quantum computing, and more."
    },
    {
      "slug": "healthy-living-tips",
      "title": "10 Tips for a Healthier Lifestyle",
      "description": "Discover practical tips and strategies to improve your health and well-being through diet, exercise, and mindfulness."
    },
    {
      "slug": "travel-guide-italy",
      "title": "Ultimate Travel Guide to Italy",
      "description": "Plan your perfect Italian getaway with our comprehensive travel guide, covering must-see destinations, local cuisine, and cultural experiences."
    },
    {
      "slug": "financial-freedom-101",
      "title": "Achieving Financial Freedom: A Beginner's Guide",
      "description": "Learn the basics of personal finance, budgeting, and investing to achieve financial independence and security."
    },
    {
      "slug": "sustainable-living-hacks",
      "title": "Easy Hacks for Sustainable Living",
      "description": "Incorporate simple and effective sustainability practices into your daily life to reduce your environmental footprint."
    }
  ]
  

export default page;