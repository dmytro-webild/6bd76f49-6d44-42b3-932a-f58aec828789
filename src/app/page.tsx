"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from 'next/link';
import { Building, Compass, Lightbulb, Handshake, Star, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSmall"
      background="none"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Webild"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Portfolio", id: "/portfolio" },
            { name: "Services", id: "/services" },
            { name: "Team", id: "/team" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          button={{
            text: "Explore Our Work",
            href: "/portfolio"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Architecture that honors Jewish heritage and vision"
          description="Webild designs transformative spaces that bridge cultural identity with contemporary innovation. From Tel Aviv to the world, we create buildings that inspire and endure."
          tag="Architectural Excellence"
          tagIcon={Building}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          imageSrc="http://img.b2bpic.net/free-photo/vertical-low-angle-shot-laktha-center-reflecting-sunset-russia_181624-30555.jpg"
          imageAlt="Modern architectural vision blending heritage and innovation"
          buttons={[
            { text: "Explore Our Work", href: "/portfolio" },
            { text: "Learn More", href: "/about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Pioneering Cultural Architecture from Tel Aviv to the World"
          description="Webild is a Tel Aviv-based architectural studio specializing in Jewish heritage and cultural projects. We create spaces that authentically honor cultural identity while embracing contemporary design innovation. Our expertise spans museum design, community centers, heritage sites, and residential projects—each infused with deep understanding of cultural significance and architectural excellence."
          tag="About Webild"
          tagIcon={Compass}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/gothic-vaults-stone-ceiling-patterns-historic-church-architecture_169016-68764.jpg"
          imageAlt="Webild's architectural heritage center design"
          useInvertedBackground={false}
          buttons={[
            { text: "Our Approach", href: "/about" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureBorderGlow
          title="Our Expertise"
          description="Webild specializes in culturally sensitive architectural design that combines heritage respect with innovative contemporary solutions."
          tag="Services"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              icon: Building,
              title: "Heritage Site Design",
              description: "Thoughtfully designed spaces that honor cultural and historical significance while meeting modern functional needs."
            },
            {
              icon: Users,
              title: "Community Spaces",
              description: "Cultural centers and community gathering spaces that foster connection, dialogue, and shared identity."
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Institutions"
          description="Webild partners with prestigious cultural organizations, museums, and international institutions."
          tag="Partners"
          tagIcon={Handshake}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Israeli Museum Association",
            "Jewish Heritage Foundation",
            "Tel Aviv Cultural Alliance",
            "International Museum Council",
            "Cultural Preservation Initiative",
            "Heritage Development Group",
            "Architectural Excellence Institute",
            "Global Design Consortium"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Clients Say"
          description="Trusted by leading cultural institutions, museums, and high-net-worth clients worldwide."
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          showRating={true}
          testimonials={[
            {
              id: "1",
              name: "Yael Moran",
              handle: "@yaelmoran_curator",
              testimonial: "Webild transformed our vision for a modern Jewish heritage center into architectural reality. Their sensitivity to cultural nuance combined with innovative design was exceptional.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",
              imageAlt: "Yael Moran testimonial"
            },
            {
              id: "2",
              name: "Dr. Avi Hartman",
              handle: "@avihartman_director",
              testimonial: "Working with Webild on our museum expansion was a game-changer. They understood our institutional values while pushing architectural boundaries.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg",
              imageAlt: "Dr. Avi Hartman testimonial"
            }
          ]}
        />
      </div>

      <FooterLogoReveal
        logoText="Webild"
        leftLink={{
          text: "Privacy Policy",
          href: "#"
        }}
        rightLink={{
          text: "Terms of Service",
          href: "#"
        }}
      />
    </ThemeProvider>
  );
}