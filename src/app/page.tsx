import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Gift, ShieldCheck, Globe, Zap } from "lucide-react";
import { Logo } from "@/components/logo";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const giftCardImage = PlaceHolderImages.find((img) => img.id === "gift-card-app");

  const features = [
    {
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Vast Selection",
      description: "Choose from a wide variety of gift cards for your favorite brands and retailers.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Secure Payments",
      description: "Pay securely with Worldcoin, leveraging cutting-edge cryptography for your peace of mind.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Spend Anywhere",
      description: "Use your gift cards online or in-store, wherever the brand is accepted, worldwide.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Instant Delivery",
      description: "Your digital gift cards are delivered to you instantly upon purchase.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span className="font-headline text-xl font-bold text-primary">
              Orbital Intro
            </span>
          </div>
          <Button>Get Started</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 text-center md:px-6 md:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Instant Gift Cards with Worldcoin
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Buy gift cards for your favorite brands with ease. Pay securely with Worldcoin and spend them anywhere.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            {giftCardImage && (
              <Image
                src={giftCardImage.imageUrl}
                alt={giftCardImage.description}
                data-ai-hint={giftCardImage.imageHint}
                width={345}
                height={240}
                className="rounded-xl shadow-2xl"
                priority
              />
            )}
          </div>
        </section>

        <section className="bg-card">
          <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">
                  About the Worldcoin Mini App Program
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                  Discover the features that make our gift card mini app the best way to use your Worldcoin.
                </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row md:px-6">
          <p>&copy; {new Date().getFullYear()} Orbital Intro. All rights reserved.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
