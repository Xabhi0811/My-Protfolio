import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            
            <GlowCard card={testimonial} key={index} index={index}>
              <div className=" items-center gap-3">
                <div>
                  <img src={testimonial.imgPath}   alt="" />
                  
                </div>
                <div className="flex items-center gap-2" >
                  <p className="font-bold">{testimonial.name}</p>
                   <img src={testimonial.sideImg} alt="flag" 
                   className="  w-6 h-6 object-contain"  />
                 
                </div>
                
                 <p className="text-white-50">{testimonial.mentions}</p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
