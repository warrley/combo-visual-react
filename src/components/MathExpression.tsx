
interface MathExpressionProps {
  coefficient: number;
  aPower: number;
  bPower: number;
  showPlus?: boolean;
}

export const MathExpression = ({ coefficient, aPower, bPower, showPlus = false }: MathExpressionProps) => {
  return (
    <span className="inline-flex items-center gap-1 text-lg">
      {showPlus && coefficient > 0 && <span className="text-muted-foreground">+</span>}
      <span className="font-semibold">{coefficient}</span>
      {aPower > 0 && (
        <span>
          a<sup className="text-sm">{aPower > 1 ? aPower : ""}</sup>
        </span>
      )}
      {bPower > 0 && (
        <span>
          b<sup className="text-sm">{bPower > 1 ? bPower : ""}</sup>
        </span>
      )}
    </span>
  );
};
