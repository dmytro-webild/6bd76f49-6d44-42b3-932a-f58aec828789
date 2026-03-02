"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TimelineProcessFlow from '@/components/cardStack/layouts/timelines/TimelineProcessFlow';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, Building, Users, Palette, Compass, Lightbulb } from 'lucide-react';

export default function HeritagePage() {
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

      <div id="heritage-showcase" data-section="heritage-showcase">
        <TimelineProcessFlow
          title="Jewish Heritage & Cultural Pride Showcase"
          description="Explore our portfolio of transformative projects that celebrate Jewish heritage while integrating contemporary design. Each project combines architectural innovation with cultural authenticity, featuring portfolio work and project imagery that honors tradition while embracing the future."
          tag="Heritage Projects"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          items={[
            {
              id: "1",              reverse: false,
              content: (
                <>
                  <h3 className="text-lg font-semibold mb-2">Tel Aviv Heritage Museum</h3>
                  <p className="text-sm text-foreground/70">A modern museum celebrating Jewish cultural history through innovative architectural storytelling and interactive design. This landmark project showcases our commitment to preserving cultural narratives while serving contemporary communities.</p>
                </>
              ),
              media: (
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  <img src="http://img.b2bpic.net/free-photo/ancient-vaults-cathedral-windows-stone-architecture-with-history-sacred-church-atmosphere_169016-68741.jpg?_wi=3" alt="Heritage museum exterior architecture with cultural design elements" className="w-full h-full object-cover rounded" />
                  <img src="http://img.b2bpic.net/free-photo/hallway-abbey_181624-16761.jpg?_wi=1" alt="Heritage museum interior gallery space showcasing cultural artifacts" className="w-full h-full object-cover rounded" />
                </div>
              )
            },
            {
              id: "2",              reverse: true,
              content: (
                <>
                  <h3 className="text-lg font-semibold mb-2">Jewish Community Cultural Center</h3>
                  <p className="text-sm text-foreground/70">A vibrant community gathering space that honors traditions while fostering contemporary cultural dialogue and celebration. This project demonstrates how architecture can strengthen community bonds and celebrate shared identity.</p>
                </>
              ),
              media: (
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  <img src="http://img.b2bpic.net/free-photo/hallway-abbey_181624-16761.jpg?_wi=2" alt="Community center gathering space designed for cultural events and celebrations" className="w-full h-full object-cover rounded" />
                  <img src="http://img.b2bpic.net/free-photo/frog-s-eye-view-architectural-twin-buildings-against-clear-blue-sky_181624-59777.jpg?_wi=3" alt="Community center exterior showing contemporary cultural architecture" className="w-full h-full object-cover rounded" />
                </div>
              )
            },
            {
              id: "3",              reverse: false,
              content: (
                <>
                  <h3 className="text-lg font-semibold mb-2">Jewish Identity Residential Complex</h3>
                  <p className="text-sm text-foreground/70">Luxury residential design that integrates cultural symbolism and heritage values into contemporary living spaces with modern amenities. This project shows how personal heritage can inspire residential design that celebrates identity.</p>
                </>
              ),
              media: (
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  <img src="http://img.b2bpic.net/free-photo/frog-s-eye-view-architectural-twin-buildings-against-clear-blue-sky_181624-59777.jpg?_wi=1" alt="Residential complex showcasing heritage-inspired architectural design" className="w-full h-full object-cover rounded" />
                  <img src="http://img.b2bpic.net/free-photo/vertical-low-angle-shot-laktha-center-reflecting-sunset-russia_181624-30555.jpg?_wi=2" alt="Residential complex sunset view reflecting cultural pride and design excellence" className="w-full h-full object-cover rounded" />
                </div>
              )
            },
            {
              id: "4",              reverse: true,
              content: (
                <>
                  <h3 className="text-lg font-semibold mb-2">Historic Synagogue Renovation</h3>
                  <p className="text-sm text-foreground/70">Respectful restoration of historic Jewish places of worship, preserving cultural heritage while incorporating modern accessibility and functionality. This project exemplifies our approach to honoring the past while serving present-day needs.</p>
                </>
              ),
              media: (
                <div className="grid grid-cols-2 gap-2 w-full h-full">
                  <img src="http://img.b2bpic.net/free-photo/gothic-vaults-stone-ceiling-patterns-historic-church-architecture_169016-68764.jpg?_wi=1" alt="Synagogue interior architectural details preserving historic religious heritage" className="w-full h-full object-cover rounded" />
                  <img src="http://img.b2bpic.net/free-photo/ancient-vaults-cathedral-windows-stone-architecture-with-history-sacred-church-atmosphere_169016-68741.jpg?_wi=1" alt="Synagogue restoration exterior maintaining cultural and historical significance" className="w-full h-full object-cover rounded" />
                </div>
              )
            }
          ]}
        />
      </div>

      <div id="cultural-impact" data-section="cultural-impact">
        <MediaAbout
          title="The Power of Heritage-Centered Architecture"
          description="At Webild, we understand that architecture is more than structure—it's a reflection of cultural identity and pride. Our heritage-focused projects demonstrate how thoughtful design can honor the past, celebrate contemporary culture, and inspire future generations. Every project integrates cultural authenticity with innovative modern design."
          tag="Our Vision"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/vertical-low-angle-shot-laktha-center-reflecting-sunset-russia_181624-30555.jpg?_wi=3"
          imageAlt="Architectural vision combining heritage with modern innovation"
          useInvertedBackground={false}
          buttons={[
            { text: "Explore Our Work", href: "/portfolio" },
            { text: "Contact Us", href: "/contact" }
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
