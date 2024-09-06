import { cn } from "@/lib/utils";
import { Billboard as IBillBoard } from "@/types";
import ColorEffect from "./ui/color-effect";

interface BillboardProps {
  data?: IBillBoard;
  additionalProps?: string;
  rounded: string;
  name: string;
}

const Billboard: React.FC<BillboardProps> = ({
  data,
  additionalProps,
  rounded,
  name,
}) => {
  return (
    <section className={cn("overflow-hidden shadow-md", rounded)}>
      <div
        className={cn(
          "relative aspect-[3/1] overflow-hidden bg-cover",
          additionalProps
        )}
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full text-center gap-y-8">
          <div className="max-w-xs text-xl font-bold sm:text-2xl lg:text-3xl sm:max-w-xl">
            <ColorEffect>{`Find all your needs on ${name}`}</ColorEffect>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
