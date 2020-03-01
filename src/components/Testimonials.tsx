import React from 'react';

type Testimonial = {
  quote: string;
  author: string;
};

type Props = {
  testimonials: Testimonial[];
};

export const Testimonials: React.FC<Props> = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial, index) => (
      <article key={`testimonial-${index}`} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);
