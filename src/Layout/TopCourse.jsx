import { useState } from "react";


/* ─── Course Data ─── */
const allCourses = [
  {
    id: 1,
    category: "admissions",
    title: "Skill Accelerator Bootcamp",
    desc: "Skill Accelerator Bootcamp",
    duration: "4 months",
    thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    badge: true,
  },
  {
    id: 2,
    category: "admissions",
    title: "Video Animation",
    desc: "The video editor is responsible for adding effects, transitions, formats, and ti…",
    duration: "3 months",
    thumb: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    badge: true,
  },
  {
    id: 3,
    category: "admissions",
    title: "R/O Plant Operator and Maintenance",
    desc: "R/O Plant Operator and Maintenance",
    duration: "3 months",
    thumb: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    badge: true,
  },
  {
    id: 4,
    category: "development",
    title: "Full-Stack Web Development",
    desc: "Master React, Node.js, and databases to build complete web applications from scratch.",
    duration: "6 months",
    thumb: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=600&q=80",
    badge: false,
  },
  {
    id: 5,
    category: "development",
    title: "Python for Data Science",
    desc: "Learn Python, pandas, numpy, and machine learning pipelines for real-world data analysis.",
    duration: "4 months",
    thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    badge: false,
  },
  {
    id: 6,
    category: "development",
    title: "Mobile App Development",
    desc: "Build cross-platform iOS and Android apps using React Native and Expo.",
    duration: "5 months",
    thumb: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    badge: false,
  },
  {
    id: 7,
    category: "designing",
    title: "UI/UX Design Fundamentals",
    desc: "Master Figma, design systems, user research, and prototyping for modern digital products.",
    duration: "3 months",
    thumb: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    badge: false,
  },
  {
    id: 8,
    category: "designing",
    title: "Graphic Design Mastery",
    desc: "Typography, color theory, Illustrator, Photoshop — build a stunning design portfolio.",
    duration: "4 months",
    thumb: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
    badge: false,
  },
  {
    id: 9,
    category: "designing",
    title: "3D Modeling & Animation",
    desc: "Learn Blender from zero to hero — modeling, rigging, texturing, and rendering.",
    duration: "5 months",
    thumb: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    badge: false,
  },
  {
    id: 10,
    category: "networking",
    title: "Cisco CCNA Certification Prep",
    desc: "Routing, switching, IP addressing, and network troubleshooting for CCNA exam success.",
    duration: "3 months",
    thumb: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    badge: false,
  },
  {
    id: 11,
    category: "networking",
    title: "Cybersecurity Essentials",
    desc: "Ethical hacking, penetration testing, firewalls, and security protocols for modern networks.",
    duration: "4 months",
    thumb: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    badge: false,
  },
  {
    id: 12,
    category: "networking",
    title: "Cloud Infrastructure with AWS",
    desc: "Deploy, scale, and manage cloud applications using Amazon Web Services core services.",
    duration: "4 months",
    thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    badge: false,
  },
  {
    id: 13,
    category: "vocational",
    title: "Electrician & Wiring Technician",
    desc: "Residential and commercial electrical wiring, safety standards, and circuit installation.",
    duration: "2 months",
    thumb: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80",
    badge: false,
  },
  {
    id: 14,
    category: "vocational",
    title: "HVAC Installation & Repair",
    desc: "Heating, ventilation, and air conditioning systems — installation, diagnostics, and repair.",
    duration: "3 months",
    thumb: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    badge: false,
  },
  {
    id: 15,
    category: "vocational",
    title: "Plumbing & Pipefitting",
    desc: "Pipe installation, drainage systems, and plumbing code compliance for residential projects.",
    duration: "2 months",
    thumb: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    badge: false,
  },
];

/* ─── Tab Config ─── */
const tabs = [
  { key: "admissions",  label: "Admissions Open" },
  { key: "development", label: "Development" },
  { key: "designing",   label: "Designing" },
  { key: "networking",  label: "Networking" },
  { key: "vocational",  label: "Vocational Training Courses" },
];

/* ─── Admission Badge ─── */
function AdmissionBadge() {
  return (
    <div className="absolute -top-3 right-4 w-28 h-12">
      <div className="relative w-full h-full">
        {/* Red ribbon badge */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-14 border-r-0 border-t-8 border-b-8 border-l-[#C41E3A] border-r-transparent border-t-[#C41E3A] border-b-transparent"></div>
        <div className="absolute top-0 right-0 bg-[#C41E3A] text-white text-xs font-bold px-2 py-1 rounded-sm text-center w-full">
          ADMISSION
          <span className="block text-[10px] bg-yellow-400 text-red-700 font-bold">OPEN</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Course Card ─── */
function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden bg-gray-200 h-48">
        <img src={course.thumb} alt={course.title} className="w-full h-full object-cover" loading="lazy" />
        {course.badge && <AdmissionBadge />}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{course.desc}</p>
        <div className="flex items-center justify-between">
          <button name="enrollBtn" className="bg-[#0779bf] text-white px-5 py-2 rounded-full font-semibold cursor-pointer hover:bg-blue-700 transition">
            Enroll Now
          </button>
          <div className="text-right">
            <div className="text-xs text-gray-500">Duration</div>
            <div className="text-sm font-semibold text-gray-800">{course.duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */
export default function TopCourses() {
  const [activeTab, setActiveTab] = useState("admissions");

  const filtered = allCourses.filter((c) => c.category === activeTab);

  return (
    <>
      <section className=" py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Browse Our <span className="text-[#0779bf]">Top Courses</span>
          </h2>

          {/* Tab Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-[#0779bf] text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={activeTab}>
            {filtered.length > 0 ? (
              filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600">No courses found in this category.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
