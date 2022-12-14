import LocationCard from '../components/LocationCard';
import { MESSAGES } from '../constants/messages';
import './styles.scss';

const Home = () => {
  return (
    <main className="main">
      <section className="banner"></section>
      <section className="content">
        <h2 className="header content-header">{MESSAGES.h1}</h2>
        <p>{MESSAGES.m1}</p>
        <hr />
      </section>
      <h2 className="header">{MESSAGES.h2}</h2>
      <section className="articles">
        <article className="map-cards">
          <div className="map-card">
            <LocationCard />
          </div>
          <div className="map-card">
            <LocationCard />
          </div>
          <div className="map-card">
            <LocationCard />
          </div>
          <div className="map-card">
            <LocationCard />
          </div>
        </article>
      </section>
    </main>
  )
}

export default Home;