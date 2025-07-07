
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { factorial } from "@/lib/math";

export const Permutation = () => {
  const [n, setN] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  const calculate = (value: number) => {
    if (value >= 0 && value <= 20) {
      setResult(factorial(value));
    } else {
      setResult(null);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🔢 Permutação
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="perm-n">Valor de n:</Label>
          <Input
            id="perm-n"
            type="number"
            min="0"
            max="20"
            value={n || ""}
            onChange={(e) => {
              const value = parseInt(e.target.value) || 0;
              setN(value);
              calculate(value);
            }}
            placeholder="Digite um número"
          />
        </div>
        
        {result !== null && (
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-lg font-semibold">
              {n}! = {result.toLocaleString()}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
