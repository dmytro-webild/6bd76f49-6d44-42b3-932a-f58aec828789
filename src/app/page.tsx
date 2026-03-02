"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from 'next/link';
import { Building, Compass, Lightbulb, Handshake, Star, Users, Palette, Award } from 'lucide-react';

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Architecture that honors Jewish heritage and vision"
          description="Webild designs transformative spaces that bridge cultural identity with contemporary innovation. From Tel Aviv to the world, we create buildings that inspire and endure."
          tag="Architectural Excellence"
          tagIcon={Building}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          imageSrc="http://img.b2bpic.net/free-photo/vertical-low-angle-shot-laktha-center-reflecting-sunset-russia_181624-30555.jpg?_wi=1"
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
          imageSrc="http://img.b2bpic.net/free-photo/gothic-vaults-stone-ceiling-patterns-historic-church-architecture_169016-68764.jpg?_wi=1"
          imageAlt="Webild's architectural heritage center design"
          useInvertedBackground={false}
          buttons={[
            { text: "Our Approach", href: "/about" }
          ]}
        />
      </div>

      <div id="heritage" data-section="heritage">
        <FeatureCardNine
          title="Jewish Heritage & Cultural Pride Showcase"
          description="Explore our portfolio of projects that celebrate Jewish heritage while integrating contemporary design. Each project combines architectural innovation with cultural authenticity."
          tag="Heritage Projects"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          showStepNumbers={false}
          features={[
            {
              id: 1,
              title: "Tel Aviv Heritage Museum",              description: "A modern museum celebrating Jewish cultural history through innovative architectural storytelling and interactive design.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/ancient-vaults-cathedral-windows-stone-architecture-with-history-sacred-church-atmosphere_169016-68741.jpg?_wi=1", imageAlt: "Heritage museum exterior" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/hallway-abbey_181624-16761.jpg?_wi=1", imageAlt: "Heritage museum interior gallery" }
            },
            {
              id: 2,
              title: "Jewish Community Cultural Center",              description: "A vibrant community gathering space that honors traditions while fostering contemporary cultural dialogue and celebration.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/hallway-abbey_181624-16761.jpg?_wi=2", imageAlt: "Community center gathering space" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/frog-s-eye-view-architectural-twin-buildings-against-clear-blue-sky_181624-59777.jpg?_wi=1", imageAlt: "Community center exterior architecture" }
            },
            {
              id: 3,
              title: "Jewish Identity Residential Complex",              description: "Luxury residential design that integrates cultural symbolism and heritage values into contemporary living spaces with modern amenities.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/frog-s-eye-view-architectural-twin-buildings-against-clear-blue-sky_181624-59777.jpg?_wi=1", imageAlt: "Residential complex architectural design" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/vertical-low-angle-shot-laktha-center-reflecting-sunset-russia_181624-30555.jpg?_wi=2", imageAlt: "Residential complex sunset view" }
            },
            {
              id: 4,
              title: "Historic Synagogue Renovation",              description: "Respectful restoration of historic Jewish places of worship, preserving cultural heritage while incorporating modern accessibility and functionality.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/gothic-vaults-stone-ceiling-patterns-historic-church-architecture_169016-68764.jpg?_wi=1", imageAlt: "Synagogue interior architectural details" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/ancient-vaults-cathedral-windows-stone-architecture-with-history-sacred-church-atmosphere_169016-68741.jpg?_wi=1", imageAlt: "Synagogue restoration exterior" }
            }
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
              title: "Heritage Site Design",              description: "Thoughtfully designed spaces that honor cultural and historical significance while meeting modern functional needs."
            },
            {
              icon: Users,
              title: "Community Spaces",              description: "Cultural centers and community gathering spaces that foster connection, dialogue, and shared identity."
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
            "Israeli Museum Association",            "Jewish Heritage Foundation",            "Tel Aviv Cultural Alliance",            "International Museum Council",            "Cultural Preservation Initiative",            "Heritage Development Group",            "Architectural Excellence Institute",            "Global Design Consortium"
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
              id: "1",              name: "Yael Moran",              handle: "@yaelmoran_curator",              testimonial: "Webild transformed our vision for a modern Jewish heritage center into architectural reality. Their sensitivity to cultural nuance combined with innovative design was exceptional.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg?_wi=1",              imageAlt: "Yael Moran testimonial"
            },
            {
              id: "2",              name: "Dr. Avi Hartman",              handle: "@avihartman_director",              testimonial: "Working with Webild on our museum expansion was a game-changer. They understood our institutional values while pushing architectural boundaries.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg?_wi=2",              imageAlt: "Dr. Avi Hartman testimonial"
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
