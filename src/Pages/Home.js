import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import ProvideSection from "../Components/Home/ProvideSection";
import MaxComf from "../Components/Home/MaxComf";
import Premium from "../Components/Home/Premium";
import PicInOffer from "../Components/Home/PicInOffer";
import ChauferSec from "../Components/Home/ChauferSec";
import ExpStats from "../Components/Home/ExpStats";
import Variety from "../Components/Home/Variety";
import ReviewsBox from "../Components/Home/ReviewsBox";
import Lady from "../Components/Home/Lady";
import NavBar from "../Components/Shared/NavBar";
import HeroPorche from "../Components/Home/HeroPorche";
import Footer from "../Components/Shared/Footer";
import RollsRoyce from "../Components/Home/RollsRoyce";
export default function Home() {
  return (
    <div data-aos="fade-right">
      {/* HEROSECTION INCLUDING NAVBAR */}
      <HeroSection />
      {/* DETAILs */}
      <ProvideSection />
      <MaxComf
        heading="Ride To Destinations With Maximum Comfort"
        delayHead="No Delays"
        prem="Premium Support"
        quality="High Quality"
        diverse="A Diverse Selection"
      />
      <Premium />
      <PicInOffer />
      <ChauferSec />
      {/* <RollsRoyce /> */}
      <ExpStats />
      <Variety />
      <Lady />
      <ReviewsBox />
      <HeroPorche />

      {/* will be change */}
      <Footer />
    </div>
  );
}
