
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generatePascalTriangle } from "@/lib/math";

export const PascalTriangle = () => {
  const [rows, setRows] = useState<number>(5);
  const [triangle, setTriangle] = useState(generatePascalTriangle(5));

  const calculate = (value: number) => {
    if (value >= 0 && value <= 15) {
      setTriangle(generatePascalTriangle(value));
    }
  };

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🔺 Triângulo de Pascal
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="max-w-xs">
          <Label htmlFor="pascal-rows">Número de linhas:</Label>
          <Input
            id="pascal-rows"
            type="number"
            min="0"
            max="15"
            value={rows || ""}
            onChange={(e) => {
              const value = parseInt(e.target.value) || 0;
              setRows(value);
              calculate(value);
            }}
          />
        </div>
        
        <div className="bg-muted p-6 rounded-lg overflow-x-auto">
          <div className="flex flex-col items-center space-y-2">
            {triangle.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center space-x-3">
                {row.map((value, colIndex) => (
                  <div
                    key={colIndex}
                    className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm hover:scale-110 transition-transform cursor-pointer"
                  >
                    {value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
