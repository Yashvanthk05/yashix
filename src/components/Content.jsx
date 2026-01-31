import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Certification from './Certification';
import Achievements from './Achievements';

const Content = () => {
  return (
    <div id="content">
      <About />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr/>
      <Certification/>
      <hr/>
      <Achievements/>
    </div>
  );
};

export default Content;
