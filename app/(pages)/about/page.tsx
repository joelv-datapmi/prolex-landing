import { div } from "framer-motion/client"
import Image from "next/image";
import { CircleDotDashed } from 'lucide-react';
import { Heart } from 'lucide-react';
import { House } from 'lucide-react';
import { MessageSquareCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-2 bg-[#F6F6F6] w-full h-80 ">
        <h1 className="text-black font-semibold text-5xl"><span className="text-[#1A237E]">About </span>Prolex.Ai</h1>
        <p className="text-[#8C8C8C] text-lg font-lg">
          Transforming legal practice management with AI-powered innovation
        </p>
      </div>
      <div className="border border-gray-300 rounded-2xl h-150 max-w-7xl mx-auto px-6 ">
        <div className="flex flex-row">
          <div>
            <Image
              src="/image-1.avif"
              alt="firstimg"
              width={500}
              height={400}
            />
          </div>

          <div className="space-y-6">
            <div className="text-[#050506] font-semibold text-[22px]">
              <p>Transforming Legal Practice Management with AI-Powered Innovation</p>
            </div>

            <div className="text-[#797979] font-normal text-[16px]">
              Prolex.ai was created to modernize legal operations without compromising professional judgment. We believe that technology should reduce friction,
              not replace expertise In a profession where accuracy, confidentiality, and accountability define success,
              we built Prolex as a structured legal operating system — powered by governed AI and designed for real-world court workflows.
            </div>

            <div className="text-[#050506] text-lg " >
              <ul className="list-disc pl-6 space-y-2">
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

      <div className=" flex flex-col items-center justify-center text-center gap-2 bg-[#F6F6F6] w-full h-100 space-y-2">
        <div className="rounded-full border border-[#1A237E] bg-[#E1EAF8] text-[#1A237E] px-2 py-1 font-xl text-[14px]">
          <p>purposes</p>
        </div>
        <h1 className="text-black font-semibold text-[38px]">Why We<br /> Built Prolex.ai</h1>
        <p className="text-[#777777] font-lg text-[16px]">
          Prolex.ai was founded with a singular<br /> vision: to revolutionize how legal<br /> professionals manage their practice<br /> through the power of artificial intelligence.
        </p>
      </div>

      <div className="bg-[#F6F6F6]">
        <div className="bg-[#FFFFFF] h-auto max-w-7xl mx-auto px-6 py-4" >
          <div className=" flex flex-col items-center justify-center text-center gap-2  w-full h-100 ">
            <div className="rounded-full border border-[#1A237E] bg-[#E1EAF8] text-[#1F2881] px-2 py-1 font-xl text-[14px]">
              <p>Values</p>
            </div>
            <h1 className="text-black font-semibold text-[38px]">Our Core Values</h1>
            <p className="text-[#797979] font-lg text-[16px]">
              Technology in law must be intelligent,<br />
              accountable, and secure. These<br />
              principles guide everything we build.
            </p>
          </div>


          <div className="grid grid-cols-3 gap-8 ">

            <div className="bg-[#F5F5F5] border border-[#E4E4E4] h-80 w-90  p-8 rounded-2xl space-y-2">
              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold">Mission-Driven</h2>
                <p className="text-[16px] text-[#575757]">Empowering legal professionals with
                  cutting-edge AI technology to deliver
                  justice efficiently and effectively</p>
              </div>
              <div className="bg-[#FFFFFF] rounded-lg shadow-lg h-30 w-60">
                <div className="p-3 space-y-3">
                  <div className="flex justify-around">
                    <CircleDotDashed />
                    <h3 className="text-[#000000] text-[15px] font-semibold ">Mission-Driven</h3>
                  </div>
                  <p className="text-[#838DA4] text-[13px]">Empowering legal professionals with AI to deliver justice efficiently</p>
                  <p className="bg-[#EEF2FE] text-[#5046E5] rounded-full font-semibold text-xs">Justice.Efficiency.Impact</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border border-[#E4E4E4] h-80 w-90  p-8 rounded-2xl space-y-2">

              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold" >Client-Centric</h2>
                <p className="text-[16px] text-[#575757]">Building solutions that address
                  real challenges faced by lawyers
                  and law firms in their daily practice</p>
              </div>
              <div className="bg-[#FFFFFF] rounded-lg shadow-lg h-30 w-60">
                <div className="p-3 space-y-3">
                  <div className="flex justify-around">
                    <Heart />
                    <h3 className="text-[#000000] text-[15px] font-semibold ">Client-Centric</h3>
                  </div>
                  <p className="text-[#838DA4] text-[13px]">Building solution for real
                    challenges faced by lawyers daily.
                  </p>
                  <p className="bg-[#FFF0F3] text-[#C22865] rounded-full font-semibold text-xs">Lawyer-first design</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F5F5] border border-[#E4E4E4] h-80 w-90  p-8 rounded-2xl">

              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold">Built for Real Legal Work</h2>
                <p className="text-[16px] text-[#575757]">Designed for hearings, deadlines, filings, and
                  court workflows — not generic office tasks.</p>
              </div>
              <div className="bg-[#FFFFFF] rounded-lg shadow-lg h-30 w-60 ">
                <div className="p-3 space-y-3">
                  <div className="flex justify-around">
                    <House />
                    <h3 className="text-[#000000] text-[15px] font-semibold ">Built for Real Legal Work</h3>
                  </div>
                  <p className="text-[#838DA4] text-[13px]">Designed for hearings,filings,and court workflows-not
                    generic tasks.
                  </p>
                  <p className="bg-[#FEFBEA] text-[#DD7F0C] rounded-full font-semibold text-xs" >Court-ready workflows</p>

                </div>
              </div>
            </div>
          </div>




          <div className="p-3">

            <div className="flex flex-col-2 gap-2 bg-[#F5F5F5] border border-[#E4E4E4] h-70 w-120  p-8 rounded-2xl">
              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold">Context Over Guesswork</h2>
                <p className="text-[16px] text-[#575757]">
                  AI suggestions are grounded in case data and selected documents — never generic output.</p>
              </div>
              <div className="bg-[#FFFFFF] rounded-lg shadow-lg h-40 w-100 ">
                <div className="p-2 space-y-3">
                  <div className="flex justify-around gap-2">
                    <MessageSquareCheck />
                    <h3 className="text-[#000000] text-[15px] font-semibold ">Context Over Guesswork</h3>
                  </div>
                  <p className="text-[#838DA4] text-[13px]">
                    AI grounded in case data,never generic or hallucinated output.
                  </p>
                  <p className="bg-[#F0FDFB] text-[#0F9791] rounded-full font-semibold text-xs" >Context-grounded AI</p>

                </div>
              </div>
            </div>

            <div className="flex flex-col-2 gap-2 bg-[#F5F5F5] border border-[#E4E4E4] h-70 w-120  p-8 rounded-2xl">
              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold">Growth Through Clarity</h2>
                <p className="text-[16px] text-[#575757]">
                 Operational insights,Case-insights, analytics, AI usage visibility — helping firms scale responsibly.</p>
              </div>
              <div className="bg-[#FFFFFF] rounded-lg shadow-lg h-40 w-100 ">
                <div className="p-2 space-y-3">
                  <div className="flex justify-around gap-2">
                    <MessageSquareCheck />
                    <h3 className="text-[#000000] text-[15px] font-semibold ">Growth Through Clarity</h3>
                  </div>
                  <p className="text-[#838DA4] text-[13px]">
                    Operational analytics and AI usage visibility help firms scale responsibly.
                  </p>
                  <p className="bg-[#F0FDFB] text-[#0F9791] rounded-full font-semibold text-xs" >Data-driven growth</p>

                </div>
              </div>
            </div>

            


          </div>

        </div>
      </div>


    </div>
  )
}
