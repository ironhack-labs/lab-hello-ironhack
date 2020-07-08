import React from "react"
import Title from "./Title";
import Image from "./Image";
import Paragraph from "./Paragraph";
import AwButton from "./AwButton";

export default function SectionTop() {
    const title = ["Say hello to", "ReactJS"];
    
    const paragraph = [
      "You will learn a Frontend",
      "framweork from scratch, to",
      "become an Ninja Developer",
    ];
    
    return (
        <section id="top">
          <nav className="nav">
            <Image image="/images/ironhack-logo.svg" />
            <Image image="/images/menu-top.svg" />
          </nav>
          <article id="text-zone">
            <div>
              {title.map((e) => (
                <Title text={e} cname="title-top" />
              ))}
            </div>
            <div>
              {paragraph.map((e) => (
                <Paragraph text={e} cname="p-top" />
              ))}
            </div>
            <AwButton cname="button-top" text="Awesome!" />
          </article>
        </section>
    )
}
