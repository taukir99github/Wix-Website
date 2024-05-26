import React from "react";
import Section from "../Components/Section";

const Section2 = () => {  
  return (
    <div className="w-full min-h-screen flex  flex-col md:flex-row justify-center items-center py-6 md:p-6 gap-8">
      <Section
        heading="SERVICES"
        para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        text="More Info"
      />
      <Section
        heading="PROJECTS"
        para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        text="More Info"
      />
      <Section
        heading="CLIENTS"
        para="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
        text="More Info"
      />
    </div>
  );
};

export default Section2;
