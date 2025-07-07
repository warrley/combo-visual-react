
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { combination } from "@/lib/math";

export const CoefficientFinder = () => {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(1);
  const [n, setN] = useState<number>(2);
  const [targetExp, setTargetExp] = useState<number>(2);
  const [result, setResult] = useState<{coefficient: number, position: number} | null>(null);
  const [error, setError] = useState<string>("");

  const calculate = () => {
    // Calculando qual termo tem x^targetExp na expansão de (x^a + x^b)^n
    const pCalc = (targetExp - (a * n)) / (b - a);
    const p = Math.round(pCalc);
    
    if (Math.abs(pCalc - p) > 0.001 || p < 0 || p > n) {
      setError(`Não existe termo com x^${targetExp} nessa expansão.`);
      setResult(null);
    } else {
      setError("");
      setResult({
        coefficient: combination(n, p),
        position: p + 1
      });
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🎯 Coeficiente do Termo x<sup>n</sup>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="coeff-a">Expoente a:</Label>
            <Input
              id="coeff-a"
              type="number"
              value={a || ""}
              onChange={(e) => {
                setA(parseInt(e.target.value) || 0);
              }}
            />
          </div>
          
          <div>
            <Label htmlFor="coeff-b">Expoente b:</Label>
            <Input
              id="coeff-b"
              type="number"
              value={b || ""}
              onChange={(e) => {
                setB(parseInt(e.target.value) || 0);
              }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="coeff-n">Expoente do binômio n:</Label>
            <Input
              id="coeff-n"
              type="number"
              min="0"
              max="20"
              value={n || ""}
              onChange={(e) => {
                setN(parseInt(e.target.value) || 0);
              }}
            />
          </div>
          
          <div>
            <Label htmlFor="coeff-target">Expoente desejado:</Label>
            <Input
              id="coeff-target"
              type="number"
              value={targetExp || ""}
              onChange={(e) => {
                setTargetExp(parseInt(e.target.value) || 0);
              }}
            />
          </div>
        </div>
        
        <button
          onClick={calculate}
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
        >
          Calcular
        </button>
        
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">
            Binômio: (x<sup>{a}</sup> + x<sup>{b}</sup>)<sup>{n}</sup>
          </p>
          
          {error && (
            <p className="text-red-500 font-semibold">{error}</p>
          )}
          
          {result && (
            <p className="text-lg font-semibold">
              O {result.position}º termo tem coeficiente {result.coefficient} com x<sup>{targetExp}</sup>
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
