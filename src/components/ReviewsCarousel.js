"use client";

import { useState, useEffect, useRef } from "react";

const REVIEWS = [
  {
    id: "rev-1",
    author: "Keisha Harvey",
    role: "Local Guide",
    time: "2 weeks ago",
    text: "First time eating here and it was amazing down to the service, food and presentation, would definitely eat here again. Was served by Daisy and another man, both very polite and attentive. Highly recommend!",
    rating: "★★★★★"
  },
  {
    id: "rev-2",
    author: "Yusuf Murdock",
    role: "Local Guide",
    time: "a month ago",
    text: "Hot shot parmesan was 11/10! Blue lagoon mocktail was 11/10. Perfect customer service. The interior is amazing 👏",
    rating: "★★★★★"
  },
  {
    id: "rev-3",
    author: "Wrak",
    role: "Diner",
    time: "a month ago",
    text: "First time going to Chickaros today and we absolutely loved it. From the service, warm welcome, atmosphere, decor, and the food - it was all top tier! My husband is an avid lover of grills and doners and he was highly impressed.",
    rating: "★★★★★"
  },
  {
    id: "rev-4",
    author: "Maryam Omara",
    role: "Diner",
    time: "11 months ago",
    text: "5/5 – An Exceptional Dining Experience! The staff were incredibly warm and attentive, going above and beyond to ensure our dinner was perfect. The atmosphere is cozy and the food is delicious.",
    rating: "★★★★★"
  },
  {
    id: "rev-5",
    author: "Mevan Senanayake",
    role: "Local Guide",
    time: "a year ago",
    text: "I recently visited Chickaros in West Bromwich and had such a great experience. From the moment we walked in, we were impressed by the warm and welcoming service. The staff were friendly, attentive, and made us feel right at home.",
    rating: "★★★★★"
  },
  {
    id: "rev-6",
    author: "Rahul Sharma",
    role: "Local Guide",
    time: "2 weeks ago",
    text: "I visited Chickaros in West Bromwich and had a really good experience overall. The food was fresh, flavourful, and well presented, with generous portions. The atmosphere felt lively and welcoming.",
    rating: "★★★★★"
  },
  {
    id: "rev-7",
    author: "Fathima M",
    role: "Local Guide",
    time: "2 years ago",
    text: "Value for money! We were hungry after a long day of travelling and ended up at this delicious restaurant. The food portions were big and worth the price. The steaks were perfectly cooked and had plenty of sides.",
    rating: "★★★★★"
  },
  {
    id: "rev-8",
    author: "kiara lea walker",
    role: "Diner",
    time: "4 months ago",
    text: "We were served by Nancy and she is amazing. Very helpful and attentive. Happy to help with a very warm, welcoming personality.",
    rating: "★★★★★"
  },
  {
    id: "rev-9",
    author: "Ehsaan Ahmad",
    role: "Local Guide",
    time: "9 months ago",
    text: "First of all, the entrance is beautiful – the Hollywood-style entrance really gives the restaurant a unique and welcoming vibe. The decor is stunning and the chicken breast was cooked perfectly - soft, juicy, and full of flavour.",
    rating: "★★★★★"
  },
  {
    id: "rev-10",
    author: "Gautama",
    role: "Diner",
    time: "8 months ago",
    text: "Nice spot in West Bromwich with a simple but warm ambience. The service is friendly and laid-back. The menu offers solid, comforting dishes without too many surprises — exactly what you want when you’re in the mood for something dependable. The historic building charm gives the place character.",
    rating: "★★★★★"
  }
];

export default function ReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - visibleItems);

  // Keep index within bounds on resize
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [visibleItems, maxIndex, activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // Wrap around to start
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      if (prev <= 0) {
        return maxIndex; // Wrap around to end
      }
      return prev - 1;
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex, visibleItems]);

  return (
    <div 
      className="reviews-carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      id="reviews-carousel-widget"
    >
      <div className="reviews-carousel-viewport">
        <div 
          className="reviews-carousel-track" 
          ref={trackRef}
          style={{
            transform: `translate3d(-${activeIndex * (100 / visibleItems)}%, 0, 0)`,
          }}
        >
          {REVIEWS.map((rev) => (
            <div key={rev.id} className="reviews-carousel-slide">
              <div className="review-card" id={`carousel-${rev.id}`}>
                <p className="review-text">"{rev.text}"</p>
                <div className="review-meta">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="review-author">{rev.author}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted-light)", marginTop: "0.2rem" }}>
                      {rev.role} &bull; {rev.time}
                    </span>
                  </div>
                  <span className="review-rating">{rev.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="carousel-controls">
        <button 
          className="carousel-btn" 
          onClick={handlePrev} 
          aria-label="Previous Review"
          id="reviews-carousel-prev"
        >
          <svg viewBox="0 0 24 24">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <div className="carousel-dots" role="tablist" aria-label="Review Slides">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot ${activeIndex === idx ? "active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`Go to slide ${idx + 1}`}
              id={`reviews-carousel-dot-${idx}`}
            />
          ))}
        </div>

        <button 
          className="carousel-btn" 
          onClick={handleNext} 
          aria-label="Next Review"
          id="reviews-carousel-next"
        >
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
}
