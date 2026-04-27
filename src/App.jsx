import React from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import {
  Camera,
  Drone,
  Video,
  Home,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Star,
  Play,
} from "lucide-react";

export default function RealEstateMediaWebsite() {
  const services = [
    {
      icon: Camera,
      title: "HDR Property Photos",
      text: "Clean, bright, high-quality photos that make listings look more professional and attractive online.",
    },
    {
      icon: Drone,
      title: "Drone Photos & Video",
      text: "Premium aerial shots showing the home, lot, neighbourhood, parks, schools, and nearby features.",
    },
    {
      icon: Video,
      title: "Listing Videos",
      text: "Smooth real estate videos made for MLS, Instagram, TikTok, YouTube Shorts, and agent branding.",
    },
    {
      icon: Home,
      title: "Full Listing Packages",
      text: "HDR photos, drone photos, drone video, house video, and floor plans combined into one simple package for busy agents.",
    },
  ];

  const priceTiers = [
    { sqft: "Up to 1,500 sq ft", price: "$200" },
    { sqft: "1,501 - 2,500 sq ft", price: "$250" },
    { sqft: "2,501 - 3,500 sq ft", price: "$300" },
    { sqft: "3,501 - 4,500 sq ft", price: "$350" },
    { sqft: "4,501 - 5,500 sq ft", price: "$400" },
    { sqft: "5,501+ sq ft", price: "Custom Quote" },
  ];

  const [state, handleQuoteSubmit] = useForm("xgornrag");

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/STJPGLOGONOBG.png"
              alt="STJPG Photography Studio logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#work" className="hover:text-white">
              Portfolio
            </a>
            <a href="#videos" className="hover:text-white">
              Videos
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 md:block"
          >
            Book a Shoot
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-44">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-neutral-500/30 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-neutral-300">
                <Star size={16} /> Toronto & GTA Real Estate Media
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Make every listing look expensive.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                Professional HDR photos, drone footage, listing videos, and
                social media content for real estate agents who want more
                attention, better first impressions, and stronger listing
                presentation.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  Get a Quote <ArrowRight size={18} />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  View Portfolio
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl sm:p-6 md:p-8">
                <div className="flex min-h-[420px] flex-col items-center justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-6 text-center sm:min-h-[500px] sm:p-8 md:aspect-[4/5] md:min-h-0">
                  <img
                    src="/STJPGLOGONOBG.png"
                    alt="STJPG Photography Studio logo"
                    className="w-full max-w-[220px] object-contain drop-shadow-2xl sm:max-w-[280px] md:max-w-md"
                  />

                  <div className="mt-6 w-full rounded-3xl bg-white/[0.06] p-5 backdrop-blur-md sm:mt-8 sm:p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-neutral-300 sm:text-sm">
                      Photography Studio
                    </p>
                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                      HDR + Drone + Reel
                    </h3>
                    <p className="mt-3 text-sm text-neutral-300 sm:text-base">
                      Premium real estate media including HDR photos, drone
                      coverage, video, and floor plans.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Services
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Everything agents need to market a listing.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.08]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-neutral-950">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-400">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Drone Media
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  Why agents need drone photos and video.
                </h2>
                <p className="mt-5 leading-8 text-neutral-300">
                  Drone media helps buyers understand more than just the house.
                  It shows the full property, lot size, backyard, street,
                  neighbourhood, parks, schools, and nearby features that
                  regular ground photos cannot show clearly.
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Shows the full size and layout of the property",
                  "Makes the listing look more premium and professional",
                  "Highlights nearby parks, schools, roads, and neighbourhood features",
                  "Helps agents stand out on MLS, Instagram, TikTok, and YouTube",
                  "Gives buyers a better first impression before they book a showing",
                ].map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 rounded-2xl bg-white/[0.05] p-4 text-neutral-200"
                  >
                    <CheckCircle className="mt-1 shrink-0" size={20} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Portfolio
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  Recent listing style.
                </h2>
              </div>
              <p className="max-w-md text-neutral-400">
                A sample of our real estate photography and listing media.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:col-span-2 md:row-span-2">
                <div className="relative flex h-full min-h-[420px] items-end overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-950 p-6">
                  <img
                    src="/OUTSIDE.jpg"
                    alt="Thumbnail"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-sm text-neutral-300">Project 1</p>
                    <h3 className="text-2xl font-bold">Thumbnail</h3>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] md:row-span-2">
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm text-neutral-300">Project 2</p>
                    <h3 className="text-2xl font-bold">Interior Photos</h3>
                  </div>

                  <div className="grid gap-4">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src="/INSIDE1.jpg"
                        alt="Interior Photo 1"
                        className="h-56 w-full object-cover"
                      />
                    </div>

                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src="/INSIDE2.jpg"
                        alt="Interior Photo 2"
                        className="h-56 w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                <div className="relative flex aspect-video items-end overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-950 p-6">
                  <img
                    src="/FLOORPLAN.jpg"
                    alt="2D Floor Plan"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-sm text-neutral-300">Project 3</p>
                    <h3 className="text-2xl font-bold">2D Floor Plan</h3>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                <div className="relative flex aspect-video items-end overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-950 p-6">
                  <img
                    src="/droneshot2.png"
                    alt="Drone Shot"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-sm text-neutral-300">Project 4</p>
                    <h3 className="text-2xl font-bold">Drone Shot</h3>
                  </div>
                </div>
              </div>

              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                <div className="relative flex aspect-video items-end overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-950 p-6">
                  <img
                    src="/OUTSIDEDARK.png"
                    alt="Twilight Exterior"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-sm text-neutral-300">Project 5</p>
                    <h3 className="text-2xl font-bold">Twilight Exterior</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Video
                </p>
                <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                  Video content for listings and social media.
                </h2>
              </div>
              <p className="max-w-md text-neutral-400">
                Professional video options that help agents market properties in
                a more premium way.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                <div className="relative aspect-video bg-black">
                  <video
                    controls
                    className="h-full w-full object-cover"
                    src="/PROVIDEOHOR.mp4"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-neutral-950">
                    <Play size={24} />
                  </div>
                  <h3 className="text-3xl font-bold">Horizontal Video</h3>
                  <p className="mt-4 leading-7 text-neutral-400">
                    Professional horizontal video showing the full property in a
                    clean and cinematic way. Perfect for websites, YouTube, and
                    premium listing presentations.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-neutral-950">
                  <Video size={24} />
                </div>
                <h3 className="text-3xl font-bold">Social Reel</h3>
                <p className="mt-4 leading-7 text-neutral-400">
                  Short vertical social reel made for Instagram Reels, TikTok,
                  and YouTube Shorts. Great for grabbing attention fast and
                  helping agents grow online.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Pricing
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Get a quote based on property size.
              </h2>
              <p className="mt-4 text-neutral-400">
                Enter the square footage of the home to choose the right price
                range. Every price includes HDR photos, drone photos, drone
                video, a video walkthrough of the house, and a floor plan.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="text-2xl font-bold">Quote by square footage</h3>
                <p className="mt-2 text-neutral-400">
                  Choose the size range that matches the property.
                </p>

                <div className="mt-6 space-y-3">
                  {priceTiers.map((tier) => (
                    <div
                      key={tier.sqft}
                      className="flex items-center justify-between rounded-2xl bg-white/[0.05] px-5 py-4"
                    >
                      <span className="text-neutral-200">{tier.sqft}</span>
                      <span className="text-xl font-bold">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <h3 className="text-2xl font-bold">
                  Included with every price
                </h3>
                <div className="mt-6 space-y-4 text-neutral-300">
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 shrink-0" size={20} /> HDR
                    interior and exterior photos
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 shrink-0" size={20} /> Drone
                    photos
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 shrink-0" size={20} /> Drone
                    video
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 shrink-0" size={20} />
                    Professional 60 seconds horizontal video
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="mt-1 shrink-0" size={20} /> Floor
                    plan
                  </div>
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200"
                >
                  Request Quote <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:grid-cols-3 md:p-12">
            <div>
              <h3 className="text-3xl font-bold">Why agents choose us</h3>
              <p className="mt-3 text-neutral-400">
                Fast, reliable media that helps listings stand out.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              {[
                "Fast turnaround",
                "Clean editing style",
                "Drone neighbourhood coverage",
                "Content made for social media",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4"
                >
                  <CheckCircle size={20} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                Book your next listing shoot.
              </h2>
              <p className="mt-5 max-w-lg leading-8 text-neutral-300">
                Send the property address, square footage, and ideal shoot date.
                All pricing includes HDR photos, drone photos, drone video,
                house video, and a floor plan.
              </p>

              <div className="mt-8 space-y-4 text-neutral-300">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="mt-1 shrink-0" />
                  <div>
                    <p>647 818 8649</p>
                    <p>416 702 5809</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} /> stjpgstudio@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} /> Toronto, Richmond Hill, Markham & GTA
                </div>
              </div>
            </div>

            <form
              onSubmit={handleQuoteSubmit}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="grid gap-4">
                <input
                  name="name"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-white/40"
                  placeholder="Your name"
                />
                <input
                  name="contact"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-white/40"
                  placeholder="Email or phone"
                />
                <input
                  name="address"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-white/40"
                  placeholder="Property address"
                />
                <input
                  name="sqft"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-white/40"
                  placeholder="House size in sq ft, example: 2,100"
                />
                <select
                  name="packageRange"
                  className="rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-white/40"
                >
                  <option>Up to 1,500 sq ft - $200</option>
                  <option>1,501 - 2,500 sq ft - $250</option>
                  <option>2,501 - 3,500 sq ft - $300</option>
                  <option>3,501 - 4,500 sq ft - $350</option>
                  <option>4,501 - 5,500 sq ft - $400</option>
                  <option>5,501+ sq ft - Custom Quote</option>
                </select>
                <textarea
                  name="message"
                  className="min-h-32 rounded-2xl border border-white/10 bg-neutral-900 px-4 py-4 text-white outline-none focus:border-white/40"
                  placeholder="Tell us about the listing"
                />
                {state.succeeded ? (
                  <div className="rounded-2xl border border-green-400/30 bg-green-400/10 px-4 py-4 text-green-200">
                    Quote request sent. We’ll get back to you soon.
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="rounded-full bg-white px-6 py-4 font-bold text-neutral-950 transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {state.submitting ? "Sending..." : "Request Quote"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-neutral-400 md:flex-row">
          <p>© 2026 STJPG. All rights reserved.</p>
          <p>
            Real estate photography, drone media, and listing videos for the
            GTA.
          </p>
        </div>
      </footer>
    </div>
  );
}