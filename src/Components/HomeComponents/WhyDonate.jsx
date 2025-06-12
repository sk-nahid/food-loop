const WhyDonate = () => {
    const reasons = [
        {
            title: "Fight Hunger",
            desc: "Your extra food can feed someone in need and make a real difference in their life.",
            icon: "🍽️"
        },
        {
            title: "Reduce Waste",
            desc: "Help reduce food waste and promote sustainability by sharing leftovers instead of throwing them away.",
            icon: "♻️"
        },
        {
            title: "Build Community",
            desc: "Connect with others and build a caring, responsible community that shares and supports.",
            icon: "🤝"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            
            <div className="grid gap-6 md:grid-cols-3">
                {reasons.map((item, idx) => (
                    <div key={idx} className="card bg-base-100 shadow-md hover:shadow-xl transition">
                        <div className="card-body items-center text-center">
                            <div className="text-5xl mb-3">{item.icon}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyDonate;
