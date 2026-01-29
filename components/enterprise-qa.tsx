import React from "react";
import { Network, CheckCheck, Landmark, ListChecks, Target, ShieldCheck } from "lucide-react";

export function EnterpriseQA() {
    const architectureSkills = [
        "TOGAF (ADM)",
        "ArchiMate",
        "UML",
        "Business Capability Mapping",
        "Application Portfolio Management (APM)",
        "Technology Portfolio Management (TPM)",
        "Reference Architecture Design",
        "Solution Architecture",
        "Architecture Roadmapping",
        "Architecture Governance",
        "Architecture Compliance Review",
        "Architecture Decision Records (ADR)",
    ];

    const qaSkills = [
        "Design-Level QA",
        "SDLC Quality Gates",
        "Requirements Validation",
        "Test Strategy Review",
        "System Integration QA",
        "Release Readiness Assessment",
        "Defect Root Cause Analysis",
        "Quality Metrics & KPIs",
    ];

    return (
        <section id="enterprise-qa" className="py-16 px-6 md:px-12 lg:px-24 bg-background/50">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12 text-center">
                    Enterprise Architecture & Quality Assurance
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Enterprise Architecture Card */}
                    <div className="flex flex-col p-8 rounded-2xl bg-[#1c203a]/40 border border-white/5 hover:border-[#6387f2]/30 hover:bg-[#1c203a]/60 transition-all duration-500 group relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20">
                                <Landmark className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Enterprise Architecture</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10">
                            {architectureSkills.map((skill) => (
                                <div key={skill} className="flex items-start gap-3 group/item">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6387f2] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                    <span className="text-sm text-muted-foreground group-hover/item:text-white transition-colors leading-tight">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quality Assurance Card */}
                    <div className="flex flex-col p-8 rounded-2xl bg-[#1c203a]/40 border border-white/5 hover:border-[#6387f2]/30 hover:bg-[#1c203a]/60 transition-all duration-500 group relative overflow-hidden">


                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20">
                                <CheckCheck className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Quality Assurance</h3>
                        </div>

                        <div className="space-y-4 relative z-10">
                            {qaSkills.map((skill) => (
                                <div key={skill} className="flex items-start gap-3 group/item">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6387f2] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                    <span className="text-sm text-muted-foreground group-hover/item:text-white transition-colors">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
