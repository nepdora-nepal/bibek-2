import ImageWithFallback from "@/components/common/ImageWithFallback";
import Link from "next/link";
import images from "@/../images.json"

const HeroSection = () => {

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50/50 to-background py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
              Empower Your Business with Smart Solutions
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Streamline operations, boost sales, and delight your customers
              with our cutting-edge, all-in-one platform designed for growth.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link href="#get-started" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Get Started
              </Link>
              <Link href="#learn-more" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-background hover:bg-accent hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-none rounded-xl shadow-2xl overflow-hidden aspect-video relative group">
              <ImageWithFallback
                id="hero"
                src={images.hero}
                fallbackSrc={images.hero}
                alt="Modern business dashboard interface"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-xl transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Subtle glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/50 rounded-xl opacity-70 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
