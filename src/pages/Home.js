import React from 'react'
import ComingSoon from '../components/ComingSoon';
import HeroSection from '../components/HeroSection';
import ProductSlider from '../components/ProductSlider';
import SearchField from "../components/SearchField";

const Home = () => {
  return (
    <div>
    <SearchField />
    <HeroSection />
    <ComingSoon />
    <ProductSlider />
    </div>
  )
}

export default Home