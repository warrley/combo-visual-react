
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MathExpression } from "@/components/MathExpression";
import { expandBinomial } from "@/lib/math";

export const BinomialExpansion = () => {
  const [n, setN] = useState<number>(2);
  const [terms, setTerms] = useState(expandBinomial(2));

  const calculate = (value: number) => {
    if (value >= 0 && value <= 12) {
      setTerms(expandBinomial(value));
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📈 Expansão Binomial
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="max-w-xs">
          <Label htmlFor="bin-n">Expoente n em (a + b)ⁿ:</Label>
          <Input
            id="bin-n"
            type="number"
            min="0"
            max="12"
            value={n || ""}
            onChange={(e) => {
              const value = parseInt(e.target.value) || 0;
              setN(value);
              calculate(value);
            }}
          />
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            (a + b)<sup>{n}</sup> =
          </h3>
          <div className="flex flex-wrap gap-2 items-center text-lg">
            {terms.map((term, index) => (
              <span key={index} className="flex items-center">
                <MathExpression
                  coefficient={term.coefficient}
                  aPower={term.aPower}
                  bPower={term.bPower}
                  showPlus={index > 0}
                />
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
