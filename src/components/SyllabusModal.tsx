import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SyllabusModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SyllabusModal = ({ open, onOpenChange }: SyllabusModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gradient">
            Full Stack Development Syllabus
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[70vh] pr-4">
          <div className="space-y-6">
            {/* Course Info */}
            <div className="space-y-2">
              <p><strong>Course Title:</strong> Full Stack Development</p>
              <p><strong>Duration:</strong> 6 Months</p>
              <p><strong>Instructor:</strong> [Instructor Name & Contact]</p>
              <p><strong>Platform:</strong> [Platform/Institution]</p>
            </div>

            {/* Course Objectives */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Course Objectives</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Build strong foundations in web technologies (HTML, CSS, JavaScript).</li>
                <li>Master front-end frameworks (React, Angular, or Vue).</li>
                <li>Learn server-side development with Node.js, Express, or Python/PHP.</li>
                <li>Gain proficiency in working with both SQL & NoSQL databases.</li>
                <li>Understand version control, deployment, and scalability.</li>
                <li>Develop problem-solving skills with Data Structures & Algorithms.</li>
                <li>Complete a capstone project to demonstrate end-to-end development skills.</li>
                <li>Prepare for technical interviews and real-world developer roles.</li>
              </ul>
            </div>

            {/* Modules */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Modules</h3>
              <div className="space-y-4">
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">1. HTML5 and CSS3</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Basics of HTML structure & semantic tags</li>
                    <li>Forms, inputs, and validation</li>
                    <li>CSS selectors, colors, typography, and units</li>
                    <li>Box model, positioning, flexbox, and grid</li>
                    <li>Responsive design with media queries</li>
                    <li>CSS animations and transitions</li>
                    <li>Intro to CSS frameworks (Bootstrap/Tailwind CSS)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">2. JavaScript Basics</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Variables, data types, operators</li>
                    <li>Control structures (if, switch, loops)</li>
                    <li>Functions, scope, and closures</li>
                    <li>DOM manipulation and events</li>
                    <li>Browser APIs (localStorage, fetch API)</li>
                    <li>Debugging with console & DevTools</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">3. Advanced JavaScript & Frameworks</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>ES6+ features (let, const, arrow functions, promises, async/await)</li>
                    <li>Object-oriented JavaScript & prototypes</li>
                    <li>Modules and imports/exports</li>
                    <li>Error handling & exception management</li>
                    <li>Functional programming basics</li>
                    <li>State management concepts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">4. Front-End Frameworks (React, Angular, Vue)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Introduction to SPA (Single Page Applications)</li>
                    <li>React: components, props, state, hooks, context API</li>
                    <li>Angular: components, directives, services, dependency injection</li>
                    <li>Vue: directives, components, reactivity, Vue Router</li>
                    <li>State management libraries (Redux, Vuex, NgRx)</li>
                    <li>Routing, forms, and API integration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">5. Version Control (Git & GitHub)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Git basics: init, clone, add, commit, push, pull</li>
                    <li>Branching, merging, conflict resolution</li>
                    <li>GitHub workflows & pull requests</li>
                    <li>Collaborative development with teams</li>
                    <li>Git best practices</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">6. Data Structures & Algorithms</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Arrays, strings, linked lists</li>
                    <li>Stacks, queues, hash tables</li>
                    <li>Trees, graphs, heaps</li>
                    <li>Sorting & searching algorithms</li>
                    <li>Time & space complexity analysis (Big-O notation)</li>
                    <li>Problem-solving with LeetCode/HackerRank style exercises</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">7. Back-End Development (Node.js, Express, Python, PHP)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Introduction to server-side programming</li>
                    <li>Node.js: event loop, modules, npm</li>
                    <li>Express.js: middleware, routing, REST APIs</li>
                    <li>Authentication & authorization (JWT, OAuth)</li>
                    <li>Python/Django/Flask or PHP basics (optional track)</li>
                    <li>Error handling & security best practices</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">8. Databases (SQL & NoSQL)</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Relational databases (MySQL/PostgreSQL)</li>
                    <li>CRUD operations, joins, indexing</li>
                    <li>Database design & normalization</li>
                    <li>NoSQL databases (MongoDB, Firebase)</li>
                    <li>Querying & aggregation</li>
                    <li>ORM/ODM (Sequelize, Mongoose)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">9. Full Stack Integration</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Connecting front-end to back-end APIs</li>
                    <li>State management with server data</li>
                    <li>Authentication & session management</li>
                    <li>Building a RESTful API-driven application</li>
                    <li>Real-time communication with WebSockets</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">10. DevOps & Deployment</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Introduction to DevOps culture</li>
                    <li>CI/CD pipelines basics (GitHub Actions, Jenkins)</li>
                    <li>Containerization with Docker</li>
                    <li>Cloud services (AWS, Azure, GCP, Vercel, Netlify)</li>
                    <li>Deployment strategies & scaling applications</li>
                    <li>Monitoring & logging</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">11. System Design & Scalability</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Fundamentals of system design</li>
                    <li>Monolithic vs. microservices architecture</li>
                    <li>Load balancing & caching strategies</li>
                    <li>Database sharding & replication</li>
                    <li>Designing scalable APIs</li>
                    <li>Case studies (e.g., designing Twitter, Netflix, or Uber)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">12. Capstone Project & Interview Preparation</h4>
                  <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                    <li>Full-scale project combining all modules</li>
                    <li>Real-world use case (e-commerce app, social media app, or SaaS tool)</li>
                    <li>GitHub portfolio setup</li>
                    <li>Resume & LinkedIn optimization for developers</li>
                    <li>Mock technical interviews & coding challenges</li>
                    <li>Soft skills & teamwork training</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Extra Sections */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Extra Sections</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>Grading Policy:</strong> Assignments (30%), Quizzes (20%), Capstone Project (30%), Final Exam (20%)</li>
                <li><strong>Required Materials:</strong> Laptop, IDE (VS Code), GitHub account, internet connection</li>
                <li><strong>Schedule:</strong> 10–12 hours per week (flexible)</li>
                <li><strong>Policies:</strong> Attendance, plagiarism, deadlines</li>
                <li><strong>Instructor Contact:</strong> [Add Email/Slack/Discord]</li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default SyllabusModal;