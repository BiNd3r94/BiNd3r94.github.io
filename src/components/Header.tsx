import {Carousel} from "primereact/carousel";
import {Image} from "primereact/image";
import {MainNavigation} from "./MainNavigation";
import React from "react";


export const Header = () => {
  const itemTemplate = (item: any) => {
    return (
        <div className={"header-image"}>
          <Image src={item.image} width="100%"/>
          <div className={"header-content-container"}>
            <div className={"header-content"}>
              <div className={"header-content-text"}>
                <h1>Praxis für klassische Homöopathie</h1>
                <p><b>Herzlich Willkommen auf der Webseite der Praxis für Klassische Homöopathie von
                  Simone Binder!</b></p>
              </div>
            </div>
          </div>
        </div>
    )
  }

  return (
      <header>
        <div className={"header"}>
          <Carousel
              value={carouselItems}
              itemTemplate={itemTemplate}
              showNavigators={false}
              showIndicators={false}/>
          <MainNavigation/>
        </div>
      </header>
  )

}

const carouselItems: CarouselItem[] = [
  {
    image: "/nature_horizontal.jpg"
  }
]

type CarouselItem = {
  image: string
}