import  React from 'react';

const caseStudies = [
  {
    id: 1, 
    subtitle: "WEB", 
    title: "Complexland 2.0",
    agency: "Jam3",
    date: "2021",
    img: 'complex'
  },{
    id: 2, 
    subtitle: "UI / MOTION", 
    title: "One Time in New Orleans",
    agency: "Jam3",
    date: "2021",
    img: 'nola'
  },{
    id: 3, 
    subtitle: "PRODUCT", 
    title: "Ciroc x Stussy",
    agency: "Jam3",
    date: "2021",
    img: 'adidas'
  },{
    id: 4, 
    subtitle: "WEB DESIGN", 
    title: "FACEBOOK BRAND GUIDELINES",
    agency: "Jam3",
    date: "2021",
    img: 'curology-min'
  }
];

const Cases = () => {
    return(
      <section className="cases">
          <div className="container">

          <div className="row">
              {caseStudies.map((caseItem) =>(
                <div className="case" key={caseItem.id}>
                    <div className="case-details">
                    <h2>{caseItem.title}</h2> 
                    <span>{caseItem.id}</span>
                    <span>(ROLE)</span>
                    <span>{caseItem.subtitle}</span>
                    <span>(AGENCY)</span>
                    <span>{caseItem.agency}</span>
                    <span>(YEAR)</span>
                    <span>{caseItem.date}</span>
                      
                    </div>
                    <div className="case-image">
                      <img src={require(`../assets/${caseItem.img}.png`)} alt="" />
                    </div>
                </div>
              ))}
            </div>
          </div>

      </section>  
    );
}

export default Cases;