import homeHeroesStyles from '../../styles/homepage/HomeHeroes.module.css'
import Image from 'next/image'


const HomeHeroes = () => {

  return (
    <div className={homeHeroesStyles.heroContainer}>
      <div className={homeHeroesStyles.heroGrid}>
        <div className={`${homeHeroesStyles.heroImage} ${homeHeroesStyles.heroImageLeft}`}>
          <Image src={"/holiday-pass.jpeg"} width={300} height={300} layout="responsive" />
        </div>
        <div className={`${homeHeroesStyles.heroImage} ${homeHeroesStyles.heroImageCenter}`}>
          <Image src={"/disneyland-castle.jpeg"} width={300} height={300} layout="responsive" />
        </div>
        <div className={`${homeHeroesStyles.heroImage} ${homeHeroesStyles.heroImageRight}`}>
          <Image src={"/nightmare-before-xmas.jpeg"} width={300} height={300} layout="responsive" />
        </div>
      </div>
    </div>
  )
}

export default HomeHeroes
