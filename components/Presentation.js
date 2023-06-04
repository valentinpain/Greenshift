export default function Presentation({title, imgPresentation,paragraphs})
{
    return(
      <section id={"presentation"} className={"px-10 md:px-28 py-10 font-outfit"}>
          <h1 className={"text-center text-5xl font-outfit py-10"}>{title}</h1>
          <div className={"grid md:grid-cols-2 gap-5"}>
              <div className={"place-content-center place-self-center grid gap-y-4 max-w-xl md:ml-auto "}>
                  {paragraphs.map(function(paragraph){
                      return(
                          <p key={paragraph.id}>{paragraph.text}</p>
                      )
                  })}
              </div>
              <div className={"place-self-center"}>
                  <img src={imgPresentation} className={"h-80"}/>
              </div>
          </div>
      </section>
    );
}