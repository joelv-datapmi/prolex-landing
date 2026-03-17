"use client"

import { ScrollReveal } from "@/components/shared/ScrollReveal"

const team = [
    {
        title: "Legal-First Thinkers",
        description:
            "Built with deep understanding of court-driven workflows and compliance sensitivity.",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-full h-full inline-block flex-shrink-0"
            fill="rgb(26, 35, 126)"
        >
            <g>
                <path
                    d="M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z"
                    opacity="0.2"
                />
                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
            </g>
        </svg>,
    },
    {
        title: "AI Governance Advocates",
        description:
            "We prioritise conservative, explainable AI over flashy automation.",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-full h-full inline-block flex-shrink-0"
            fill="rgb(26, 35, 126)"
        >
            <g>
                <path
                    d="M232,152a103.93,103.93,0,0,1-5.9,34.63,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48A104,104,0,0,1,232,152Z"
                    opacity="0.2"
                />
                <path d="M114.34,154.34l96-96a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32ZM128,88a63.9,63.9,0,0,1,20.44,3.33,8,8,0,1,0,5.11-15.16A80,80,0,0,0,48.49,160.88,8,8,0,0,0,56.43,168c.29,0,.59,0,.89-.05a8,8,0,0,0,7.07-8.83A64.92,64.92,0,0,1,64,152,64.07,64.07,0,0,1,128,88Zm99.74,13a8,8,0,0,0-14.24,7.3,96.27,96.27,0,0,1,5,75.71l-181.1-.07A96.24,96.24,0,0,1,128,56h.88a95,95,0,0,1,42.82,10.5A8,8,0,1,0,179,52.27,110.8,110.8,0,0,0,129,40h-1A112.05,112.05,0,0,0,22.35,189.25,16.07,16.07,0,0,0,37.46,200H218.53a16,16,0,0,0,15.11-10.71,112.35,112.35,0,0,0-5.9-88.3Z" />
            </g>
        </svg>,
    },
    {
        title: "System Builders",
        description:
            "We design structured platforms, not disconnected feature sets.",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-full h-full inline-block flex-shrink-0"
            fill="rgb(26, 35, 126)"
        >
            <g>
                <path
                    d="M216,80c0,26.51-39.4,48-88,48S40,106.51,40,80s39.4-48,88-48S216,53.49,216,80Z"
                    opacity="0.2"
                />
                <path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" />
            </g>
        </svg>,
    },
    {
        title: "Long-Term Partners",
        description:
            "We partner with law firms for the long run — supporting growth, compliance, and operational transformation through governed AI and scalable infrastructure.",
        icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-full h-full inline-block flex-shrink-0"
            fill="rgb(26, 35, 126)"
        >
            <g>
                <path
                    d="M225.94,161.94a48,48,0,0,1-67.88,0L128,128l30.06-33.94a48,48,0,0,1,67.88,67.88ZM30.06,94.06a48,48,0,0,0,67.88,67.88L128,128,97.94,94.06A48,48,0,0,0,30.06,94.06Z"
                    opacity="0.2"
                />
                <path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z" />
            </g>
        </svg>,
    },
]

export function AboutWhoWeAre() {
    return (
        <section className="bg-[#f7f7f8] py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-5 shadow-sm">
                            <span className="text-xs text-gray-500 font-medium">Values</span>
                        </div>
                        <h2 className="text-[48px] font-jakarta text-gray-900">Who We Are</h2>
                        <p className="text-[16px] text-gray-500 mt-4 max-w-sm mx-auto leading-relaxed">
                            We are legal technologists, system architects, and product thinkers committed
                            to modernising legal practice responsibly.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {team.map((t, i) => (
                        <ScrollReveal key={t.title} delay={i * 0.08} className="h-full">
                            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-xl mb-4 shrink-0">
                                    {t.icon}
                                </div>
                                <h3 className="font-jakarta text-[20px] text-gray-900 mb-2">{t.title}</h3>
                                <p className="text-[16px] text-gray-500 leading-relaxed">{t.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    )
}