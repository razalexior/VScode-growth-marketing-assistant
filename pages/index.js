// File: pages/index.js
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/generatePlan", { url });
      setResult(res.data);
      setPdfUrl(`data:application/pdf;base64,${res.data.pdf}`);
    } catch (err) {
      console.error("Error generating plan:", err);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-[#f8fdf5]">
      <header className="w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium text-xl">
            <span className="text-[#005c2e] font-semibold">ContentPlan</span>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
            <Button className="mb-8 rounded-full bg-[#f2f2f2] text-black hover:bg-[#e5e5e5] px-4 py-2 h-auto text-sm font-medium">
              Get early access
            </Button>
            <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6">
              <span className="text-gray-400">The</span>{" "}
              <span className="text-[#005c2e] font-semibold">AI marketing planner</span>{" "}
              <span className="text-gray-400">for people in</span>
              <br />
              <span className="text-gray-400">content teams</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl">
              ContentPlan takes your website URL and generates a personalized marketing strategy
            </p>
            <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto mb-16">
              <div className="flex w-full items-center space-x-2">
                <Input
                  type="url"
                  placeholder="Enter website URL (e.g., example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1 h-14 rounded-full border-gray-300 focus:border-[#005c2e] focus:ring-[#005c2e]"
                />
                <Button
                  type="submit"
                  className="gap-1 h-14 px-6 rounded-full bg-[#7ce27c] hover:bg-[#6bd26b] text-[#005c2e] font-medium"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Generate Plan"}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {result && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                <Card className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Your website analysis</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>{result.plan.summary}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-[#f0fae8]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">ContentPlan Recommendations</h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <p className="font-medium text-[#005c2e]">Channel Strategy</p>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          {result.plan.channels.map((ch, i) => (
                            <li key={i}>• {ch.name} – {ch.budget}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {result && (
              <div className="flex justify-center mt-16">
                <a
                  href={pdfUrl}
                  download="growth-plan.pdf"
                  className="flex items-center gap-2 h-12 px-6 rounded-full bg-[#7ce27c] hover:bg-[#6bd26b] text-[#005c2e] font-medium"
                >
                  <Download className="h-4 w-4" />
                  Download Marketing Plan PDF
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}