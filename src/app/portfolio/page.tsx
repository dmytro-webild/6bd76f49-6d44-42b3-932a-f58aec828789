"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Palette, Star } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSmall"
      background="aurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Webild"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Portfolio", id: "/portfolio" },
            { name: "Heritage", id: "/heritage" },
            { name: "Services", id: "/services" },
            { name: "Team", id: "/team" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          bottomLeftText="Global Community"
          bottomRightText="hello@webild.com"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardThree
          title="Featured Projects"
          description="Explore a selection of Webild's transformative architectural projects that showcase our commitment to cultural sensitivity, innovative design, and lasting impact."
          tag="Portfolio"
          tagIcon={Palette}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="bento-grid"
          products={[
            {
              id: "1",              name: "Tel Aviv Heritage Museum",              price: "Completed 2023",              imageSrc: "http://img.b2bpic.net/free-photo/ancient-vaults-cathedral-windows-stone-architecture-with-history-sacred-church-atmosphere_169016-68741.jpg?_wi=2",              imageAlt: "Tel Aviv Heritage Museum exterior design"
            },
            {
              id: "2",              name: "Jewish Community Cultural Center",              price: "Completed 2022",              imageSrc: "http://img.b2bpic.net/free-photo/hallway-abbey_181624-16761.jpg?_wi=2",              imageAlt: "Community cultural center architectural design"
            },
            {
              id: "3",              name: "Contemporary Residential Tower",              price: "Completed 2024",              imageSrc: "http://img.b2bpic.net/free-photo/frog-s-eye-view-architectural-twin-buildings-against-clear-blue-sky_181624-59777.jpg?_wi=2",              imageAlt: "Contemporary luxury residential architectural project"
            }
          ]}
        />
      </div>

      <div id="project-testimonials" data-section="project-testimonials">
        <TestimonialCardThirteen
          title="Project Success Stories"
          description="Hear directly from our clients about their experiences working with Webild on transformative architectural projects."
          tag="Client Stories"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Rachel Goldstein",              handle: "@rachelgoldstein_dev",              testimonial: "Webild delivered a residential project that honors cultural heritage while providing modern luxury. Their attention to detail is remarkable.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",              imageAlt: "Rachel Goldstein testimonial"
            },
            {
              id: "2",              name: "Noam Bergman",              handle: "@noam_bergman_ceo",              testimonial: "The cultural center Webild designed for our community has become a beloved gathering space. Their design truly captures our values.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",              imageAlt: "Noam Bergman testimonial"
            }
          ]}
        />
      </div>

      <div id="approach" data-section="approach">
        <ProductCardThree
          title="Our Design Process"
          description="Every Webild project follows a carefully structured approach that ensures cultural authenticity, innovative design, and exceptional execution."
          tag="Our Process"
          tagIcon={Palette}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "process-1",              name: "Cultural Research & Analysis",              price: "Phase 1",              imageSrc: "/placeholders/placeholder1.webp?_wi=1",              imageAlt: "Cultural research and analysis phase"
            },
            {
              id: "process-2",              name: "Conceptual Design Development",              price: "Phase 2",              imageSrc: "/placeholders/placeholder1.webp?_wi=2",              imageAlt: "Conceptual design development phase"
            },
            {
              id: "process-3",              name: "Implementation & Completion",              price: "Phase 3",              imageSrc: "/placeholders/placeholder1.webp?_wi=3",              imageAlt: "Implementation and completion phase"
            }
          ]}
        />
      </div>

      <FooterLogoReveal
        logoText="Webild"
        leftLink={{
          text: "Privacy Policy",          href: "#"
        }}
        rightLink={{
          text: "Terms of Service",          href: "#"
        }}
      />
    </ThemeProvider>
  );
}