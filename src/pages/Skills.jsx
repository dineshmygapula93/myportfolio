import React from 'react';

// Sample data for skills
const skillsData = {
  frontend: [
    { name: 'HTML', icon: '/HTML5.svg' },
    { name: 'CSS', icon: '/CSS3.svg' },
    { name: 'JavaScrpit', icon: '/JavaScript.svg' },
    { name: 'Bootsrap', icon: '/Bootstrap.svg' },
    { name: 'React', icon: 'React.svg' },
    { name: 'Tailwind', icon: 'Tailwind-CSS.svg' },
    { name: 'Vite', icon: 'vite.svg' },
    { name: 'SASS', icon: 'Sass.svg' },
  ],
  'backend Programming Languages/Servers': [
    { name: 'C', icon: '\C.svg' },
    { name: 'JavaSE', icon: '\Java.svg' },
    { name: 'JavaEE', icon: 'Jakarta_ee.svg' },
    { name: 'Python', icon: 'Python.svg' },
    { name: 'Apache-Tomcat', icon: 'Apache-Tomcat.svg' },
  ],
  'databases/Cloud/HostingPlatform': [
    { name: 'Oracle', icon: 'Oracle.svg' },
    { name: 'SQL', icon: 'SQL-Developer.svg' },
    { name: 'MySql', icon: 'MySQL.svg' },
    { name: 'MongoDB', icon: 'MongoDB.svg' },
    { name: 'FireBase', icon: 'Firebase.svg' },
    { name: 'AWS', icon: 'AWS.svg' },
    { name: 'Vercel', icon: 'Vercel.svg' },
  ],
 'tools/IDE': [
    { name: 'Git', icon: 'Git.svg' },
    { name: 'GitHub', icon: 'GitHub.svg' },
    { name: 'VS Code', icon: 'Visual-Studio-Code-(VS-Code).svg' },
    { name: 'Eclipse', icon: 'Eclipse-IDE.svg' },
    { name: 'JSON', icon: 'JSON.svg' },
    { name: 'XML', icon: 'XML.svg' },
    { name: 'Maven', icon: 'Apache-Maven.svg' },
    { name: 'JUnit', icon: 'JUnit.svg' },
    { name: 'NPM', icon: 'NPM.svg' },
    { name: 'UML', icon: 'Unified-Modelling-Language-(UML).svg' },
  ],
};

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center p-2 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
    <img src={skill.icon} alt={skill.name} className="h-8 w-8 mb-1" />
    <h3 className="text-sm font-semibold">{skill.name}</h3>
  </div>
);

const SkillsSection = () => {
  return (
    <div className="container mx-auto p-2"> {/* Reduced padding from p-6 to p-4 */}
      <h2 className="text-3xl font-bold text-center mb-1">My Skills</h2> {/* Reduced margin from mb-8 to mb-6 */}
      <div className="space-y-4"> {/* Reduced space between categories */}
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-1">{category.charAt(0).toUpperCase() + category.slice(1)}</h3> 
            <div className="flex flex-wrap gap-4 mb-4 ">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;   