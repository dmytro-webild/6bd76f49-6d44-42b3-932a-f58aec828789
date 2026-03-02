"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Lightbulb, Compass, Building2, Users, Landmark, Home, Palette, Zap } from 'lucide-react';

export default function ServicesPage() {
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
              icon: Building2,
              title: "Heritage Site Design",
              description: "Thoughtfully designed spaces that honor cultural and historical significance while meeting modern functional needs."
            },
            {
              icon: Users,
              title: "Community Spaces",
              description: "Cultural centers and community gathering spaces that foster connection, dialogue, and shared identity."
            },
            {
              icon: Landmark,
              title: "Museum Architecture",
              description: "Innovative museum environments that showcase cultural narratives with cutting-edge design and accessibility."
            },
            {
              icon: Home,
              title: "Residential Projects",
              description: "Bespoke residential designs that integrate cultural values with contemporary luxury and comfort."
            },
            {
              icon: Palette,
              title: "Design Consultation",
              description: "Expert guidance on culturally sensitive design strategies and architectural heritage preservation."
            },
            {
              icon: Zap,
              title: "Innovative Solutions",
              description: "Creative architectural approaches that balance tradition with forward-thinking design innovation."
            }
          ]}
        />
      </div>

      <div id="approach" data-section="approach">
        <MediaAbout
          title="Our Approach: Where Heritage Meets Innovation"
          description="Every project begins with deep cultural research and community engagement. We believe that meaningful architecture emerges from understanding the stories, traditions, and aspirations of the people who will inhabit our spaces. This foundation informs every design decision, from spatial planning to material selection."
          tag="Our Philosophy"
          tagIcon={Compass}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/gothic-vaults-stone-ceiling-patterns-historic-church-architecture_169016-68764.jpg?_wi=3"
          imageAlt="Architectural detail showing our design philosophy"
          useInvertedBackground={false}
          buttons={[
            { text: "Start Your Project", href: "/contact" }
          ]}
        />
      </div>

      <div id="expertise" data-section="expertise">
        <MediaAbout
          title="Specialized Knowledge in Jewish Heritage Architecture"
          description="Our team brings together expertise in Jewish cultural traditions, modern architectural practices, and sustainable design principles. We understand the delicate balance required to create spaces that honor the past while serving contemporary needs. From synagogue renovations to cultural center designs, we approach each project with scholarly depth and creative vision."
          tag="Our Expertise"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/hallway-abbey_181624-16761.jpg?_wi=3"
          imageAlt="Example of our heritage-sensitive architectural work"
          useInvertedBackground={true}
          buttons={[
            { text: "View Our Portfolio", href: "/portfolio" }
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