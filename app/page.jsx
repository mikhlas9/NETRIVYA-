import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import Features from "@/components/features"
import OutOfBoxFeatures from "@/components/out-of-box-features"
import SMSTypes from "@/components/sms-types"
import Advantages from "@/components/advantages"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import WhySms from "../components/whySms"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      {/* <TrustedBy /> */}
      <Features />
      <WhySms />
      <OutOfBoxFeatures />
      <SMSTypes />
      <Advantages />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
