"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import MediaAbout from '@/components/sections/about/MediaAbout';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Compass, Users } from 'lucide-react';

export default function AboutPage() {
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
            { name: "Services", id: "/services" },
            { name: "Team", id: "/team" },
            { name: "About", id: "/about" },
            { name: "Contact", id: "/contact" }
          ]}
          bottomLeftText="Global Community"
          bottomRightText="hello@webild.com"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Our Story: Bridging Heritage with Innovation"
          description="Founded in Tel Aviv, Webild emerged from a deep understanding that architecture shapes cultural identity. We believe that buildings should honor their cultural heritage while embracing the possibilities of contemporary design. Our approach combines scholarly research, community engagement, and innovative design thinking to create spaces that tell meaningful stories."
          tag="Our Mission"
          tagIcon={Compass}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/gothic-vaults-stone-ceiling-patterns-historic-church-architecture_169016-68764.jpg?_wi=2"
          imageAlt="Webild's design philosophy in action"
          useInvertedBackground={false}
          buttons={[
            { text: "View Our Work", href: "/portfolio" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSix
          title="Meet Our Team"
          description="Award-winning architects and designers united by a shared passion for culturally authentic and innovative design."
          tag="Leadership"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",              name: "Michal Cohen",              role: "Founder & Principal Architect",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-homosexual-man-official-suit-looking-camera-close-up-shot-happy-gay-getting-dressed-wedding-ceremony-standing-hotel-room-with-his-partner-background-love-emotion-concept_74855-22675.jpg?_wi=3",              imageAlt: "Michal Cohen, Founder and Principal Architect at Webild"
            },
            {
              id: "2",              name: "David Rothschild",              role: "Design Director",              imageSrc: "http://img.b2bpic.net/free-photo/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg",              imageAlt: "David Rothschild, Design Director at Webild"
            }
          ]}
        />
      </div>

      <div id="values" data-section="values">
        <MediaAbout
          title="Our Values Drive Every Design Decision"
          description="We believe architecture has the power to strengthen communities, preserve cultural narratives, and inspire future generations. Our commitment to excellence, authenticity, and innovation guides every project from initial concept to final completion."
          tag="Core Values"
          tagIcon={Compass}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/hallway-abbey_181624-16761.jpg?_wi=1"
          imageAlt="Architectural space reflecting our values"
          useInvertedBackground={true}
          buttons={[
            { text: "Start a Project", href: "/contact" }
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
