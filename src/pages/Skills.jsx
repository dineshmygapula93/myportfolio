import React from 'react';

// Sample data for skills
const skillsData = {
  frontend: [
    { name: 'HTML', icon: '/HTML5.svg' },
    { name: 'CSS', icon: '/CSS3.svg' },
    { name: 'JavaScrpit', icon: '/JavaScript.svg' },
    { name: 'TypeScrpit', icon: '/TypeScript.svg' },
    { name: 'Bootsrap', icon: '/Bootstrap.svg' },
    { name: 'React', icon: 'React.svg' },
    { name: 'Angular', icon: 'Angular.svg' },
    { name: 'Tailwind', icon: 'Tailwind-CSS.svg' },
    { name: 'Vite', icon: 'vite.svg' },
    { name: 'SASS', icon: 'Sass.svg' },
  ],
  'backend Programming Languages/Frameworks': [
    { name: 'JavaSE', icon: '\Java.svg' },
    { name: 'JavaEE', icon: 'Jakarta_ee.svg' },
    { name:"Spring", icon :'spring.png'},
    { name:"SpringBoot", icon :'springboot.png'},
    { name:"RestAPi", icon :'restapi.png'},
    { name:"Microservices", icon :'microservices.png'},
   
  ],
  'databases/Cloud/HostingPlatform/Servers': [
    { name: 'Oracle', icon: 'Oracle.svg' },
    { name: 'SQL', icon: 'SQL-Developer.svg' },
    { name: 'MySql', icon: 'MySQL.svg' },
    { name: 'MongoDB', icon: 'MongoDB.svg' },
    { name: 'FireBase', icon: 'Firebase.svg' },
    {name:'Redis',icon: 'Redis.svg'},
    { name: 'AWS', icon: 'AWS.svg' },
    { name: 'Vercel', icon: 'Vercel.svg' },
    { name: 'Netlify ', icon: 'netlify.png' },
     { name: 'Apache-Tomcat', icon: 'Apache-Tomcat.svg' }
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
  'tools/IDE': [
    { name: 'Git', icon: 'Git.svg' },
    { name: 'GitHub', icon: 'GitHub.svg' },
    { name: 'VS Code', icon: 'Visual-Studio-Code-(VS-Code).svg' },
    { name: 'Eclipse', icon: 'Eclipse-IDE.svg' },
    { name: 'SpringToolSuite', icon: 'spring-tool.svg' },
    { name: 'IntelliJ', icon: 'IntelliJ-IDEA.svg' },
    { name: 'Lombok', icon: 'lombok.png'},
    { name: 'JSON', icon: 'JSON.svg' },
    { name: 'XML', icon: 'XML.svg' },
    { name: 'GraphQL', icon: 'GraphQL.svg' },
    { name: 'Postman', icon: 'Postman.svg' },
    { name: 'Swagger UI', icon: 'Swagger.svg' },
    { name: 'Jira', icon: 'Jira.svg' },
    { name: 'SonarQube', icon: 'SonarQube.svg' },
    { name: 'Jacoco', icon: 'jacoco.webp' },
    { name: 'Maven', icon: 'Apache-Maven.svg' },
    { name: 'Gradle', icon: 'Gradle.svg' },
    { name: 'JUnit', icon: 'JUnit.svg' },
    { name: 'Mockito', icon: 'mockito.png' },
    { name: 'Jmeter', icon: 'jmeter.png' },
    { name: 'Docker', icon: 'Docker.svg' },
    { name: 'Jenkins', icon: 'Jenkins.svg' },
    { name: 'Kubernetes', icon: 'Kubernetes.svg' },
    { name: 'Log4J', icon: 'log4j.png'},
    { name: 'SLF4J', icon: 'SLF4J_Logo.jpg'},
    { name: 'ElasticSearch', icon: 'Elastic-Search.svg'},
    { name: 'LogStash', icon: 'Logstash.svg'},
    { name: 'Kibana', icon: 'Kibana.svg'},
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