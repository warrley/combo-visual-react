
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { arrangement } from "@/lib/math";

export const Arrangement = () => {
  const [n, setN] = useState<number>(0);
  const [r, setR] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = (nVal: number, rVal: number) => {
    if (nVal >= 0 && rVal >= 0 && rVal <= nVal && nVal <= 20) {
      setResult(arrangement(nVal, rVal));
    } else {
      setResult(null);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🎯 Arranjo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="arr-n">Número de elementos (n):</Label>
          <Input
            id="arr-n"
            type="number"
            min="0"
            max="20"
            value={n || ""}
            onChange={(e) => {
              const value = parseInt(e.target.value) || 0;
              setN(value);
              calculate(value, r);
            }}
          />
        </div>
        
        <div>
          <Label htmlFor="arr-r">Tomados de quantos em quantos (r):</Label>
          <Input
            id="arr-r"
            type="number"
            min="0"
            max="20"
            value={r || ""}
            onChange={(e) => {
              const value = parseInt(e.target.value) || 0;
              setR(value);
              calculate(n, value);
            }}
          />
        </div>
        
        {result !== null && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-lg font-semibold">
              A({n}, {r}) = {result.toLocaleString()}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
