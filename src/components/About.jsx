import ParaContainer from "./aboutSection/ParaContainer";

// About MayflyOasis
const About = () => {
  return (
    // Container for about section -- updated to fixed position to allow for navbar separation
    <div className="text-gray-800 
                  md:p-8 
                  lg:p-16 
                  flex 
                  flex-col
                  w-screen 
                  m-20 
                  absolute
                  p-20
                  gap-10 overflow-auto">

      {/* About us title */}
      <p className="mb-4 
                  text-4xl 
                  font-semibold">
              Hello Mayflies!
      </p>

      {/* Text containers, takes text values as props */}
      <ParaContainer text={"Welcome"} />
      <ParaContainer text={"About"} />
      <ParaContainer text={"Our Mission"} />
      
    </div>
  )
}

export default About;