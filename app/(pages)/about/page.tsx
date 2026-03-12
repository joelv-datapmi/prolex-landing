import { div } from "framer-motion/client"

export default function AboutPage() {
    return (
        <div>
        <div className=" flex flex-col items-center justify-center gap-2 bg-[#F6F6F6] w-full h-80 ">
            <h1 className="text-black font-semibold text-5xl"><span className="text-[#1A237E]">About </span>Prolex.Ai</h1>
            <p className="text-[#8C8C8C] text-lg font-lg">
                Transforming legal practice management with AI-powered innovation
            </p>
        </div>
        <div  className="border border-gray-300 rounded-2xl  h-150 w-auto ">
            <div>
             <img src="" alt="" />
            </div>

            <div>
              <div>
                <p>Transforming Legal Practice Management with AI-Powered Innovation</p>
              </div>
              <div>
                Prolex.ai was created to modernize legal operations without compromising professional judgment. We believe that technology should reduce friction,
                 not replace expertise In a profession where accuracy, confidentiality, and accountability define success, 
                 we built Prolex as a structured legal operating system — powered by governed AI and designed for real-world court workflows.
              </div>
              <div>
                <ul >
                <li>Human-guided AI — never autonomous decision-making</li>
                <li>AI That Works in the Background</li>
                <li>Designed for Speed and Focus</li>
                <li>Security, Control, and Accountability</li>
                <li>Evolving With the Legal Profession</li>
                <li>Built for Indian legal systems with global standards</li>
                </ul>
              </div>
            </div>
        </div>
        </div>
    )
}
