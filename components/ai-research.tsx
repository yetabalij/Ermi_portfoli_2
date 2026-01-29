import React from "react";
import { Brain, Search, Microscope, Sparkles } from "lucide-react";

export function AIResearch() {
    const aiSkills = [
        "Machine Learning Fundamentals",
        "Supervised Learning",
        "Unsupervised Learning",
        "Feature Engineering",
        "Model Evaluation & Validation",
        "Algorithm Selection & Tuning",
        "Predictive Analysis",
        "Classification & Clustering",
        "Pattern Recognition",
        "AI Model Lifecycle",
        "AI Ethics & Bias Awareness",
    ];

    const researchSkills = [
        "Research Design",
        "Problem Formulation",
        "Experimental Design",
        "Literature Review",
        "Systematic Review",
        "Statistical Analysis",
        "Result Interpretation",
        "Reproducibility & Validation",
        "Research Writing & Documentation",
    ];

    return (
        <section id="ai-research" className="py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-12 text-center">
                    AI & Research Skills
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* AI Skills Card */}
                    <div className="flex flex-col p-8 rounded-2xl bg-[#1c203a]/40 border border-white/5 hover:border-[#6387f2]/30 hover:bg-[#1c203a]/60 transition-all duration-500 group relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20">
                                <Brain className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">AI Skills</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10">
                            {aiSkills.map((skill) => (
                                <div key={skill} className="flex items-start gap-3 group/item">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6387f2] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                    <span className="text-sm text-muted-foreground group-hover/item:text-white transition-colors leading-tight">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Research Skills Card */}
                    <div className="flex flex-col p-8 rounded-2xl bg-[#1c203a]/40 border border-white/5 hover:border-[#6387f2]/30 hover:bg-[#1c203a]/60 transition-all duration-500 group relative overflow-hidden">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-[#6387f2]/10 text-[#6387f2] border border-[#6387f2]/20">
                                <Microscope className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">Research Skills</h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 relative z-10">
                            {researchSkills.map((skill) => (
                                <div key={skill} className="flex items-start gap-3 group/item">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#6387f2] opacity-40 group-hover/item:opacity-100 transition-opacity" />
                                    <span className="text-sm text-muted-foreground group-hover/item:text-white transition-colors leading-tight">
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
