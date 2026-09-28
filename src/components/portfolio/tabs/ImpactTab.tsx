"use client";
import { motion } from "framer-motion";
import { Project } from "@/types";
import { 
  Users, TrendingUp, MessageCircle, RotateCcw, 
  Star, Award, BarChart2, ArrowUpRight, CheckCircle2
} from "lucide-react";

export default function ImpactTab({ project }: { project: Project }) {
  const impact = project.impact;

  if (!impact) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center py-12 text-pink-500/60">
          <BarChart2 className="w-12 h-12 mx-auto mb-4 text-pink-300" />
          <h3 className="text-lg font-medium text-pink-900 mb-2">No Impact Metrics Documented</h3>
          <p className="text-sm">
            This project doesn't have documented impact metrics or retrospective notes.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-pink-950">Impact & Retrospective</h2>
          <p className="text-pink-600 mt-1">Measured outcomes, user feedback, and lessons learned</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impact.users && (
          <MetricCard 
            icon={<Users size={20} />} 
            label="Users / Reach" 
            value={impact.users} 
          />
        )}
        {impact.performance && (
          <MetricCard 
            icon={<TrendingUp size={20} />} 
            label="Performance" 
            value={impact.performance} 
          />
        )}
        {(impact.feedback?.length ?? 0) > 0 && (
          <MetricCard 
            icon={<MessageCircle size={20} />} 
            label="Feedback" 
            value={`${impact.feedback!.length} quotes`} 
          />
        )}
      </div>

      {impact.feedback && impact.feedback.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-pink-950 mb-4">
            <Star size={20} className="text-pink-500" />
            User Feedback
          </h3>
          <div className="space-y-3">
            {impact.feedback.map((quote, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white border border-pink-100/50 rounded-xl p-5 relative"
              >
                <div className="absolute top-3 right-3 text-pink-200">
                  <Star size={18} fill="currentColor" />
                </div>
                <p className="text-pink-700/80 italic">"{quote}"</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-pink-950 mb-4">
          <RotateCcw size={20} className="text-pink-500" />
          Retrospective
        </h3>
        <div className="bg-white border border-pink-100/50 rounded-xl p-6">
          <p className="text-pink-700/80 leading-relaxed">{impact.retrospective}</p>
        </div>
      </section>

      <section className="pt-6 border-t border-pink-100/50">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-pink-950 mb-4">
          <Award size={20} className="text-pink-500" />
          Key Takeaways
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <TakeawayCard 
            title="What Worked" 
            icon={<CheckCircle2 size={18} className="text-green-500" />}
            items={extractTakeaways(impact.retrospective, true)}
          />
          <TakeawayCard 
            title="What I'd Change" 
            icon={<RotateCcw size={18} className="text-pink-500" />}
            items={extractTakeaways(impact.retrospective, false)}
          />
        </div>
      </section>
    </div>
  );
}

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function MetricCard({ icon, label, value }: MetricCardProps) {
  return (
    <div className="bg-white border border-pink-100/50 rounded-xl p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-pink-100/50 flex items-center justify-center text-pink-500">
          {icon}
        </div>
        <span className="text-xs font-medium text-pink-500 uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-2xl font-bold text-pink-950">{value}</p>
    </div>
  );
}

interface TakeawayCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

function TakeawayCard({ title, icon, items }: TakeawayCardProps) {
  return (
    <div className="bg-white border border-pink-100/50 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-lg bg-pink-100/50 flex items-center justify-center">
          {icon}
        </div>
        <h4 className="font-semibold text-pink-950">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-pink-700/80 text-sm flex items-start gap-2">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function extractTakeaways(retrospective: string, positive: boolean): string[] {
  const sentences = retrospective.split('.').map(s => s.trim()).filter(Boolean);
  const keywords = positive ? ['would invest', 'worked', 'success', 'great', 'good', 'well'] : ['would change', 'improve', 'issue', 'problem', 'challenge', 'next:'];
  return sentences
    .filter(s => keywords.some(k => s.toLowerCase().includes(k)))
    .slice(0, 3)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1));
}