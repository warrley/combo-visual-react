
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Permutation } from "@/components/calculators/Permutation";
import { Arrangement } from "@/components/calculators/Arrangement";
import { Combination } from "@/components/calculators/Combination";
import { BinomialExpansion } from "@/components/calculators/BinomialExpansion";
import { PascalTriangle } from "@/components/calculators/PascalTriangle";
import { CoefficientFinder } from "@/components/calculators/CoefficientFinder";
import { Calculator, Menu } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("permutation");

  const tabs = [
    { id: "permutation", name: "Permutação", icon: "🔢" },
    { id: "arrangement", name: "Arranjo", icon: "🎯" },
    { id: "combination", name: "Combinação", icon: "🎲" },
    { id: "binomial", name: "Expansão Binomial", icon: "📈" },
    { id: "pascal", name: "Triângulo de Pascal", icon: "🔺" },
    { id: "coefficient", name: "Coeficiente x^n", icon: "🎯" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "permutation":
        return <Permutation />;
      case "arrangement":
        return <Arrangement />;
      case "combination":
        return <Combination />;
      case "binomial":
        return <BinomialExpansion />;
      case "pascal":
        return <PascalTriangle />;
      case "coefficient":
        return <CoefficientFinder />;
      default:
        return <Permutation />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-3">
            <Calculator className="h-8 w-8" />
            <div>
              <h1 className="text-3xl font-bold">Calculadora Combinatória</h1>
              <p className="text-primary-foreground/80">Ferramentas matemáticas para combinatória</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto space-x-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                <span>{tab.icon}</span>
                <span className="text-sm font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          {renderContent()}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 px-4 mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>Calculadora Combinatória - Desenvolvido com React e TypeScript</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
