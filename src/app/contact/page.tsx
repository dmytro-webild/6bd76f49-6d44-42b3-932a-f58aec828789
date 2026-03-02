"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Mail, Compass } from 'lucide-react';

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get In Touch"
          title="Ready to Create Something Extraordinary?"
          description="Let's discuss how Webild can bring your vision to life through culturally sensitive, innovative architectural design."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Start a Conversation"
          termsText="By contacting us, you agree to our Privacy Policy and Terms of Service."
        />
      </div>

      <div id="location" data-section="location">
        <MediaAbout
          title="Visit Our Tel Aviv Studio"
          description="Located in the heart of Tel Aviv, our studio serves as both workspace and inspiration. We welcome visitors by appointment to discuss projects, view our latest work, and explore how architecture can honor heritage while embracing innovation."
          tag="Our Studio"
          tagIcon={Compass}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/vertical-low-angle-shot-laktha-center-reflecting-sunset-russia_181624-30555.jpg?_wi=2"
          imageAlt="Webild studio in Tel Aviv"
          useInvertedBackground={false}
          buttons={[
            { text: "Schedule a Visit", href: "#contact" }
          ]}
        />
      </div>

      <div id="collaboration" data-section="collaboration">
        <MediaAbout
          title="Collaboration is at the Heart of Our Process"
          description="We believe the best architectural solutions emerge from meaningful collaboration between architects, clients, and communities. Every project begins with listening—understanding your vision, your cultural context, and your aspirations. From there, we work together to create spaces that truly serve their purpose and honor their heritage."
          tag="Our Process"
          tagIcon={Compass}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/gothic-vaults-stone-ceiling-patterns-historic-church-architecture_169016-68764.jpg?_wi=4"
          imageAlt="Collaborative design process at work"
          useInvertedBackground={true}
          buttons={[
            { text: "Learn About Our Services", href: "/services" }
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