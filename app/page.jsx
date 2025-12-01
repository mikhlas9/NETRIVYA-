import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import Features from "@/components/features"
import OutOfBoxFeatures from "@/components/out-of-box-features"
import Services from "@/components/services"
import WhyChoose from "@/components/why-choose"
import SMSTypes from "@/components/sms-types"
import AdvertisingSection from "@/components/advertising-section"
import Advantages from "@/components/advantages"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <OutOfBoxFeatures />
      <SMSTypes />
      <Advantages />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
