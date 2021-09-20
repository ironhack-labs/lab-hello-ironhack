import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header'
import Card from './components/Card/Card'

import { data } from './components/Data/Data'

function App() {
  return (
    <>
      <Header />
      <Banner
        title='Say hello to ReactJS'
        subtitle="You will learn how to use the most popular frontend library, and become a super Ninja developer"
      />
      <div className="container-card">

        {/* <Card
          cardImage={icon1}
          title="Declarative"
          description="React makes it painless to create interative UIs."
        />
        <Card
          cardImage={icon1}
          title="Declarative"
          description=
          "React makes it painless to create interative UIs."
        />
        <Card
          cardImage={icon1}
          title="Declarative"
          description="React makes it painless to create interative UIs."
        />
        <Card
          cardImage={icon1}
          title="Declarative"
          description="React makes it painless to create interative UIs."
        /> */}

        {
          data.map(({ image, title, subtitle }) => {
            return (
              <Card
                className="card"
                cardImage={image}
                title={title}
                description={subtitle}
              />
            )
          })
        }

      </div>
    </>
  );
}

export default App;
