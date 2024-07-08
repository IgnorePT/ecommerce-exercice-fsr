import './App.css'
//import CategoriesGrid from './components/CategoriesGrid/CategoriesGrid'
import MainSlider from './components/MainSlider/MainSlider'
import NavBar from './components/NavBar/NavBar'
import PostsGrid from './components/PostsGrid/PostsGrid'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Section from './components/Section/Section'
import SectionTile from './components/SectionTitle/SectionTitle'

function App() {

  return (
    <>
      <NavBar />
      <MainSlider />
      {/* <Section>
        <CategoriesGrid />
      </Section> */}
      <Section>
        {/* Aqui vao os childrens */}
        <SectionTile
          title="BESTSELLER PRODUCTS"
          subtitle="Problems trying to resolve the conflict between"
          tagline="Featured Products"
        />
        <ProductGrid />
      </Section>
      <Section>
        {/* Aqui vao os childrens */}
        <SectionTile
          title="Featured Posts"
          subtitle="Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics "
          tagline="Practice Advice"
        />
        <PostsGrid />
      </Section>
    </>
  )
}

export default App
