"use client";
import Image from "next/image";
import { UserRound } from 'lucide-react';

import { m } from "framer-motion"

export default function AboutPage() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-2 bg-[#F6F6F6] w-full h-80 ">
        <h1 className="text-black font-semibold text-[56px]"><span className="text-[#1A237E]">About </span>Prolex.Ai</h1>
        <p className="text-[#8C8C8C] text-[16px] font-lg">
          Transforming legal practice management with AI-powered innovation
        </p>
      </div>
      <div className="border border-gray-300 rounded-2xl gap-5 h-150 max-w-7xl mx-auto px-6 py-10 ">
        <div className="flex flex-row p-4">
          <div className="w-1/2 ">
            <Image
              src="/image-1.avif"
              alt="firstimg"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div className=" w-1/2 space-y-6">
            <div className="text-[#050506] font-semibold text-[22px]">
              <p>Transforming Legal Practice Management with AI-Powered Innovation</p>
            </div>

            <div className="text-[#797979] font-normal text-[16px]">
              Prolex.ai was created to modernize legal operations without compromising professional judgment. We believe that technology should reduce friction,
              not replace expertise In a profession where accuracy, confidentiality, and accountability define success,
              we built Prolex as a structured legal operating system — powered by governed AI and designed for real-world court workflows.
            </div>

            <div className="text-[#050506] text-lg " >
              <ul className="list-disc pl-6 space-y-4">
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

<div className="overflow-hidden py-16 bg-[#F6F6F6]">
     <m.div
    className="flex gap-5"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }}
  >   
        {/* first set */}
        <div className="flex gap-4 border-1 border-[#E4E4E4] rounded-lg bg-[#F6F6F8] w-[850px] h-[450px] p-5 shrink-0">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-[#000000] text-[26px]">Solving Fragmented Legal Workflows</h2>
            <p className="text-[#575757] text-[16px]">Prolex.Ai thinks. While legacy platforms
              focus on administration, our AI-powered system actively assists in drafting,
              strategizing, and document generation. By automating repetitive tasks and providing data-driven insights,
              we eliminate the busywork so you can focus on winning cases and
              delivering elite legal service.</p>
          </div>
          <Image
            src="/img6.avif"
            alt="pic6"
            width={400}
            height={100}
          />
        </div>

       <div className="flex gap-4 border-1 border-[#E4E4E4] rounded-lg bg-[#F6F6F8] w-[850px] h-[450px]  p-5 shrink-0">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-[#000000] text-[26px]">The Value We Deliver</h2>
            <p className="text-[#575757] text-[16px]">
              We deliver controlled AI assistance, contextual drafting,
              and operational visibility — without sacrificing legal integrity.</p>
          </div>
          <Image
            src="/img7.avif"
            alt="pic7"
            width={400}
            height={100}
          />
        </div>

       <div className="flex gap-4 border-1 border-[#E4E4E4] rounded-lg bg-[#F6F6F8] w-[850px] h-[450px]  p-5 shrink-0">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-[#000000] text-[26px]">Efficiency Without Compromise</h2>
            <p className="text-[#575757] text-[16px]">Reduce repetitive drafting, automate hearing tracking,
              and streamline billing — while keeping full human review.</p>
          </div>
          <Image
            src="/img8.avif"
            alt="pic8"
            width={400}
            height={100}
          />
        </div>

        {/* duplicated set */}

       <div className="flex gap-4 border-1 border-[#E4E4E4] rounded-lg bg-[#F6F6F8] w-[850px] h-[450px]  p-5 shrink-0">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-[#000000] text-[26px]">Solving Fragmented Legal Workflows</h2>
            <p className="text-[#575757] text-[16px]">Prolex.Ai thinks. While legacy platforms
              focus on administration, our AI-powered system actively assists in drafting,
              strategizing, and document generation. By automating repetitive tasks and providing data-driven insights,
              we eliminate the busywork so you can focus on winning cases and
              delivering elite legal service.</p>
          </div>
          <Image
            src="/img6.avif"
            alt="pic6"
            width={400}
            height={100}
          />
        </div>

        
       <div className="flex gap-4 border-1 border-[#E4E4E4] rounded-lg bg-[#F6F6F8] w-[850px] h-[450px]  p-5 shrink-0">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-[#000000] text-[26px]">The Value We Deliver</h2>
            <p className="text-[#575757] text-[16px]">
              We deliver controlled AI assistance, contextual drafting,
              and operational visibility — without sacrificing legal integrity.</p>
          </div>
          <Image
            src="/img7.avif"
            alt="pic7"
            width={400}
            height={100}
          />
        </div>

        
       <div className="flex gap-4 border-1 border-[#E4E4E4] rounded-lg bg-[#F6F6F8]  w-[850px] h-[450px]  p-5 shrink-0">
          <div className="flex flex-col justify-center space-y-2">
            <h2 className="text-[#000000] text-[26px]">Efficiency Without Compromise</h2>
            <p className="text-[#575757] text-[16px]">Reduce repetitive drafting, automate hearing tracking,
              and streamline billing — while keeping full human review.</p>
          </div>
          <Image
            src="/img8.avif"
            alt="pic8"
            width={400}
            height={100}
          />
        </div>
      </m.div>
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
              <Image
                src="/img1.avif"
                alt="pic1"
                width={300}
                height={200}
              />
            </div>

            <div className="bg-[#F5F5F5] border border-[#E4E4E4] h-80 w-90  p-8 rounded-2xl space-y-2">

              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold" >Client-Centric</h2>
                <p className="text-[16px] text-[#575757]">Building solutions that address
                  real challenges faced by lawyers
                  and law firms in their daily practice</p>
              </div>
              <Image
                src="/img2.avif"
                alt="pic2"
                width={300}
                height={200}
              />
            </div>

            <div className="bg-[#F5F5F5] border border-[#E4E4E4] h-80 w-90  p-8 rounded-2xl">

              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold">Built for Real Legal Work</h2>
                <p className="text-[16px] text-[#575757]">Designed for hearings, deadlines, filings, and
                  court workflows — not generic office tasks.</p>
              </div>
              <Image
                src="/img3.avif"
                alt="pic3"
                width={300}
                height={200}
              />
            </div>
          </div>




          <div className="grid grid-cols-2 gap-4 p-3">

            <div className="flex flex-col-2 gap-2 bg-[#F5F5F5] border border-[#E4E4E4] h-70 w-120  p-8 rounded-2xl">
              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold">Context Over Guesswork</h2>
                <p className="text-[16px] text-[#575757]">
                  AI suggestions are grounded in case data and selected documents — never generic output.</p>
              </div>
              <Image
                src="/img4.avif"
                alt="pic4"
                width={250}
                height={80}
              />
            </div>

            <div className="flex flex-col-2 gap-2 bg-[#F5F5F5] border border-[#E4E4E4] h-70 w-120  p-8 rounded-2xl">
              <div>
                <h2 className="text-[22px] text-[#000000] font-semibold">Growth Through Clarity</h2>
                <p className="text-[16px] text-[#575757]">
                  Operational insights,Case-insights, analytics, AI usage visibility — helping firms scale responsibly.</p>
              </div>
              <Image
                src="/img5.avif"
                alt="pic5"
                width={250}
                height={80}
              />
            </div>

          </div>


          <div className=" flex flex-col items-center justify-center text-center gap-2  w-full h-100 ">
            <div className="rounded-full border border-[#1A237E] bg-[#E1EAF8] text-[#1F2881] px-2 py-1 font-xl text-[14px]">
              <p>Values</p>
            </div>
            <h1 className="text-black font-semibold text-[38px]">Who We Are</h1>
            <p className="text-[#797979] font-lg text-[16px]">
              We are legal technologists, system<br /> architects,
              and product thinkers committed<br />  to
              modernizing legal practice responsibly.
            </p>
          </div>


          <div className="flex flex-col-4 gap-3  ">
            <div className="border border-[#EDEDF0]-2 rounded-md w-[100%] h-[250] p-3 space-y-3">
              <UserRound color="#1A237E" className="fill-[#D1D3E5]" />
              <h4 className="text-20px text-[#000000]">Legal-First Thinkers</h4>
              <p className="text-16px text-[#575757]">Built with deep understanding of court-driven workflows and compliance sensitivity.</p>
            </div>

            <div className="border border-[#EDEDF0]-2 rounded-md w-[100%] h-[250] p-3 space-y-3">
              <UserRound color="#1A237E" className="fill-[#D1D3E5]" />
              <h4 className="text-20px text-[#000000]">AI Governance Advocates</h4>
              <p className="text-16px text-[#575757]">We prioritize conservative, explainable AI over flashy automation.</p>
            </div>

            <div className="border border-[#EDEDF0]-2 rounded-md w-[100%] h-[250] p-3 space-y-3">
              <UserRound color="#1A237E" className="fill-[#D1D3E5]" />
              <h4 className="text-20px text-[#000000]">System Builders</h4>
              <p className="text-16px text-[#575757]">We design structured platforms — not disconnected feature sets.</p>
            </div>

            <div className="border border-[#EDEDF0]-2 rounded-md w-[100%] h-[250] p-3 space-y-3">
              <UserRound color="#1A237E" className="fill-[#D1D3E5]" />
              <h4 className="text-20px text-[#000000]">Long-Term Partners</h4>
              <p className="text-16px text-[#575757]">We partner with law firms for the long run — supporting growth, compliance, and operational transformation through governed AI and scalable infrastructure.</p>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}
