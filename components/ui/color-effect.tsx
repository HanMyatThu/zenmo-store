interface CollorEffectProps {
  children: string | undefined;
}

const ColorEffect: React.FC<CollorEffectProps> = ({ children }) => {
  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-violet-600">
      {children}
    </span>
  );
};

export default ColorEffect;
