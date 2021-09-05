import  React from 'react';

const caseStudies = [
  {
    id: 1, 
    subtitle: "WEB DESIGN / 3D", 
    title: "Complexland 2.0",
    agency: "Jam3",
    date: "2021",
    img: 'complex',
    img2: 'complex-2'
  },{
    id: 2, 
    subtitle: "UI / MOTION", 
    title: "One Time in New Orleans",
    agency: "Jam3",
    date: "2021",
    img: 'nola',
    img2: 'nola-2'
  },{
    id: 3, 
    subtitle: "PRODUCT", 
    title: "Ciroc x Stussy",
    agency: "Jam3",
    date: "2021",
    img: 'adidas',
    img2: 'adidas'
  },{
    id: 4, 
    subtitle: "WEB DESIGN", 
    title: "FACEBOOK BRAND GUIDELINES",
    agency: "Jam3",
    date: "2021",
    img: 'curology-min',
    img2: 'adidas'
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

                      <div className=" norow v-center space-between">
                        <div className="iz">
                           <span>{caseItem.id}</span>
                        </div>

                        <div className="der">
                          <span> <div  className="sub">(ROLE)</div> {caseItem.subtitle}</span>
                          <span> <div className="sub">(AGENCY)</div> {caseItem.agency}</span>
                          <span> <div className="sub">(YEAR)</div> {caseItem.date}</span>
                        </div>
                      </div>
                      
                    </div>
                    <div className="case-image">
                      <img src={require(`../assets/${caseItem.img}.png`)} alt="" />
                      <img src={require(`../assets/${caseItem.img2}.png`)} alt="" />
                    </div>
                </div>
              ))}
            </div>
          </div>

      </section>  
    );
}

export default Cases;