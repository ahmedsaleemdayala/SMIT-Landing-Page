import { useRef, useState } from "react";
 
/* ─── Student data ─── */
const reviews = [
  {
    id: 1,
    firstName: "Muhammad",
    lastName: "Saad.",
    batch: "Batch 08\nFlutter\nCourse",
    thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 2,
    firstName: "Muhammad",
    lastName: "Fasih.",
    batch: "Batch 08\nFlutter\nCourse",
    thumb: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    id: 3,
    firstName: "Komal",
    lastName: "Rizvi.",
    batch: "Batch 08\nFlutter\nCourse",
    thumb: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    id: 4,
    firstName: "Ahmed",
    lastName: "Raza.",
    batch: "Batch 09\nReact\nCourse",
    thumb: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 5,
    firstName: "Sara",
    lastName: "Khan.",
    batch: "Batch 09\nUI/UX\nCourse",
    thumb: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    id: 6,
    firstName: "Usman",
    lastName: "Ali.",
    batch: "Batch 10\nPython\nCourse",
    thumb: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];
 
const CARD_WIDTH  = 240; // px — must match CSS .review-card width
const CARD_GAP    = 20;  // px — must match CSS .reviews-track gap
const STEP        = CARD_WIDTH + CARD_GAP;
 
export default function StudentReviews() {
  const [offset, setOffset]   = useState(0);
  const maxOffset = (reviews.length - 3) * STEP; // show ~3 cards at a time
 
  const scrollLeft = () => {
    setOffset((prev) => Math.max(prev - STEP, 0));
  };
 
  const scrollRight = () => {
    setOffset((prev) => Math.min(prev + STEP, maxOffset));
  };
 
  return (
    <section className=" py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 
        {/* ── Left panel ── */}
        <div className="flex flex-col space-y-8">
          <button className="bg-[#0779bf] text-white px-6 py-2 rounded-full font-semibold cursor-pointer w-fit">
            Student Reviews
          </button>
 
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            What Our Students<br />Say About Us
          </h2>
 
          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              disabled={offset === 0}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl cursor-pointer hover:border-gray-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ‹
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              disabled={offset >= maxOffset}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-2xl cursor-pointer hover:border-gray-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ›
            </button>
          </div>
        </div>
 
        {/* ── Carousel ── */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-300"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
 
      </div>
    </section>
  );
}
 
/* ─── Single video card ─── */
function ReviewCard({ review }) {
  const batchLines = review.batch.split("\n");
 
  return (
    <div className="shrink-0 w-72 h-80 rounded-2xl overflow-hidden relative group cursor-pointer">
      {/* Background photo */}
      <img 
        src={review.thumb} 
        alt={`${review.firstName} ${review.lastName}`} 
        className="w-full h-full object-cover" 
        loading="lazy" 
      />
 
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent opacity-60" />
 
      {/* Top-left: logo + batch info */}
      <div className="absolute top-4 left-4 text-white text-xs font-semibold">
        <div className="text-sm font-bold mb-1">AlimSmart</div>
        {batchLines.map((line, i) => (
          <div key={i} className="leading-tight text-white text-[10px]">{line}</div>
        ))}
      </div>
 
      {/* Top-right: SMIT badge */}
      <div className="absolute top-4 right-4 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-bold">
        SMiT
      </div>
 
      {/* Center: play button */}
      <button 
        className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform"
        aria-label="Play video"
      >
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
          <div className="w-0 h-0 border-l-8 border-l-transparent border-r-0 border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" style={{ borderLeft: '8px solid #0779bf', borderTop: '5px solid transparent', borderBottom: '5px solid transparent' }} />
        </div>
      </button>
 
      {/* Bottom: student name */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="text-lg font-bold">
          <span className="text-green-400">{review.firstName}</span>
          <br />
          <span className="text-green-400">{review.lastName}</span>
        </div>
      </div>
    </div>
  );
}